import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['common'])),
        },
    };
};
