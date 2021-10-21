import React from 'react';
import Head from 'next/head';

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
