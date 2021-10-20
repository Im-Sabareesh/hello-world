import React from 'react';

import { HomeComponent, Meta } from '@components';

const Home = (props) => {
    console.log('page -- >', props);
    console.log('[Node.js only] ENV_VARIABLE:', process.env);

    return (
        <div className="home-page">
            <Meta title="Home" desc="" />
            <HomeComponent />
        </div>
    );
};
export const getStaticProps = async () => {
    return { props: {} };
};

export default Home;
