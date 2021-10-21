import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { NFTSComponent } from '@components';

const NFTServices = () => {
    return (
        <div className="nft-service-page">
            <Head>
                <title>NFT Development</title>
            </Head>
            <NFTSComponent />
        </div>
    );
};

export default NFTServices;

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['common'])),
        },
    };
};
