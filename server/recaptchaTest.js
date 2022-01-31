const sendMail = require('./sendMail');
const { RecaptchaError } = require('./errors');

function recaptchaTest(locales, recaptchaToken, template, res, message = {}) {
    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`;

    fetch(url, { method: "post"}).then((response) => {
        if (!response.success) {
            throw new RecaptchaError();
        }
        // send Mail
        sendMail(locales, template, res, message);
        res.json({
            status: true,
            message: 'Email successfully sent',
        });
    }).catch((error) => {
        throw new RecaptchaError();
    });
}

module.exports = recaptchaTest;
