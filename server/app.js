const express = require('express');
const compression = require('compression');
const next = require('next');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const api = require('./api');
const siteMap = require('./siteMap')
const basicAuth = require('express-basic-auth');
require('dotenv').config();

const dev = process.env.dev == 'true';
const port = process.env.port;
const {
    errorLogger,
    errorResponder,
    invalidPathHandler,
} = require('./middleware');

const app = next({ dev });
const handle = app.getRequestHandler();

var customAuthorizerAuth = basicAuth({
    challenge: true,
    realm: 'test',
    users: { [process.env.CROWLING_USERNAME]: process.env.CROWLING_PASS },
});

app.prepare().then(async () => {
    const server = express();
    server.use(cors());

    server.use(compression());
    server.use(express.json({ limit: '50mb', extended: true }));
    server.use(bodyParser.json({ limit: '50mb', extended: true }));
    server.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

    server.get('/_next/*', (req, res) => {
        handle(req, res);
    });
    server.get('/static/*', (req, res) => {
        handle(req, res);
    });

    api(server);

    // customAuthorizerAuth
    server.get('/*', (req, res) => {
        handle(req, res);
    });
    // server.get('/robots.txt', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public', 'robots.txt'));
    // });
    // server.post('/sent-mail', require('./sendMail'));
    // middleware

    siteMap({ server });
    server.use(errorLogger);
    server.use(errorResponder);
    server.use(invalidPathHandler);
    server.listen(port, (err) => {});
});
