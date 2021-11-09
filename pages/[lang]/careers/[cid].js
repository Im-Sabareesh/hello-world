import React from 'react';
import i18next from 'i18next';
import _ from 'lodash';
import { useDispatch } from 'react-redux';
import { CareerDetailsComponent, Meta } from '@components';
// import { api } from '@libs';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';
import { careerAction } from '@redux';
import { api } from '@libs';

const CareerDetails = () => {
    const t = i18next.t.bind(i18next);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(careerAction.careerList());
    }, []);
    return (
        <div className="CareerDetails-wrapper">
            <Meta title={t('careerDetails')} desc="" />

            <CareerDetailsComponent />
        </div>
    );
};

export async function getStaticPaths() {
    const careers = await api.getCareerList();
    const cids = _.map(careers.careers, (carr) => carr.id);
    let lang = getAllLanguageSlugs();
    let paths = [];
    _.map(lang, (l) =>
        _.map(cids, (c) =>
            paths.push({ params: { lang: l.params.lang, cid: `${c}` } })
        )
    );
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params, locale }) {
    const language = getLanguage(params.lang);

    return {
        props: {
            // careeerDetails: await api.getCareerDetails(1),
            language,
        },
    };
}

export default CareerDetails;

CareerDetails.propTypes = {};

CareerDetails.defaultProps = {};
