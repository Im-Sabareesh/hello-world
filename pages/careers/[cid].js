import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CareerDetailsComponent, Meta } from '@components';
import { api } from '@libs';
const CareerDetails = () => {
    const { t } = useTranslation('careerDetails');
    return (
        <div className="CareerDetails-wrapper">
            <Meta title={t('title')} desc="" />

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
            ...(await serverSideTranslations(locale, ['careerDetails', 'common'])),
        },
    };
}

export default CareerDetails;

CareerDetails.propTypes = {};

CareerDetails.defaultProps = {};