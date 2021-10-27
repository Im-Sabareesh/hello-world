import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    // eslint-disable-next-line react/display-name
                    enhanceApp: (App) => (props) => <App {...props} />,
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: <>{initialProps.styles}</>,
            };
        } finally {
        }
    }

    render() {
        return (
            <Html>
                <Head />
                {/* <Head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                </Head> */}
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
