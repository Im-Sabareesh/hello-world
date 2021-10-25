import React from 'react';
import i18next from 'i18next';
import { AboutUsComponent, Meta } from '@components';

import {getAllLanguageSlugs, getLanguage} from '@libs/lang';
const AboutUs = () => {
    const t  = i18next.t.bind(i18next);
    return (
        <div className="about-us-page">
            <Meta title={t('header.aboutUS')} desc="" />

            <AboutUsComponent />
        </div>
    );
};

export default AboutUs;


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

AboutUs.propTypes = {};

AboutUs.defaultProps = {};
