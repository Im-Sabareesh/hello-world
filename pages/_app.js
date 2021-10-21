import React from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { appWithTranslation, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import '../styles/globals.scss';
import '../styles/globals-responsive.scss';
import { Layout } from '@components';
import nextI18NextConfig from '../next-i18next.config.js';

import { store } from '../redux/store';

function MyApp(props) {
    const { Component, pageProps } = props;
    const { i18n } = useTranslation();
    const { locale } = useRouter();
    React.useEffect(() => {
        if (i18n.changeLanguage) i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Provider store={store}>
            <Layout>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export async function getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    return { pageProps };
}

export default appWithTranslation(MyApp, nextI18NextConfig);
