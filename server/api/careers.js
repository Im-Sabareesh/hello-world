const multer = require('multer');
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Email = require('email-templates');
const { MailDesignationRequired } = require('../errors');

const data = require('../util/dummy/careers.json');
router.use((req, res, next) => {
    // if (!req.user) {
    //   res.status(401).json({ error: string.statusResponses.unAuthoried });
    //   return;
    // }
    next();
});

router.get('/fetch', async (req, res) => {
    try {
        res.header('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
    } catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

router.post('/apply-now', (req, res, next) => {
    try {
        var storage = multer.diskStorage({
            destination: 'public/uploads/',
            filename: (req, file, cb) => cb(null, file.originalname),
        });
        var upload = multer({
            storage: storage,
        }).any();
        upload(req, res, function (err) {
            if (err) {
                console.log('error -- >', err);
                return res.end('Error');
            } else {
                sendMail(req, req.files, res, next);
            }
        });
    } catch (err) {
        console.log('error ', err);
        res.json({ error: err.message || err.toString() });
    }
});

const sendMail = (options, files, res, next) => {
    let transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    });
    if (options.body.email) {
        const email = new Email({
            transport: transport,
            send: true,
            preview: false,
            message: {
                attachments: files,
            },
        });
        email
            .send({
                template: 'career',
                message: {
                    from: 'kathirpandian@arkinfotec.com',
                    to: options.body.email,
                    subject: options.body.coverLtr,
                },
                locals: {
                    fname: `${options.body.firstName} ${options.body.lastName}`,
                    email: options.body.email,
                    phone: `${options.body.areaCode}${options.body.phoneNumber}`,
                    description: options.body.coverLtr,
                    services: options.body.service,
                    whenStart: options.body.whenStart,
                    position: options.body.position,
                },
            })
            .then(() => {
                res.send('email has been sent!');
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    } else {
        throw new MailDesignationRequired();
    }
};

module.exports = router;
