import { store } from '../redux/store';
import '../styles/globals.scss';
import '../styles/globals-responsive.scss';
import { Layout } from '@components';
import { Provider } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function MyApp(props) {
    const { Component, pageProps } = props;
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

export default MyApp;
