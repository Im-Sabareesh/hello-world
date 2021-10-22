const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'de'],
    },
    useSuspense: false,
    wait: true,
    localePath: path.resolve('./public/locales'),
};
