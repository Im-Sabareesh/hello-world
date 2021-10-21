import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { CareerDetailsComponent } from '@components';
import { api } from '@libs';

const CareerDetails = () => {
    return (
        <div className="CareerDetails-wrapper">
            <Head>
                <title>Career Details</title>
            </Head>

            <CareerDetailsComponent />
        </div>
    );
};

export async function getStaticPaths() {
    return { paths: [{ params: { cid: '1' } }], fallback: false };
}

export async function getStaticProps({ params }) {
    return {
        props: {
            careeerDetails: await api.getCareerDetails(1),
        },
    };
}

export default CareerDetails;
