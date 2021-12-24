import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { servicesAction } from '@redux';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';

import { BlockChainComponent, Meta } from '@components';

const BlockChainService = (props) => {
    const t = i18next.t.bind(i18next);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(servicesAction.fetchList());
    }, []);
    return (
        <div className="nft-service-page defi-service-page blockchain-consulting-page">
            <Meta title={t('blockChainConsulting')} desc="" />

            <BlockChainComponent language={props.language} />
        </div>
    );
};

export default BlockChainService;

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

BlockChainService.propTypes = {};

BlockChainService.defaultProps = {};
