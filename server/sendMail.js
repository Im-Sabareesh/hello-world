const nodemailer = require('nodemailer');
const Email = require('email-templates');
const { MailDesignationRequired } = require('./errors');

function sendMail(options, req, next) {
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
        });
        email
            .send({
                template: 'mars',
                message: {
                    from: 'kathirpandian@arkinfotec.com',
                    to: options.body.email,
                },
                locals: {
                    fname: options.body.firstname,
                    email: options.body.email,
                    phone: options.body.phone,
                    description: options.body.description,
                    services: options.body.service,
                },
            })
            .then(() => {
                req.send('email has been sent!');
            })
            .catch((err) => {
                console.log(err);
                next(err);
            });
    } else {
        throw new MailDesignationRequired();
    }
}
module.exports = sendMail;
