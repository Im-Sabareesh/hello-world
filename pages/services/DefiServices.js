import React from 'react';
import Head from 'next/head';

import { DefiServiceComponent } from '@components';

const DefiServices = () => {
    return (
        <div className="nft-service-page defi-service-page">
            <Head>
                <title>Defi development</title>
            </Head>

            <DefiServiceComponent />
        </div>
    );
};

export default DefiServices;
