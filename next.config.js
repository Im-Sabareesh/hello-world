const path = require('path');
const webpack = require('@svgr/webpack')
const withImages = require('next-images')

const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD} = require('next/constants');

module.exports = (phase) => {

    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    // when `next build` or `npm run build` is used
    const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1';
    // when `next build` or `npm run build` is used
    const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

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
        })()
    };

    //     webpack(config) {
    //         config.module.rules.push({
    //           test: /\.svg$/,
    //           issuer: {
    //             test: /\.(js|ts)x?$/,
    //            // for webpack 5 use
    //            // { and: [/\.(js|ts)x?$/] }
    //           },

    //           use: ['@svgr/webpack'],
    //         });
    // }


    return {
        // withImages({
        //     distDir: '../_next',
        //     webpack(config, options) {
        //         return config;
        //       }
        // }),
        webpack(config) {
            config.module.rules.push({
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                use: {
                  loader: 'url-loader',
                  options: {
                    limit: 100000,
                    name: '[name].[ext]',
                    esModule: false,
                  },
                },
              });
              
            return config
        },
        reactStrictMode: true,
        trailingSlash: true,
        env: env,
        sassOptions: {
            includePaths: [path.join(__dirname, 'styles')]
        },
        images: {
            loader: "imgix",
            path: "/",
            domain: ['localhost',]

        },
        exportPathMap: async function (defaultPathMap, {
            dev,
            dir,
            outDir,
            distDir,
            buildId
        }) {
            return {
                '/': {
                    page: '/'
                },
                '/404': {
                    page: '/404'
                },
                '/500': {
                    page: '/500'
                },
                '/en': {
                    page: '/en'
                },
                '/de': {
                    page: '/de'
                },
                '/en/about': {
                    page: '/en/about'
                },
                '/de/about': {
                    page: '/de/about'
                },
                '/de/careers': {
                    page: '/de/careers'
                },
                '/en/careers': {
                    page: '/en/careers'
                },
                '/en/careers/1': {
                    page: '/en/careers'
                },
                '/de/careers/1': {
                    page: '/en/careers'
                },
                '/en/contact': {
                    page: '/en/careers'
                },
                '/de/contact': {
                    page: '/en/careers'
                },
                '/de/services/DefiServices': {
                    page: '/en/careers'
                },
                '/en/services/DefiServices': {
                    page: '/en/careers'
                },
                '/de/services/NFTServices': {
                    page: '/en/careers'
                },
                '/en/services/NFTServices': {
                    page: '/en/careers'
                }


            }
        }
    };
    // }

};

