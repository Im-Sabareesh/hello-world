import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { servicesAction } from '@redux';

import { HLFDSComponent, Meta } from '@components';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';

const HLFDServices = (props) => {
    const t = i18next.t.bind(i18next);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(servicesAction.fetchList());
    }, []);
    return (
        <div className="nft-service-page hyperledger-service-page">
            <Meta title={t('nftDevelopement')} desc="" />

            <HLFDSComponent language={props.language} />
        </div>
    );
};

export default HLFDServices;

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

HLFDServices.propTypes = {};

HLFDServices.defaultProps = {};
