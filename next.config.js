const path = require('path');

module.exports = {
    trailingSlash: true,
    reactStrictMode: true,
    trailingSlash: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
