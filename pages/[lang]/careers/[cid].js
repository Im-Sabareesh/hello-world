import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';
import { CareerDetailsComponent, Meta } from '@components';
// import { api } from '@libs';
import { getAllLanguageSlugs, getLanguage } from '@libs/lang';
import { careerAction } from '@redux';

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
    let paths = getAllLanguageSlugs();
    if (paths && Array.isArray(paths))
        paths.map((path) => (path.params.cid = '1'));
    else paths = [{ params: { cid: '1' } }];
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
