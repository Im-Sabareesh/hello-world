import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { AboutUsComponent } from '@components';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <Head>
                <title>About Us</title>
            </Head>

            <AboutUsComponent />
        </div>
    );
};

export default AboutUs;

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['common'])),
        },
    };
};

AboutUs.propTypes = {};

AboutUs.defaultProps = {};