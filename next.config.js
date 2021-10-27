const path = require('path');
// const webpack = require('@svgr/webpack')
// const withImages = require('next-images')

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
        reactStrictMode: true,
        trailingSlash: true,
        env: env,
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')],
        },
        images: {
            loader: 'cloudinary',
            // path: "/",
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            domain: [
                'http://localhost:3000',
                'ec2-13-127-48-125.ap-south-1.compute.amazonaws.com',
                'chaincode.sumanastech.com',
            ],
        },
    };
    // }
};
