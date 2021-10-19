const path = require('path');
const { i18n, localePath } = require('./next-i18next.config');

module.exports = {
    trailingSlash: true,
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    i18n,
    localePath,
};
