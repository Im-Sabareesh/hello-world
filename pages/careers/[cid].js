import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CareerDetailsComponent } from '@components';

const CareerDetails = () => {
    return (
        <div className="CareerDetails-wrapper">
            <Head>
                <title>Career Details</title>
            </Head>

            <CareerDetailsComponent />
        </div>
    );
};

export default CareerDetails;

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['common'])),
        },
    };
};
