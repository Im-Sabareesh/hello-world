import React from "react";

import Header from "../header/Header";
import Footer from '../footer/Footer';

const Layout = (props) => {

  return (
    <>
      <Header/>
      
      {props.children}

      <Footer />

      <div className="backtotop"> 

      

<a href="#"> 

<div className="arrow-bg"> 
<svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 20L6 1.25M6 1.25L1 6.25M6 1.25L11 6.25" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

Back to top </a>

</div>

    </>
  );
};

export default Layout;
