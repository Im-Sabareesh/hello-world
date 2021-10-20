const path = require('path');
const {
    PHASE_DEVELOPMENT_SERVER,
    PHASE_PRODUCTION_BUILD,
} = require('next/constants');

module.exports = (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    // when `next build` or `npm run build` is used
    const isProd =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
    // when `next build` or `npm run build` is used
    const isStaging =
        phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

    // console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`);

    const env = {
        API_URL: (() => {
            if (isDev)
                return 'http://my-json-server.typicode.com/kathirpandian1993/demo';
            if (isProd) {
                return 'http://my-json-server.typicode.com/kathirpandian1993/demo';
            }
            if (isStaging)
                return 'http://my-json-server.typicode.com/kathirpandian1993/demo';
            return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)';
        })(),
    };

    return {
        trailingSlash: true,
        reactStrictMode: true,
        trailingSlash: true,
        env: env,
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
    };
};
