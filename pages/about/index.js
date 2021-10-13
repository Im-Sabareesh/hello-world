import React from 'react';
import Head from 'next/head';

import {AboutUsComponent} from '@components';

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <Head>
                <title>About Us</title>                
            </Head>
            
            <AboutUsComponent />
        </div>
    )
};

export default AboutUs;
