const express = require('express');
const router = express.Router();
const sm = require('sitemap');
const path = require('path');
const sitemap = sm.createSitemap({
  hostname: process.env.API_URL,
  cacheTime: 6000000, // 6000 sec - cache purge period
});

router.use((req, res, next) => {
    // if (!req.user) {
    //   res.status(401).json({ error: string.statusResponses.unAuthoried });
    //   return;
    // }
    next();
});

router.get('/sitemap.xml', async (req, res) => {
    try {
        sitemap.toXML((err, xml) => {
            if (err) {
                res.status(500).end();
                return;
            }    
            res.header('Content-Type', 'application/xml');
            res.sendFile(path.join(__dirname, '../../public', 'sitemap.xml'));
        });    } catch (err) {
        res.json({ error: err.message || err.toString() });
    }
});

module.exports = router;
