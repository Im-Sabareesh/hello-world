import React, { useReducer } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { CareersComponent } from '@components';
import { careerAction } from '@redux';

const Careers = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(careerAction.careerList());
    }, []);
    return (
        <div className="career-page">
            <Head>
                <title>Careers</title>
            </Head>

            <CareersComponent />
        </div>
    );
};

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['common'])),
        },
    };
};

export default Careers;

Careers.propTypes = {};

Careers.defaultProps = {};