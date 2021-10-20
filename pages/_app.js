import React from 'react';
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';

import nextI18NextConfig from '../next-i18next.config.js';
import '../styles/globals.scss';
import '../styles/globals-responsive.scss';
import { Layout } from '@components';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
    const { i18n } = useTranslation();
    const { locale } = useRouter();
    React.useEffect(() => {
        if (i18n.changeLanguage) i18n.changeLanguage(locale);
    }, [locale]);
    return (
        <Provider store={store}>
            <Layout {...pageProps}>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
