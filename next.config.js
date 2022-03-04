const path = require('path');
// const webpack = require('@svgr/webpack')
// const withImages = require('next-images')
const dotenv = require('dotenv');

module.exports = {
    reactStrictMode: true,
    trailingSlash: true,
    env: dotenv.config({ path: '.env' }).parsed,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        loader: 'cloudinary',
        // path: "/",
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        domain: [
            'http://localhost:3000',
            'http://ec2-13-127-48-125.ap-south-1.compute.amazonaws.com',
            'https://chaincode.sumanastech.com',
            'https://chaincode.sumanas.xyz',
            'https://chaincodeconsulting.com',
        ],
        minimumCacheTTL: 60 * 60 * 7
    },
};
// }
