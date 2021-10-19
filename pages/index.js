import React from 'react';
import Head from 'next/head';

import { HomeComponent, Meta } from '@components';

export default function Home() {
    return (
        <div className="home-page">
            <Meta title="Home" desc="" />
            <HomeComponent />
        </div>
    );
}
