const nodemailer = require('nodemailer');
const Email = require('email-templates');
const { MailError } = require('./errors');

function sendMail(locales, template, res, message = {}) {
    let transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
        },
    });
    const email = new Email({
        transport: transport,
        send: true,
        preview: false,
        message: message,
    });
    email
        .send({
            template,
            message: {
                from: process.env.fromMail,
                to: process.env.fromMail,
            },
            locals: locales,
        })
        .then(() => {})
        .catch((err) => {
            // req.status(500).send(err);
            throw new MailError(err);
        });
}

module.exports = sendMail;
