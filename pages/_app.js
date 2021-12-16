import React from 'react';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import i18next from 'i18next';
import '../i18n/init';
import tawkTo from "tawkto-react";

import '../styles/globals.scss';
import '../styles/globals-responsive.scss';
import { Layout } from '@components';

import { store } from '../redux/store';

function MyApp(props) {
    const { Component, pageProps } = props;
    i18next.changeLanguage(pageProps.language);
    const tawkToPropertyId = '61b88b5ec82c976b71c15c06',
    tawkToKey = '587a26024c1600f605c2b22132c3117e955a34e8';

    React.useEffect(() => {
        tawkTo(tawkToPropertyId, tawkToKey)
    }, []);

    return (
        <Provider store={store}>
            <Layout {...pageProps}>
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

// export async function getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps
//         ? await Component.getInitialProps(ctx)
//         : {};

//     return { pageProps };
// }

export default MyApp;
