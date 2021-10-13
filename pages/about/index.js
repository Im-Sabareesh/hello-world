// const AboutUs = () => {
//   const [state, setState] = React.useState("");
//   const listenScrollEvent = (e) => {
//     if (window.scrollY > 50) {
//       setState("sticky");
//     } else {
//       setState("");
//     }
//   };
//   React.useEffect(() => {
//     window.addEventListener("scroll", listenScrollEvent);
//   },[])
//     return (
//         <>
//              <Head>
//                 <title>
//                     About
//                 </title>
//             </Head>
//         <div className="about-us-page">
//              {/*--------------- Header start---------- */}

//                 <header className={`fixed-top ${state}`}>
//                     <div className="main-header py-3 inner-page-header">
//                         <Container>
//                             <Row>
//                             <Col sm={4} md={3} lg={2}>
//                                 <Link href="/">
//                                     <Image src="/icons/logo.svg" className={!state &&"white-logo"} alt="" />
//                                     {/*<a href="#">*/}
//                                     {/*</a>*/}
//                                 </Link>
//                             </Col>

//                             <Col sm={4} md={5} lg={8}>
//                                 <Navbar expand="lg" className="main-menu">
//                                 <Container fluid className="p-0">
//                                     {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//                                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                                     <Navbar.Collapse id="basic-navbar-nav">
//                                     <Nav className="me-auto">
//                            <Link href='/about'>
//                              <a className="nav-link">About Us</a>
//                            </Link>
//                         <Nav.Link href="#link">Blockchain Solution</Nav.Link>
//                         <Nav.Link href="#link">Case Studies</Nav.Link>
//                         {/* <Nav.Link href="#link">Services</Nav.Link> */}
//                         <NavDropdown title="Services" id="basic-nav-dropdown">
//                             <Link href='/services/NFTServices'>
//                               <a className="dropdown-item">NFT Development</a>
//                             </Link>
//                             <Link href='/services/DefiServices'>
//                               <a className="dropdown-item">Defi development</a>
//                             </Link>
                     
                          
//                         </NavDropdown>
//                       </Nav>
//                                     </Navbar.Collapse>
//                                 </Container>
//                                 </Navbar>
//                             </Col>

//                             <Col sm={4} md={4} lg={2} className="text-end text-md-start mt-2 letstalk-btn">
//                                 <Button variant="primary" className="red-btn">
//                                 Let&apos;s Talk
//                                 </Button>

//                                 <a href="#" className="ms-2 header-search">
//                                     <Image src="/icons/icon-search.svg" alt="" />
//                                 </a>
//                             </Col>
//                             </Row>
//                         </Container>
//                     </div>
//                 </header>

//             {/*--------------- Header end---------- */}

//             {/*--------------- about us banner section start---------- */}

//             <section className="about-us-banner">
//                 <Container>
//                     <Row>
//                         <Col>
//                             <div className="light-text-color text-center w-50 mx-auto">
//                                 <h1 className="h1 light-text-color">About Us</h1>
//                                 <p>Our vision is to be the world’s most trusted transparency platform to build a system where reputable people buy & sell assets.</p>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             {/*--------------- about us banner section end ---------- */}

//             {/*--------------- about section1 section start ---------- */}
            
//             <section className="about-section1 pb-xl-5 pb-md-4 pb-2">
//                 <Container fluid className="pb-xl-5 pb-2">
//                     <Row className="pb-xl-5 pb-2">
//                         <Col className="pb-xl-5 pb-2">
//                             <Image src="/images/about-us-grid.png" className="mx-auto d-block" rounded alt="..." />
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             {/*--------------- about section1 section end ---------- */}

//             {/*--------------- about section2 section start ---------- */}

//             <section className="about-section2 py-xl-5 py-md-4 py-2">
//                 <Container>
//                     <Row>
//                         <Col lg={5}>
//                             <h2 className="h1">Whats Our Story?</h2>
//                         </Col>
//                         <Col lg={7}>
//                             <p>Blockchain is changing the way the world lives and works – but it&apos;s only a means to an end, not the end itself. We can help you apply this technology to drive your transformation into the future.</p>

//                             <p>We start with an understanding of your specific aspirations, followed by a practical application of blockchain innovation. The conversation grows as new opportunities come to light along the way.</p>

//                             <p>As the leading independent technology organization, we integrate alliances, partnerships, and leaders from every aspect of the blockchain ecosystem. </p>
//                         </Col>
//                     </Row>
//                     <Row className="pt-xl-5 pt-3 mt-md-4">
//                         <Col md={4} sm={6} xs={12}>
//                             <div className="our-story-block">
//                                 <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
//                                     <span>01</span>
//                                 </div>
//                                 <div className="our-story-block-content">
//                                     <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
//                                     <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">Our vision</h3>
//                                     <p>We believe that universal access to space will inherently improve human life</p>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col md={4} sm={6} xs={12}>
//                             <div className="our-story-block">
//                                 <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
//                                     <span>02</span>
//                                 </div>
//                                 <div className="our-story-block-content">
//                                     <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
//                                     <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">Our mission</h3>
//                                     <p>We believe that universal access to space will inherently improve human life</p>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col md={4} sm={6} xs={12}>
//                             <div className="our-story-block">
//                                 <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
//                                     <span>03</span>
//                                 </div>
//                                 <div className="our-story-block-content">
//                                     <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
//                                     <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">what we do</h3>
//                                     <p>We believe that universal access to space will inherently improve human life</p>
//                                 </div>
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             {/*--------------- about section2 section end ---------- */}

//              {/*--------------- about section3 section start ---------- */}

//             <section className="about-section3 bg-gradient-secondary light-text-color py-xl-5 py-md-4 py-2">
//                 <Container>
//                     <Row className="px-4 py-4">
//                         <Col xl={4} lg={5}>
//                             <div className="our-story-block">   
//                                 <div className="line-animated rounded position-relative float-start me-xl-4 me-2 opacity-50"></div>
//                                 <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
//                                     <span>04</span>
//                                 </div>
//                                 <h3 className="h2 light-text-color">The Way Forward</h3>
//                             </div>
//                         </Col>
//                        <Col xl={8} lg={7}>
//                             <p className="h3 lh-base fw-normal light-text-color">Blockchain is changing the way the world lives and works – but it&apos;s only a means to an end, not the end itself. We can help you apply this technology to drive your transformation into the future. As the leading independent technology organization.</p>

//                             <p className="h3 lh-base fw-normal light-text-color">We start with an understanding of your specific aspirations, followed by a practical application of blockchain innovation. The conversation grows as new opportunities come to light along the way.</p>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             {/*--------------- about section3 section end ---------- */}

//             {/*--------------- about section4 section start ---------- */}

//             <section className="about-section4 py-xl-5 py-md-4 py-2">
//                 <Container>
//                     <Row>
//                         <Col lg={5}>
//                             <div className="lets-meet-box bg-light-primary dark-box-shadow p-5">
//                                 <h4 className="dark-text-color mb-4 h2">Lets Meet Our Team</h4>
//                                 <div className="our-team-block">
//                                     <div className="line-animated rounded position-relative float-start  me-3"></div>
//                                     <p className="h3 mb-2 purple-gradient-text-color">8 Members</p>
//                                     <p className="h3 dark-secondary-text-color">Designer - Developer - Marketing</p>
//                                 </div>
//                             </div>
//                         </Col>
//                         <Col lg={7}>
//                             <h6 className="h3 text-uppercase dark-text-color mb-4">Our Team</h6>
//                             <p className="h3 dark-secondary-text-color lh-base fw-normal">Making people smile gets us out of bed every morning. Through thoughtful design we create delightful digital experiences that make life simpler and more enjoyable</p>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             {/*--------------- about section4 section end ---------- */}

//             {/*--------------- about section5 section start ---------- */}

//             <section className="about-section5 py-xl-5 py-md-4 py-2">
//                 <Container>
//                     <Row>
//                         <Col lg={3} md={4} xs={6}>
//                             <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
//                                 <Card.Img variant="top" src="/images/member_01.jpg" className="rounded-circle mb-xl-4 mb-1" />
//                                 <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
//                                     <div className="text-center mb-md-3 mb-2">
//                                         <Card.Title className="dark-text-color">Amitabh Bacchan</Card.Title>
//                                         <Card.Text className="dark-secondary-text-color">Founder</Card.Text>
//                                     </div>
//                                     <div className="d-flex social-icons">
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-twitter.svg"  alt="..."/></a>
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-linkedin.svg"  alt="..."/></a>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col lg={3} md={4} xs={6}>
//                             <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
//                                 <Card.Img variant="top" src="/images/member_02.jpg" className="rounded-circle mb-xl-4 mb-1" />
//                                 <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
//                                     <div className="text-center mb-md-3 mb-2">
//                                         <Card.Title className="dark-text-color">Amitabh Bacchan</Card.Title>
//                                         <Card.Text className="dark-secondary-text-color">Founder</Card.Text>
//                                     </div>
//                                     <div className="d-flex social-icons">
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-twitter.svg"  alt="..."/></a>
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-linkedin.svg"  alt="..."/></a>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col lg={3} md={4} xs={6}>
//                             <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
//                                 <Card.Img variant="top" src="/images/member_03.jpg" className="rounded-circle mb-xl-4 mb-1" />
//                                 <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
//                                     <div className="text-center mb-md-3 mb-2">
//                                         <Card.Title className="dark-text-color">Amitabh Bacchan</Card.Title>
//                                         <Card.Text className="dark-secondary-text-color">Founder</Card.Text>
//                                     </div>
//                                     <div className="d-flex social-icons">
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-twitter.svg"  alt="..."/></a>
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-linkedin.svg"  alt="..."/></a>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col lg={3} md={4} xs={6}>
//                             <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
//                                 <Card.Img variant="top" src="/images/member_04.jpg" className="rounded-circle mb-xl-4 mb-1" />
//                                 <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
//                                     <div className="text-center mb-md-3 mb-2">
//                                         <Card.Title className="dark-text-color">Amitabh Bacchan</Card.Title>
//                                         <Card.Text className="dark-secondary-text-color">Founder</Card.Text>
//                                     </div>
//                                     <div className="d-flex social-icons">
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-twitter.svg"  alt="..."/></a>
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-linkedin.svg"  alt="..."/></a>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col lg={3} md={4} xs={6}>
//                             <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
//                                 <Card.Img variant="top" src="/images/member_05.jpg" className="rounded-circle mb-xl-4 mb-1" />
//                                 <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
//                                     <div className="text-center mb-md-3 mb-2">
//                                         <Card.Title className="dark-text-color">Amitabh Bacchan</Card.Title>
//                                         <Card.Text className="dark-secondary-text-color">Founder</Card.Text>
//                                     </div>
//                                     <div className="d-flex social-icons">
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-twitter.svg"  alt="..."/></a>
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-linkedin.svg"  alt="..."/></a>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col lg={3} md={4} xs={6}>
//                             <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
//                                 <Card.Img variant="top" src="/images/member_06.jpg" className="rounded-circle mb-xl-4 mb-1" />
//                                 <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
//                                     <div className="text-center mb-md-3 mb-2">
//                                         <Card.Title className="dark-text-color">Amitabh Bacchan</Card.Title>
//                                         <Card.Text className="dark-secondary-text-color">Founder</Card.Text>
//                                     </div>
//                                     <div className="d-flex social-icons">
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-twitter.svg"  alt="..."/></a>
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-linkedin.svg"  alt="..."/></a>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col lg={3} md={4} xs={6}>
//                             <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
//                                 <Card.Img variant="top" src="/images/member_07.jpg" className="rounded-circle mb-xl-4 mb-1" />
//                                 <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
//                                     <div className="text-center mb-md-3 mb-2">
//                                         <Card.Title className="dark-text-color">Amitabh Bacchan</Card.Title>
//                                         <Card.Text className="dark-secondary-text-color">Founder</Card.Text>
//                                     </div>
//                                     <div className="d-flex social-icons">
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-twitter.svg"  alt="..."/></a>
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-linkedin.svg"  alt="..."/></a>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                         <Col lg={3} md={4} xs={6}>
//                             <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
//                                 <Card.Img variant="top" src="/images/member_08.jpg" className="rounded-circle mb-xl-4 mb-1" />
//                                 <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
//                                     <div className="text-center mb-md-3 mb-2">
//                                         <Card.Title className="dark-text-color">Amitabh Bacchan</Card.Title>
//                                         <Card.Text className="dark-secondary-text-color">Founder</Card.Text>
//                                     </div>
//                                     <div className="d-flex social-icons">
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-twitter.svg"  alt="..."/></a>
//                                         <a href="#" className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"><Image src="/icons/gradient-linkedin.svg"  alt="..."/></a>
//                                     </div>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     </Row>
//                     <Row>
                        
//                     </Row>
//                 </Container>
//             </section>

//             {/*--------------- about section5 section end ---------- */}

//             {/*--------------- about section6 section start ---------- */}

//             <section className="about-section6 py-xl-5 py-md-4 py-2 mb-xl-5 mb-4">
//                 <Container>
//                     <Row>
//                         <p className="h3 purple-gradient-text-color text-uppercase mb-3">WORK WITH US</p>
//                         <Col md={6}>
//                             <h6 className="h2 dark-text-color mb-3">Have you decided to work on a project with us?</h6>
//                         </Col>
//                         <Col md={6}>
//                             <p className="h3 dark-secondary-text-color lh-base fw-normal">Interested in joining our team and impacting the world? Reach out! We are always looking for new projectsto help take design to next level</p>
//                         </Col>
//                         <Col md={6} className="mt-lg-4 mt-2">
//                             <button type="button" className="red-btn min-size-btn btn btn-primary">Connect with us</button>
//                         </Col>
//                     </Row>
//                 </Container>
//             </section>

//             {/*--------------- about section6 section end ---------- */}

//              {/*--------------- footer section start ---------- */}
            
//             <footer className="footer-section bg-gradient-secondary">
//                 <Container>
//                     <Row className="py-md-5 py-4">
//                         <Col xl={4} lg={3} md={6} sm={6} xs={12} className="text-xl-center mb-xl-0 mb-md-4 mb-3">
//                             <a href="#" className="brand-logo">
//                                 <Image src="/icons/cc-white-logo.svg" className="mb-md-4 mb-sm-3 mb-4" alt="..."/>
//                             </a>
//                             <p className="light-text-color text-shadow mb-md-3 mb-2">Follow Us</p>
//                             <div className="social-icons">
//                                 <a href="#" className="mx-2"><Image src="/icons/facebook.svg"  alt="..."/></a>
//                                 <a href="#" className="mx-2"><Image src="/icons/instagram.svg"  alt="..."/></a>
//                                 <a href="#" className="mx-2"><Image src="/icons/twitter.svg"  alt="..."/></a>
//                                 <a href="#" className="mx-2"><Image src="/icons/youtube.svg"  alt="..."/></a>
//                             </div>
//                         </Col>
//                         <Col xl={3} lg={3} md={6} sm={6} xs={12} className="mb-xl-0 mb-md-4 mb-sm-3 mb-4">
//                         <p className="h3 light-text-color mb-3">Our Services</p>
//                             <ul className="lh-lg">
//                                 <li className="mb-2"><a href="#" className="light-text-color">Decentralized Finance</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">Non Fungible Tokens</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">Binance Smart Chain</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">App Development</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">Web Development</a></li>
//                             </ul>
//                         </Col>
//                         <Col xl={2} lg={3} md={6} sm={6} xs={12} className="mb-xl-0 mb-md-4 mb-sm-3 mb-4">
//                         <p className="h3 light-text-color mb-3">Expert Solutions</p>
//                             <ul className="lh-lg">
//                                 <li className="mb-2"><a href="#" className="light-text-color">Live Ledger</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">True Title</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">Instasure</a></li>
//                             </ul>
//                         </Col>
//                         <Col xl={{ span: 2, offset: 1 }} lg={3} md={6} sm={6} xs={12} className="mb-xl-0 mb-md-4 mb-sm-3 mb-4">
//                         <p className="h3 light-text-color mb-3">Connect With Us</p>
//                             <ul className="lh-lg">
//                                 <li className="mb-2"><a href="#" className="light-text-color">Contact Us</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">Career</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">More About Us</a></li>
//                                 <li className="mb-2"><a href="#" className="light-text-color">Blog</a></li>
//                             </ul>
//                         </Col>
//                     </Row>
//                     <div className="copyrights-section d-md-flex justify-content-between align-items-center text-md-left text-center pt-xl-5 pt-lg-3 pb-3">
//                         <span className="light-text-color">©ChainCode PTY LTD 2021. All rights reserved</span>
//                         <ul className="list-inline position-relative footer-after-line">
//                             <li className="list-inline-item px-2"><a href="#" className="light-text-color">Privacy Policy</a></li>
//                             <li className="list-inline-item"><a href="#" className="light-text-color">Terms of Service & Rules</a></li>
//                         </ul>
//                     </div>
//                 </Container>
//             </footer>

//             {/*--------------- footer section end ---------- */}

//         </div>
//         </>
//     )
// }

// export default AboutUs
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
