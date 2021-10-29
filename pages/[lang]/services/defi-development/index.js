import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { servicesAction } from '@redux';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';

import { DefiServiceComponent, Meta } from '@components';

const DefiServices = (props) => {
    const t = i18next.t.bind(i18next);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(servicesAction.fetchList());
    }, []);
    return (
        <div className="nft-service-page defi-service-page">
            <Meta title={t('defiDevelopment')} desc="" />

            <DefiServiceComponent language={props.language} />
        </div>
    );
};

export default DefiServices;

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

DefiServices.propTypes = {};

DefiServices.defaultProps = {};
