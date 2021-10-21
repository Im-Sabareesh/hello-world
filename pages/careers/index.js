import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CareersComponent } from '@components';

const Careers = () => {
    return (
        <div className="career-page">
            <Head>
                <title>Careers</title>
            </Head>

            <CareersComponent />
        </div>
    );
};

export default Careers;

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['common'])),
        },
    };
};
