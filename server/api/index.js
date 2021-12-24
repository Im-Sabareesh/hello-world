function api(server) {
    // server.use('/api/v1/send-mail', require('../sendMail'));
    server.use('/api/v1/careers', require('./careers'));
    server.use('/api/v1/services', require('./services'));
    server.use('/api/v1/send-email', require('./send-email'));
}

module.exports = api;
