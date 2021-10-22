import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { NFTSComponent, Meta } from '@components';

const NFTServices = () => {
    const { t } = useTranslation('common');
    return (
        <div className="nft-service-page">
            <Meta title={t('nftDevelopement')} desc="" />

            <NFTSComponent />
        </div>
    );
};

export default NFTServices;

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['common'])),
        },
    };
};

NFTServices.propTypes = {};

NFTServices.defaultProps = {};
