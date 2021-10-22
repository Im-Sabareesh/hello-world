import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CareerDetailsComponent } from '@components';
import { api } from '@libs';

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

export async function getStaticPaths() {
    return { paths: [{ params: { cid: '1' } }], fallback: false };
}

export async function getStaticProps({ params, locale }) {
    return {
        props: {
            // careeerDetails: await api.getCareerDetails(1),
            ...(await serverSideTranslations(locale, ['common'])),
        },
    };
}

export default CareerDetails;
