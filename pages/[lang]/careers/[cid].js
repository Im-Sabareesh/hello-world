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

export const getServerSideProps = async ({ params, res }) => {
    try {
        const { lang, cid } = params;
        return {
            props: {
                language: lang,
                cid: cid,
            },
        };
    } catch {
        res.statusCode = 404;
        return {
            props: {},
        };
    }
};

export default CareerDetails;

CareerDetails.propTypes = {};

CareerDetails.defaultProps = {};
