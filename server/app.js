const express = require('express');
const compression = require('compression');
const next = require('next');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const dev = process.env.dev == 'true';
const port = process.env.port;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
    const server = express();
    server.use(cors());
    server.use(helmet());
    server.use(compression());
    server.use(express.json({ limit: '50mb', extended: true }));
    server.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

    server.get('/_next/*', (req, res) => {
        handle(req, res);
    });

    server.get('/static/*', (req, res) => {
        handle(req, res);
    });

    server.post('/sent-mail', require('./sendMail'));

    server.get('/', function (req, res) {
        res.send('hello world');
    });
    server.listen(port, (err) => {});
});