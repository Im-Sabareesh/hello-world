import React from 'react';
import i18next from 'i18next';

import { NFTSComponent, Meta } from '@components';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';

const NFTServices = () => {
    const t = i18next.t.bind(i18next);
    return (
        <div className="nft-service-page">
            <Meta title={t('nftDevelopement')} desc="" />

            <NFTSComponent />
        </div>
    );
};

export default NFTServices;

export async function getStaticPaths() {
    const paths = getAllLanguageSlugs();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const language = getLanguage(params.lang);
    return {
        props: {
            language,
        },
    };
}

NFTServices.propTypes = {};

NFTServices.defaultProps = {};
