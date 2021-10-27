import React from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = (props) => {
    const language = props.language;

    return (
        <>
            <Header language={language} />
            {props.children}
            <Footer language={language} />
        </>
    );
};

export default Layout;

Layout.propTypes = {};

Layout.defaultProps = {};
