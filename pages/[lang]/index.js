import React from 'react';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';
import i18next from 'i18next';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { HomeComponent, Meta } from '@components';

export default function Home(props) {
    const t = i18next.t.bind(i18next);
    return (
        <div className="home-page">
            <Meta title={t('blockChainConsulting')} desc="" />
            <GoogleReCaptchaProvider
                reCaptchaKey="6LegjB4dAAAAAPgQIx4piIsiMMHVl_07C29RC76m"
                scriptProps={{
                    async: false,
                    defer: false,
                    appendTo: 'body',
                    nonce: undefined,
                }}
            >
                <HomeComponent language={props.language} />
            </GoogleReCaptchaProvider>
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
