import React from "react";
import Head from 'next/head';

import {ContactComponent} from '@components';

const ContactUs = () => {

  return (
    <div className="contactus-page">
      <Head>
        <title>Contact Us</title>
      </Head>

      <ContactComponent/>
    </div>
  );
};

export default ContactUs;
