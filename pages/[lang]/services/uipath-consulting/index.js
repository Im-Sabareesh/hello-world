import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { servicesAction } from '@redux';

import { RPAComponent, Meta } from '@components';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';

const RPAServices = (props) => {
    const t = i18next.t.bind(i18next);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(servicesAction.fetchList());
    }, []);
    return (
        <div className="nft-service-page hyperledger-service-page rpa-service ui-path-service">
            <Meta title={t('rpaService.uiPathConsulting')} desc="" />

            <RPAComponent language={props.language} />
        </div>
    );
};

export default RPAServices;

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

RPAServices.propTypes = {};

RPAServices.defaultProps = {};
