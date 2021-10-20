import React from 'react';

import { HomeComponent, Meta } from '@components';

const Home = (props) => {
    console.log('page -- >', props);
    return (
        <div className="home-page">
            <Meta title="Home" desc="" />
            <HomeComponent />
        </div>
    );
};
Home.getStaticProps = async () => {
    // Using the variables below in the browser will return `undefined`. Next.js doesn't
    // expose environment variables unless they start with `NEXT_PUBLIC_`
    console.log('[Node.js only] ENV_VARIABLE:', process.env);
    console.log('[Node.js only] ENV_LOCAL_VARIABLE:', process.env);

    return { props: { test: 'sample' } };
};

export default Home;
