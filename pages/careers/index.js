import React from 'react';
import Head from 'next/head';

import {CareersComponent} from '@components';

const Careers = () => {
  
  return (
    <div className="career-page">
      <Head>
          <title>Careers</title>
      </Head>

      <CareersComponent/>
    </div>
  );
};

export default Careers
