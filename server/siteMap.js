const sm = require('sitemap');

const sitemap = sm.createSitemap({
  hostname: process.env.API_URL,
  cacheTime: 6000000, // 6000 sec - cache purge period
});

function siteMapSetup({ server }) {
    server.get('/sitemap.xml', (req, res) => {
        sitemap.toXML((err, xml) => {
            if (err) {
                res.status(500).end();
                return;
            }
    
            res.header('Content-Type', 'application/xml');
            res.send(xml);
        });
    });
}

module.exports = siteMapSetup;