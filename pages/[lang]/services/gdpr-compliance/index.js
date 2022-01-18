import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { servicesAction } from '@redux';

import { GDPRComponent, Meta } from '@components';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';

const GDPRServices = (props) => {
    const t = i18next.t.bind(i18next);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(servicesAction.fetchList());
    }, []);
    return (
        <div className="nft-service-page hyperledger-service-page gdpr-service">
            <Meta title={t('home.gdprCompliance')} desc="" />

            <GDPRComponent language={props.language} />
        </div>
    );
};

export default GDPRServices;

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

GDPRServices.propTypes = {};

GDPRServices.defaultProps = {};
