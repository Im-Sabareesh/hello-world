import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { NFTSComponent, Meta } from '@components';

const NFTServices = () => {
    const { t } = useTranslation('nftDevelopment');
    return (
        <div className="nft-service-page">
            <Meta title={t('title')} desc="" />

            <NFTSComponent />
        </div>
    );
};

export default NFTServices;

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['nftDevelopment', 'common'])),
        },
    };
};

NFTServices.propTypes = {};

NFTServices.defaultProps = {};