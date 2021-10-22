import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { HomeComponent, Meta } from '@components';

export default function Home() {
    const { t } = useTranslation('home');
    return (
        <div className="home-page">

            <Meta title={t('title')} desc="" />

            <HomeComponent />

        </div>
    );
}

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['home', 'common'])),
        },
    };
}

Home.propTypes = {};

Home.defaultProps = {};
