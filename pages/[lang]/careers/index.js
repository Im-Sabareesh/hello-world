import React from 'react';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';

import { CareersComponent, Meta } from '@components';
import { careerAction } from '@redux';
import {getAllLanguageSlugs, getLanguage} from '@libs/lang';

const Careers = (props) => {
    const t  = i18next.t.bind(i18next);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(careerAction.careerList());
    }, []);
    return (
        <div className="career-page">
            <Meta title={t('career')} desc="" />

            <CareersComponent language={props.language} />
        </div>
    );
};


export async function getStaticPaths() {
	const  paths = getAllLanguageSlugs();
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

export default Careers;

Careers.propTypes = {};

Careers.defaultProps = {};
