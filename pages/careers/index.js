import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CareersComponent, Meta } from '@components';
import { careerAction } from '@redux';

const Careers = () => {
    const { t } = useTranslation('careers');
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(careerAction.careerList());
    }, []);
    return (
        <div className="career-page">

            <Meta title={t('title')} desc="" />

            <CareersComponent />

        </div>
    );
};

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['careers', 'common'])),
        },
    };
};

export default Careers;

Careers.propTypes = {};

Careers.defaultProps = {};