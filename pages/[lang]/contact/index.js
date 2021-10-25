import React from 'react';
import i18next from 'i18next'

import { ContactComponent, Meta } from '@components';
import {getAllLanguageSlugs, getLanguage} from '@libs/lang';

const ContactUs = () => {
    const t  = i18next.t.bind(i18next);
    return (
        <div className="contactus-page">
            <Meta title={t('contactUs')} desc="" />

            <ContactComponent />
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
