import React from 'react';
import { useRouter } from 'next/router';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = (props) => {
    const language = props.language;
    const router = useRouter();
    console.log(router.pathname);
    return (
        <>
            {/* <Header language={language} /> */}
            {router.pathname === '/' ? null : <Header language={language} />}
            {props.children}
            <Footer language={language} />
        </>
    );
};

export default Layout;

Layout.propTypes = {};

Layout.defaultProps = {};
