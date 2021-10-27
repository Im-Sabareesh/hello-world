import React from 'react';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';
import i18next from 'i18next';

import { HomeComponent, Meta } from '@components';

export default function Home(props) {
    const t = i18next.t.bind(i18next);
    return (
        <div className="home-page">
            <Meta title={t('home.title')} desc="" />

            <HomeComponent language={props.language} />
        </div>
    );
}

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

Home.propTypes = {};

Home.defaultProps = {};
