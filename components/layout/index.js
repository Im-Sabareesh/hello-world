import React from 'react';
import { useRouter } from 'next/router';
import { defaultLanguage } from '../../i18n/config';

import Header from '../header/Header';
import Footer from '../footer/Footer';
// import { ChatBotComponent } from '@components';

const Layout = (props) => {
    const language = props.language || defaultLanguage;
    const router = useRouter();
    return (
        <>
            {router.pathname === '/' ? null : <Header language={language} />}
            {props.children}
            <Footer language={language} />

            {/* <ChatBotComponent/> */}
        </>
    );
};

export default Layout;

Layout.propTypes = {};

Layout.defaultProps = {};
