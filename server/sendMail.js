const nodemailer = require('nodemailer');
const Email = require('email-templates');

function sendMail(options, req, next) {
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
            },
        })
        .then(() => {
            req.send('email has been sent!');
        })
        .catch((err) => {
            console.log(err);
            next(err);
        });
}
module.exports = sendMail;
