import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DefiServiceComponent, Meta } from '@components';

const DefiServices = () => {
    const { t } = useTranslation('common');
    return (
        <div className="nft-service-page defi-service-page">
            <Meta title={t('defiDevelopment')} desc="" />

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

DefiServices.propTypes = {};

DefiServices.defaultProps = {};
