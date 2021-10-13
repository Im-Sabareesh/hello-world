import React from 'react';
import Head from 'next/head';

import {CareerDetailsComponent} from '@components';

const CareerDetails = () => {

  return (
    <div className="CareerDetails-wrapper">
        <Head>
          <title>Career Details</title>
        </Head>

        <CareerDetailsComponent/>
    </div>
  );
};

export default CareerDetails