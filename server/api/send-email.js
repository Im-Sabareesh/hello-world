const express = require('express');
const router = express.Router();
const sendMail = require('../sendMail');

router.post('/home', (req, res) => {
    const { firstname, email, phone, description} = req.body;
    const locales = {
        fname: firstname,
        email: email,
        phone: phone,
        description: description,
    };
    const template = 'mars';
    sendMail(locales, template, res);
});

router.post('/contact', (req, res) => {
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
});

module.exports = router;
