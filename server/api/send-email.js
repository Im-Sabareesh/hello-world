const express = require('express');
const router = express.Router();
const recaptchaTest = require('../recaptchaTest');
const { RecaptchaError } = require('../errors');

router.post('/home', (req, res) => {
  const { firstname, email, phone, description, recaptchaToken } = req.body;
  const locales = {
      fname: firstname,
      email: email,
      phone: phone,
      description: description,
  };
  // Making request to verify recaptcha after send mail
  if (recaptchaToken) {
    recaptchaTest(locales, recaptchaToken, 'mars', res);
    res.json({
      status: true,
      message: 'Email successfully sent',
    });
  } else {
    throw new RecaptchaError();
  }
});

router.post('/contact', (req, res) => {
  const { firstname, email, phone, service, description, recaptchaToken } = req.body;
  const locales = {
      fname: firstname,
      email: email,
      phone: phone,
      description: description,
      service: service,
  };
  // Making request to verify recaptcha after send mail
  if (recaptchaToken) {
    recaptchaTest(locales, recaptchaToken, 'contact', res);
    res.json({
      status: true,
      message: 'Email successfully sent',
    });
  } else {
    throw new RecaptchaError();
  }
});

module.exports = router;
