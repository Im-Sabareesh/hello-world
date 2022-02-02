const multer = require('multer');
const express = require('express');
const router = express.Router();
const sendMail = require('../sendMail');
const Recaptcha = require('express-recaptcha').RecaptchaV2;
const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY);

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

router.post('/apply-now',  recaptcha.middleware.verify, (req, res, next) => {
    if (req.recaptcha.error) {
        res.status(422).json({ message: 'Recaptcha token is invalid' });
    }
    try {
        var storage = multer.diskStorage({
            destination: 'public/uploads/',
            filename: (req, file, cb) => cb(null, file.originalname),
        });
        var upload = multer({
            storage: storage,
            limits: { fileSize: 1024 * 1024 * 1024, fieldSize: 10000000000 },
        }).any();
        upload(req, res, function (err) {
            if (err) {
                res.json({ error: err.message || err.toString() });
            } else {
                const data = {
                    fname: `${req.body.firstName} ${req.body.lastName}`,
                    email: req.body.email,
                    phone: `${req.body.areaCode}${req.body.phoneNumber}`,
                    description: req.body.coverLtr,
                    whenStart: req.body.whenStart,
                    position: req.body.position,
                };
                sendMail(data, 'career', res, {attachments: req.files});
            }
            res.json({
                status: true,
                message: 'Email successfully sent',
            });
        });
    } catch (err) {
        console.log('error ', err);
        res.json({ error: err.message || err.toString() });
    }
});

module.exports = router;
