const express = require('express');
const router = express.Router();
const data = require('../util/dummy/services.json');

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

module.exports = router;
