import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { ContactComponent, Meta } from '@components';

const ContactUs = () => {
    const { t } = useTranslation('common');
    return (
        <div className="contactus-page">
            <Meta title={t('contactUs')} desc="" />

            <ContactComponent />
        </div>
    );
};

export default ContactUs;

export const getStaticProps = async (p) => {
    return {
        props: {
            ...(await serverSideTranslations(p.locale, ['common'])),
        },
    };
};

ContactUs.propTypes = {};

ContactUs.defaultProps = {};
