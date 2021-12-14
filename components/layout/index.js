import React from 'react';
import { useRouter } from 'next/router';

import Header from '../header/Header';
import Footer from '../footer/Footer';
import { ChatBotComponent } from '@components';

const Layout = (props) => {
    const language = props.language;
    const router = useRouter();
    return (
        <>
            {router.pathname === '/' ? null : <Header language={language} />}
            {props.children}
            <Footer language={language} />

            <ChatBotComponent/>
        </>
    );
};

export default Layout;

Layout.propTypes = {};

Layout.defaultProps = {};
