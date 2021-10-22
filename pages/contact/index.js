import React from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { ContactComponent } from '@components';

const ContactUs = () => {
    return (
        <div className="contactus-page">
            <Head>
                <title>Contact Us</title>
            </Head>

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