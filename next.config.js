const path = require('path');

module.exports = {
    trailingSlash: true,
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    i18n: {
        /**
         * Provide the locales you want to support in your application
         */
        locales: ["en-US"],
        /**
         * This is the default locale you want to be used when visiting
         * a non-locale prefixed path.
         */
        defaultLocale: "en-US",
    },
};
