import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { AboutUsComponent, Meta } from '@components';

const AboutUs = () => {
    const { t } = useTranslation('about');
    return (
        <div className="about-us-page">

            <Meta title={t('title')} desc="" />

            <AboutUsComponent />

        </div>
    );
};

export default AboutUs;

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['about', 'common'])),
        },
    };
};

AboutUs.propTypes = {};

AboutUs.defaultProps = {};