const express = require('express');
const router = express.Router();
const sendMail = require('../sendMail');
const Recaptcha = require('express-recaptcha').RecaptchaV2;
const recaptcha = new Recaptcha(process.env.RECAPTCHA_SITE_KEY, process.env.RECAPTCHA_SECRET_KEY);

router.post('/home', recaptcha.middleware.verify, (req, res) => {
  if (req.recaptcha.error) {
    res.status(422).json({ message: 'Recaptcha token is invalid' });
  }
  const { firstname, email, phone, description} = req.body;
  const locales = {
      fname: firstname,
      email: email,
      phone: phone,
      description: description,
  };
  const template = 'mars';
  sendMail(locales, template, res);
  res.json({
    status: true,
    message: 'Email successfully sent',
  });
});

router.post('/contact', recaptcha.middleware.verify, (req, res) => {
  if (req.recaptcha.error) {
    res.status(422).json({ message: 'Recaptcha token is invalid' });
  }
  const { firstname, email, phone, service, description } = req.body;
  const locales = {
      fname: firstname,
      email: email,
      phone: phone,
      description: description,
      service: service,
  };
  const template = 'contact';
  sendMail(locales, template, res);
  res.json({
    status: true,
    message: 'Email successfully sent',
  });
});

module.exports = router;
