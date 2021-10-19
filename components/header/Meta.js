import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

export default function Meta(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
                <meta name="description" content={props.desc} />
                <meta property="og:type" content="website" />
                <meta
                    name="og:title"
                    property="og:title"
                    content={props.title}
                />
                <meta
                    name="og:description"
                    property="og:description"
                    content={props.desc}
                />
                <meta property="og:site_name" content="" />
                <meta property="og:url" content="" />
                <meta property="og:image" content="" />

                <link rel="icon" type="image/png" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/favicon.ico" />
            </Head>
        </>
    );
}

Meta.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

Meta.defaultProps = {
    desc: '',
};
