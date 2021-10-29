import React from 'react';
import i18next from 'i18next';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { ContactComponent, Meta } from '@components';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';

const ContactUs = (props) => {
    const t = i18next.t.bind(i18next);
    return (
        <div className="contactus-page">
            <Meta title={t('contactUs')} desc="" />
            <GoogleReCaptchaProvider
                reCaptchaKey="6Lctqf8cAAAAAOjPjg81IGT-gkd-MeQ1UfXpts2j"
                scriptProps={{
                    async: false,
                    defer: false,
                    appendTo: 'body',
                    nonce: undefined,
                }}
            >
                <ContactComponent language={props.language} />
            </GoogleReCaptchaProvider>
        </div>
    );
};

export default ContactUs;

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

ContactUs.propTypes = {};

ContactUs.defaultProps = {};
