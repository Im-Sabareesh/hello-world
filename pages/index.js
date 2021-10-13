import React from "react";
import Head from 'next/head';

import {HomeComponent} from "@components";

export default function Home () {

    return (
      <div className="home-page">
        <Head>
          <title>Home</title>
        </Head>

        <HomeComponent/>
      </div>
    );
}
