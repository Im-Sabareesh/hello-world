// import React from 'react';
// import Head from 'next/head'
// // import Image from 'next/image'
// import Link from 'next/link';
// import {
//   Container,
//   Row,
//   Col,
//   Button,
//   Navbar,
//   Nav,
//   NavDropdown,
//   CardGroup,
//   Card,
//   Image,
//   Form,
//   InputGroup,
// } from "react-bootstrap";

// export default function Home() {
//   const [validated, setValidated] = React.useState(false);
//   const [state, setState] = React.useState("");

//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   const listenScrollEvent = (e) => {
//     if (window.scrollY > 50) {
//       setState("sticky");
//     } else {
//       setState("");
//     }
//   };
//   React.useEffect(() => {
//     window.addEventListener("scroll", listenScrollEvent);
//   }, []);
//   return (
//     <>
//     <Head><title>Home</title></Head>
//       {/*--------------- Header start---------- */}
//       <header className={`fixed-top ${state}`}>
//         <div className="header-top py-2">
//           <Container fluid>
//             <Row className="justify-content-between">
//               <Col md={9} className="topheader-text">
//                 Want to know how Blockchain can make a difference in your
//                 Business? Get Expert Advice from our Team now!
//               </Col>
//               <Col
//                 md={12}
//                 lg={3}
//                 className="text-center text-xs-center text-sm-center text-md-center text-lg-end"
//               >
//                 <ul className="social-links">
//                   <li>
//                     <a href="#">
//                       <Image src="/icons/facebook.svg" alt="" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <Image src="/icons/instagram.svg" alt="" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <Image src="/icons/twitter.svg" alt="" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <Image src="/icons/youtube.svg" alt="" />
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#">
//                       <Image src="/icons/wordpress.svg" alt="" />
//                     </a>
//                   </li>
//                 </ul>
//               </Col>
//             </Row>
//           </Container>
//         </div>

//         <div className="main-header py-3">
//           <Container>
//             <Row>
//               <Col sm={4} md={3} lg={2}>
//                 <Image src="/icons/logo.svg" alt="" />
//               </Col>

//               <Col sm={4} md={5} lg={8}>
//                 <Navbar expand="lg" className="main-menu">
//                   <Container fluid className="p-0">
//                     {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
//                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                     <Navbar.Collapse id="basic-navbar-nav">
//                       <Nav className="me-auto">
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
//                     </Navbar.Collapse>
//                   </Container>
//                 </Navbar>
//               </Col>

//               <Col
//                 sm={4}
//                 md={4}
//                 lg={2}
//                 className="text-end text-md-start mt-2 letstalk-btn"
//               >
//                 <Button variant="primary" className="red-btn">
//                   Let&apos;s Talk
//                 </Button>

//                 <a href="#" className="ms-2 header-search">
//                   <Image src="/icons/icon-search.svg" alt="" />
//                 </a>
//               </Col>
//             </Row>
//           </Container>
//         </div>
//       </header>

//       {/*--------------- Header end---------- */}

//       {/*--------------- home hero banner start---------- */}

//       <section className="hero-banner-container">
//         <Container>
//           <Row>
//             <Col md={10} lg={8} xl={7} xxl={6}>
//               <div className="d-flex align-items-center">
//                 <h3 className="h3 secondary-text-color">
//                   Blockchain Technology
//                 </h3>
//                 <div className="heading-line"> </div>
//               </div>

//               <h3 className="h1">
//                 We provide enterprise blockchain consulting
//               </h3>

//               <p>
//                 Unleash full business potential with our cutting edge blockchain
//                 solutions. We innovate, build and integrate real-world
//                 blockchain applications.
//               </p>

//               <div className="button-outer">
//                 <Button variant="primary" className="red-btn" size="lg">
//                   Consult for Free
//                 </Button>
//               </div>
//             </Col>

//             <Col md={12} className="text-center">
//               <h2 className="h2 secondary-text-color"> Featured </h2>
//             </Col>

//             <div className="mt-4">
//               <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
//                 <Col>
//                   <div className="featured-box-container d-flex align-items-center justify-content-center text-center">
//                     <span> Hyperledger Development </span>
//                   </div>
//                 </Col>

//                 <Col>
//                   <div className="featured-box-container d-flex align-items-center justify-content-center text-center">
//                     <span>DeFi Development </span>
//                   </div>
//                 </Col>

//                 <Col>
//                   <div className="featured-box-container d-flex align-items-center justify-content-center text-center">
//                     <span>NFT Development </span>
//                   </div>
//                 </Col>

//                 <Col>
//                   <div className="featured-box-container d-flex align-items-center justify-content-center text-center">
//                     <span>Obortech Smart Hub </span>
//                   </div>
//                 </Col>

//                 <Col>
//                   <div className="featured-box-container d-flex align-items-center justify-content-center text-center">
//                     <span> GDPR Compliance </span>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- home hero banner end---------- */}

//       {/*--------------- Home section 1 start---------- */}

//       <section className="home-section1 py-5">
//         <Container>
//           <Row>
//             <Col md={12} lg={6} className="mt-5">
//               <h2 className="dark-text-color mb-4 h2">
//                 How Blockchain Enhances Your Business
//               </h2>

//               <p>
//                 Blockchain for business uses a shared and immutable ledger that
//                 can only be accessed by members with permission. Network members
//                 control what information each organization or member may see,
//                 and what actions each can take. Blockchain is sometimes called a
//                 trustless network not because business partners don’t trust each
//                 other, but because they don’t have to.
//               </p>
//             </Col>

//             <Col
//               md={12}
//               lg={6}
//               className="mt-5 text-end text-lg-end text-md-center"
//             >
//               <Image src="/images/home-section1-img.png" alt="" />
//             </Col>

//             <div className="mt-5 mb-3">
//               <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 justify-content-center mt-2">
//                 <Col className="home-section-icons d-flex align-items-center justify-content-center text-center">
//                   <div>
//                     <p>
//                       <Image src="/icons/enhanced-security.svg" alt="" />
//                     </p>
//                     <h3 className="h3 dark-text-color mb-0">
//                       Enhanced security
//                     </h3>
//                   </div>
//                 </Col>

//                 <Col className="home-section-icons d-flex align-items-center justify-content-center text-center">
//                   <div>
//                     <p>
//                       <Image src="/icons/greater-transparancy.svg" alt="" />
//                     </p>
//                     <h3 className="h3 dark-text-color mb-0">
//                       Greater transparency
//                     </h3>
//                   </div>
//                 </Col>

//                 <Col className="home-section-icons d-flex align-items-center justify-content-center text-center">
//                   <div>
//                     <p>
//                       <Image src="/icons/instant-tracibility.svg" alt="" />
//                     </p>
//                     <h3 className="h3 dark-text-color mb-0">
//                       Instant traceability
//                     </h3>
//                   </div>
//                 </Col>

//                 <Col className="home-section-icons d-flex align-items-center justify-content-center text-center">
//                   <div>
//                     <p>
//                       <Image src="/icons/increased-efficiency.svg" alt="" />
//                     </p>
//                     <h3 className="h3 dark-text-color mb-0">
//                       Increased efficiency
//                     </h3>
//                   </div>
//                 </Col>

//                 <Col className="home-section-icons d-flex align-items-center justify-content-center text-center">
//                   <div>
//                     <p>
//                       <Image src="/icons/decentralized-governance.svg" alt="" />
//                     </p>
//                     <h3 className="h3 dark-text-color mb-0">
//                       Decentralized Governance
//                     </h3>
//                   </div>
//                 </Col>
//               </Row>
//             </div>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- Home section 1 end---------- */}

//       {/*--------------- Home section 2 start---------- */}

//       <section className="home-section-2 py-5">
//         <Container>
//           <Row>
//             <Col md={8} className="mx-auto text-center mb-2">
//               <h2 className="h2 dark-text-color"> Services We Offer </h2>

//               <p>
//                 Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
//                 ullamco cillum dolor. Voluptate exercitation incididunt aliquip
//                 deserunt reprehenderit elit laborum.
//               </p>
//             </Col>
//           </Row>
//         </Container>

//         <Container>
//           <Row>
//             <Col md={6} lg={4} className="service-thumb text-center mt-5">
//               <p>
//                 <Image src="/icons/service-icon1.png" alt="" />
//               </p>

//               <h3 className="h3 dark-text-color">Decentraized Finance</h3>

//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 erat nibh tristique ipsum.
//               </p>
//             </Col>

//             <Col md={6} lg={4} className="service-thumb text-center mt-5">
//               <p>
//                 <Image src="/icons/service-icon2.png" alt="" />
//               </p>

//               <h3 className="h3 dark-text-color">Non Fungible Tokens</h3>

//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 erat nibh tristique ipsum.
//               </p>
//             </Col>

//             <Col md={6} lg={4} className="service-thumb text-center mt-5">
//               <p>
//                 <Image src="/icons/service-icon3.png" alt="" />
//               </p>

//               <h3 className="h3 dark-text-color">Binance Smart Chain</h3>

//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 erat nibh tristique ipsum.
//               </p>
//             </Col>

//             <Col md={6} lg={4} className="service-thumb text-center mt-5">
//               <p>
//                 <Image src="/icons/service-icon2.png" alt="" />
//               </p>

//               <h3 className="h3 dark-text-color">Website Development</h3>

//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 erat nibh tristique ipsum.
//               </p>
//             </Col>

//             <Col md={6} lg={4} className="service-thumb text-center mt-5">
//               <p>
//                 <Image src="/icons/service-icon3.png" alt="" />
//               </p>

//               <h3 className="h3 dark-text-color">Mobile App Development</h3>

//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 erat nibh tristique ipsum.
//               </p>
//             </Col>

//             <Col md={6} lg={4} className="service-thumb text-center mt-5">
//               <p>
//                 <Image src="/icons/service-icon6.png" alt="" />
//               </p>

//               <h3 className="h3 dark-text-color">AI Technology</h3>

//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                 erat nibh tristique ipsum.
//               </p>
//             </Col>

//             <Col md={12} className="text-center mt-5">
//               <a href="#" className="h3 dark-text-color link-primary">
//                 And a lot more for you
//               </a>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- Home section 2 end---------- */}

//       {/*--------------- Home section 3 start---------- */}

//       <section className="home-section-3 py-5">
//         <Container>
//           <Row>
//             <Col md={12}>
//               <h2 className="h2 light-text-color mb-5">
//                 Our BlockChain Solutions
//               </h2>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card">
//                 <Card.Img variant="top" src="/images/solution-1.jpg" />
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3"> Obortech Smart Hub </h3>
//                   </Card.Title>
//                   <Card.Text>
//                     Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
//                     ullamco cillum dolor. Voluptate exercitation incididunt.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="d-flex justify-content-between">
//                   <a href="" className="link-primary">
//                     BLOCKCHAIN
//                   </a>

//                   <a href="">
//                     <Image src="/icons/card-arrow.svg" alt="" />
//                   </a>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card">
//                 <Card.Img variant="top" src="/images/solution-2.jpg" />
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3"> GDPR Compliance </h3>
//                   </Card.Title>
//                   <Card.Text>
//                     Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
//                     ullamco cillum dolor. Voluptate exercitation incididunt.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="d-flex justify-content-between">
//                   <a href="" className="link-primary">
//                     BLOCKCHAIN
//                   </a>

//                   <a href="">
//                     <Image src="/icons/card-arrow.svg" alt="" />
//                   </a>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card">
//                 <Card.Img variant="top" src="/images/solution-3.jpg" />
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3"> Live Ledger </h3>
//                   </Card.Title>
//                   <Card.Text>
//                     Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
//                     ullamco cillum dolor. Voluptate exercitation incididunt.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="d-flex justify-content-between">
//                   <a href="" className="link-primary">
//                     BLOCKCHAIN
//                   </a>

//                   <a href="">
//                     <Image src="/icons/card-arrow.svg" alt="" />
//                   </a>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card">
//                 <Card.Img variant="top" src="/images/solution-4.jpg" />
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3">True Title </h3>
//                   </Card.Title>
//                   <Card.Text>
//                     Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
//                     ullamco cillum dolor. Voluptate exercitation incididunt.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="d-flex justify-content-between">
//                   <a href="" className="link-primary">
//                     BLOCKCHAIN
//                   </a>

//                   <a href="">
//                     <Image src="/icons/card-arrow.svg" alt="" />
//                   </a>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={12} lg={8}>
//               <Card className="custom-card">
//                 <Card.Img variant="top" src="/images/solution-5.jpg" />
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3">Instasure</h3>
//                   </Card.Title>
//                   <Card.Text>
//                     Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
//                     ullamco cillum dolor. Voluptate exercitation incididunt.
//                     Alteration in some form, by injected humour, or randomised
//                     words which don&apos;t look even slightly believable. If you are
//                     going to use a passage of Lorem Ipsum. Nulla Lorem mollit
//                     cupidatat irure. Laborum magna nulla duis ullamco cillum
//                     dolor. Voluptate exercitation incididunt. Alteration in some
//                     form, by injected humour, or randomised words which don&apos;t
//                     look even slightly believable. If you are going to use a
//                     passage of Lorem Ipsum.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="d-flex justify-content-between">
//                   <a href="" className="link-primary">
//                     BLOCKCHAIN
//                   </a>

//                   <a href="">
//                     <Image src="/icons/card-arrow.svg" alt="" />
//                   </a>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={12} className="text-center my-5">
//               <Button variant="primary" className="red-btn min-size-btn">
//                 View More
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- Home section3 end---------- */}

//       {/*--------------- Home section4 cta start---------- */}

//       <section className="home-section-4 py-5">
//         <Container>
//           <div className="cta-banner cta-banner1 d-flex align-items-center">
//             <div className="cta-txt">
//               <h2 className="h2">Ready to Get Started?</h2>
//               <Button variant="primary" className="red-btn min-size-btn">
//                 Get a quote
//               </Button>
//             </div>

//             <div>
//               <Image src="/icons/Arrow.svg" alt="" />
//             </div>
//           </div>
//         </Container>
//       </section>

//       {/*--------------- Home section4 cta end---------- */}

//       {/*--------------- Home section5 cta start---------- */}

//       <section className="home-section-5 py-5">
//         <Container>
//           <Row>
//             <Col md={{ span: 12, order: 0 }} lg={6}>
//               <Image src="/images/blockchain-business.png" alt=".." />
//             </Col>

//             <Col md={12} lg={6}>
//               <h2 className="h2 mb-4"> Why Choose Us </h2>

//               <p>
//                 It is a long established fact that a reader will be distracted
//                 by the readable content of a page when looking at its layout.
//                 The point of using Lorem Ipsum is that it has a more-or-less
//                 normal distribution of letters, as opposed to using &apos;Content
//                 here, content here&apos;, making it look like readable English.
//               </p>

//               <p>
//                 Many desktop publishing packages and web page editors now use
//                 Lorem Ipsum as their default model text, and a search for &apos;lorem
//                 ipsum&apos; will uncover many web sites still in their infancy.
//               </p>
//             </Col>

//             <Col md={6} className="mt-4">
//               <div className="d-flex">
//                 <div className="flex-shrink-0">
//                   <Image src="/icons/whychoose-icon1.svg" alt="..." />
//                 </div>
//                 <div className="flex-grow-1 ms-3">
//                   <h3 className="h3 mb-3"> Focus on Innovation </h3>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout.
//                   </p>
//                 </div>
//               </div>
//             </Col>

//             <Col md={6} className="mt-4">
//               <div className="d-flex">
//                 <div className="flex-shrink-0">
//                   <Image src="/icons/whychoose-icon2.svg" alt="..." />
//                 </div>
//                 <div className="flex-grow-1 ms-3">
//                   <h3 className="h3 mb-3"> True Partners </h3>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout.
//                   </p>
//                 </div>
//               </div>
//             </Col>

//             <Col md={6} className="mt-4">
//               <div className="d-flex">
//                 <div className="flex-shrink-0">
//                   <Image src="/icons/whychoose-icon3.svg" alt="..." />
//                 </div>
//                 <div className="flex-grow-1 ms-3">
//                   <h3 className="h3 mb-3"> DevOps </h3>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout.
//                   </p>
//                 </div>
//               </div>
//             </Col>

//             <Col md={6} className="mt-4">
//               <div className="d-flex">
//                 <div className="flex-shrink-0">
//                   <Image src="/icons/whychoose-icon4.svg" alt="..." />
//                 </div>
//                 <div className="flex-grow-1 ms-3">
//                   <h3 className="h3 mb-3"> Dedicated Teams </h3>
//                   <p>
//                     It is a long established fact that a reader will be
//                     distracted by the readable content of a page when looking at
//                     its layout.
//                   </p>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- Home section5 cta end---------- */}

//       {/*--------------- Home section6 start---------- */}

//       <section className="home-section-6 py-5">
//         <Container>
//           <Row>
//             <Col md={12} className="text-center mb-5">
//               <h2 className="h2">Quick Stats</h2>
//             </Col>

//             <Col
//               xs={6}
//               md={4}
//               lg={2}
//               className="counter-thumb text-center mt-3"
//             >
//               <p className="mb-4">
//                 <Image src="/icons/industry-awards.svg" alt="..." />
//               </p>

//               <p className="mb-1">
//                 <span> 150+ </span>
//               </p>

//               <p>
//                 <strong> Industry Awards </strong>
//               </p>
//             </Col>

//             <Col
//               xs={6}
//               md={4}
//               lg={2}
//               className="counter-thumb text-center mt-3"
//             >
//               <p className="mb-4">
//                 <Image src="/icons/projects.svg" alt="..." />
//               </p>

//               <p className="mb-1">
//                 <span> 150+ </span>
//               </p>

//               <p>
//                 <strong> Projects </strong>
//               </p>
//             </Col>

//             <Col
//               xs={6}
//               md={4}
//               lg={2}
//               className="counter-thumb text-center mt-3"
//             >
//               <p className="mb-4">
//                 <Image src="/icons/offices.svg" alt="..." />
//               </p>

//               <p className="mb-1">
//                 <span> 4</span>
//               </p>

//               <p>
//                 <strong>Offices </strong>
//               </p>
//             </Col>

//             <Col
//               xs={6}
//               md={4}
//               lg={2}
//               className="counter-thumb text-center mt-3"
//             >
//               <p className="mb-4">
//                 <Image src="/icons/happy-clients.svg" alt="..." />
//               </p>

//               <p className="mb-1">
//                 <span> 500 </span>
//               </p>

//               <p>
//                 <strong>Happy Clients</strong>
//               </p>
//             </Col>

//             <Col
//               xs={6}
//               md={4}
//               lg={2}
//               className="counter-thumb text-center mt-3"
//             >
//               <p className="mb-4">
//                 <Image src="/icons/certified-pmp.svg" alt="..." />
//               </p>

//               <p className="mb-1">
//                 <span> 4</span>
//               </p>

//               <p>
//                 <strong>Certified PMP</strong>
//               </p>
//             </Col>

//             <Col
//               xs={6}
//               md={4}
//               lg={2}
//               className="counter-thumb text-center mt-3"
//             >
//               <p className="mb-4">
//                 <Image src="/icons/mm-lines-of-code.svg" alt="..." />
//               </p>

//               <p className="mb-1">
//                 <span> 100</span>
//               </p>

//               <p>
//                 <strong>MM Lines of Code</strong>
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- Home section6 end---------- */}

//       {/*--------------- Home section7 start---------- */}

//       <section className="home-section-7 my-5">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={12} className="text-center">
//               <h2 className="h2 my-4"> We Work with </h2>
//             </Col>

//             <Col md={4} className="workwithus-txt mt-3">
//               <h1 className="h1 secondary-text-color mb-3"> 121,000+ </h1>
//               <p>
//                 customers in over 120 countries growing their businesses with
//                 Blockchain Consulting
//               </p>
//             </Col>

//             <Col md={8} className="workwithus-txt  mt-3">
//               <Image src="/images/we-work.png" alt="..." />
//             </Col>

//             <Col md={12} className="mt-5 mb-5">
//               <div className="cta-banner cta-banner2 d-flex align-items-center justify-content-end">
//                 <div className="cta-txt">
//                   <h2 className="h2">
//                     Still Have some Questions in Mind? Don&apos;t Worry. <br />
//                     Get FREE Consultation from our Experts
//                   </h2>
//                   <Button variant="primary" className="red-btn min-size-btn">
//                     Let’s Talk
//                   </Button>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- Home section7 end---------- */}

//       {/*--------------- Home section8 start---------- */}

//       <section className="home-section-8 py-5">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={12} className="text-center mt-5">
//               <h2 className="h2 my-4">
//                 Explore Projects Delivered by ChainCode
//               </h2>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card custom-card2 text-center">
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3"> Blockchain Consulting</h3>
//                   </Card.Title>
//                   <Card.Text>
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="">
//                   <Button variant="primary" className="red-btn min-size-btn">
//                     Know More
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card custom-card2 text-center">
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3"> Development and Deployment</h3>
//                   </Card.Title>
//                   <Card.Text>
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="">
//                   <Button variant="primary" className="red-btn min-size-btn">
//                     Know More
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card custom-card2 text-center">
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3">
//                       Public Blockchains Development Services
//                     </h3>
//                   </Card.Title>
//                   <Card.Text>
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="">
//                   <Button variant="primary" className="red-btn min-size-btn">
//                     Know More
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card custom-card2 text-center">
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3">Non Fungible Tokens</h3>
//                   </Card.Title>
//                   <Card.Text>
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="">
//                   <Button variant="primary" className="red-btn min-size-btn">
//                     Know More
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card custom-card2 text-center">
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3">Decentralized Finance</h3>
//                   </Card.Title>
//                   <Card.Text>
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered.
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="">
//                   <Button variant="primary" className="red-btn min-size-btn">
//                     Know More
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="custom-card custom-card2 text-center">
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3">Binanace Smart Chain</h3>
//                   </Card.Title>
//                   <Card.Text>
//                     There are many variations of passages of Lorem Ipsum
//                     available, but the majority have suffered.
//                   </Card.Text>
//                 </Card.Body>
//                 <Card.Footer className="">
//                   <Button variant="primary" className="red-btn min-size-btn">
//                     Know More
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- Home section8 end---------- */}

//       {/*--------------- Home section9 testimonial start---------- */}

//       <section className="home-section-9 py-5">
//         <Container>
//           <Row>
//             <Col>
//               <div className="testimonial-bg py-5">
//                 <Row>
//                   <Col lg={12} className="text-center">
//                     <small> Testimonial </small>

//                     <h2 className="h2 mt-4 mb-5">
//                       Let Our Clients do the Talking
//                     </h2>
//                   </Col>

//                   <Col>
//                     {" "}
//                     <Row className=" justify-content-center row-cols-1 row-cols-md-2  row-cols-lg-3">
//                       <Col className="">
//                         <div className="testimonial-cont">
//                           <div className="testimonial-user-cont d-flex align-items-center">
//                             <div className="user-thumb">
//                               <Image
//                                 src="/images/user-1.jpg"
//                                 roundedCircle
//                                 className="shadow"
//                                 alt=".."
//                               />
//                             </div>

//                             <div className="user-name">
//                               <h3 className="h3 mb-0">Chuan Allen </h3>

//                               <span> Reporter in CNN TV </span>
//                             </div>
//                           </div>

//                           <div className="testimonials-txt mt-3">
//                             Alteration in some form, by injected humour, or
//                             randomised words which don&apos;t look even slightly
//                             believable. If you are going to use a passage of
//                             Lorem.
//                           </div>
//                         </div>
//                       </Col>

//                       <Col className="">
//                         <div className="testimonial-cont">
//                           <div className="testimonial-user-cont d-flex align-items-center">
//                             <div className="user-thumb">
//                               <Image
//                                 src="/images/user-1.jpg"
//                                 roundedCircle
//                                 className="shadow"
//                                 alt="..."
//                               />
//                             </div>

//                             <div className="user-name">
//                               <h3 className="h3 mb-0">Chuan Allen </h3>

//                               <span> Reporter in CNN TV </span>
//                             </div>
//                           </div>

//                           <div className="testimonials-txt mt-3">
//                             Alteration in some form, by injected humour, or
//                             randomised words which don&apos;t look even slightly
//                             believable. If you are going to use a passage of
//                             Lorem.
//                           </div>
//                         </div>
//                       </Col>

//                       <Col className="">
//                         <div className="testimonial-cont">
//                           <div className="testimonial-user-cont d-flex align-items-center">
//                             <div className="user-thumb">
//                               <Image
//                                 src="/images/user-1.jpg"
//                                 roundedCircle
//                                 className="shadow"
//                                 alt="..."
//                               />
//                             </div>

//                             <div className="user-name">
//                               <h3 className="h3 mb-0">Chuan Allen </h3>

//                               <span> Reporter in CNN TV </span>
//                             </div>
//                           </div>

//                           <div className="testimonials-txt mt-3">
//                             Alteration in some form, by injected humour, or
//                             randomised words which don&apos;t look even slightly
//                             believable. If you are going to use a passage of
//                             Lorem.
//                           </div>
//                         </div>
//                       </Col>
//                     </Row>
//                   </Col>
//                 </Row>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/*--------------- Home section9 testimonial start---------- */}

//       {/*--------------- Home section10 insights start---------- */}

//       <section className="home-section-10 py-5">
//         <Container>
//           <Row>
//             <Col lg={12} className="text-center mb-5">
//               <h2 className="h2"> Our Latest Insights </h2>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="insight-card mt-3">
//                 <Card.Img variant="top" src="/images/insight-img1.jpg" />
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3 mb-3">
//                       Financial Inclusion, Advanced by Digital Currencies
//                     </h3>
//                   </Card.Title>
//                   <Card.Text>By Jane Cooper | 14 March 2021</Card.Text>
//                   <a href="#" className="link-primary">
//                     Learn More <Image src="/icons/purple-arrow.svg" alt="..." />{" "}
//                   </a>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="insight-card mt-3">
//                 <Card.Img variant="top" src="/images/insight-img2.jpg" />
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3 mb-3">
//                       Financial Inclusion, Advanced by Digital Currencies
//                     </h3>
//                   </Card.Title>
//                   <Card.Text>By Jane Cooper | 14 March 2021</Card.Text>
//                   <a href="#" className="link-primary">
//                     Learn More <Image src="/icons/purple-arrow.svg" alt=".." />{" "}
//                   </a>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={6} lg={4}>
//               <Card className="insight-card mt-3">
//                 <Card.Img variant="top" src="/images/insight-img3.jpg" />
//                 <Card.Body>
//                   <Card.Title>
//                     <h3 className="h3 mb-3">
//                       Financial Inclusion, Advanced by Digital Currencies
//                     </h3>
//                   </Card.Title>
//                   <Card.Text>By Jane Cooper | 14 March 2021</Card.Text>
//                   <a href="#" className="link-primary">
//                     Learn More <Image src="/icons/purple-arrow.svg" alt=".." />{" "}
//                   </a>
//                 </Card.Body>
//               </Card>
//             </Col>

//             <Col md={12} className="text-center my-5">
//               <Button variant="primary" className="red-btn min-size-btn">
//                 View More
//               </Button>
//             </Col>
//           </Row>
//         </Container>

//         <Container>
//           <div className="home-section-11">
//             <Row>
//               <Col lg={{ span: 10, offset: 1 }}>
//                 <div className="home-contact-card">
//                   <Row>
//                     <Col md={12} lg={6}>
//                       <h2 className="h2 mb-2"> Ready to Get Started? </h2>
//                       <p>Have an idea? Let’s discuss it!</p>

//                       <div className="home-contact-form mt-4">
//                         <Form
//                           noValidate
//                           validated={validated}
//                           onSubmit={handleSubmit}
//                         >
//                           <Row className="">
//                             <Form.Group
//                               as={Col}
//                               md="12"
//                               controlId="validationCustom01"
//                             >
//                               <Form.Label>FIRST NAME*</Form.Label>
//                               <Form.Control
//                                 required
//                                 type="text"
//                                 placeholder=""
//                                 defaultValue=""
//                               />
//                               <Form.Control.Feedback>
//                                 Looks good!
//                               </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group
//                               as={Col}
//                               md="6"
//                               controlId="validationCustom02"
//                             >
//                               <Form.Label>EMAIL*</Form.Label>
//                               <Form.Control
//                                 required
//                                 type="text"
//                                 placeholder=""
//                                 defaultValue=""
//                               />
//                               <Form.Control.Feedback>
//                                 Looks good!
//                               </Form.Control.Feedback>
//                             </Form.Group>
//                             <Form.Group
//                               as={Col}
//                               md="6"
//                               controlId="validationCustomUsername"
//                             >
//                               <Form.Label>PHONE*</Form.Label>
//                               <Form.Control
//                                 required
//                                 type="text"
//                                 placeholder=""
//                                 defaultValue=""
//                               />
//                             </Form.Group>
//                           </Row>
//                           <Row className="">
//                             <Form.Group
//                               as={Col}
//                               md="12"
//                               controlId="validationCustom03"
//                             >
//                               <Form.Label>HOW CAN WE HELP YOU?</Form.Label>
//                               <Form.Control as="textarea" rows={2} />
//                               <Form.Control.Feedback type="invalid">
//                                 Please provide a valid city.
//                               </Form.Control.Feedback>
//                             </Form.Group>
//                           </Row>

//                           <Row className="mt-3">
//                             <Form.Group as={Col} md="7" className="mt-2">
//                               {["checkbox"].map((type) => (
//                                 <div key={type} className="mb-3">
//                                   <Form.Check
//                                     type={type}
//                                     id={`check-api-${type}`}
//                                     className="d-flex"
//                                   >
//                                     <Form.Check.Input
//                                       type={type}
//                                       isValid
//                                       className="flex-shrink-0 mr-3"
//                                     />
//                                     <Form.Check.Label>
//                                       *As a result of submitting completed
//                                       “Contact Us” form, your personal data will
//                                       be processed by ChainCode. We are
//                                       committed to respecting your privacy. Read
//                                       our <a href="#"> Privacy Policy</a>.
//                                     </Form.Check.Label>
//                                   </Form.Check>
//                                 </div>
//                               ))}
//                             </Form.Group>

//                             <Form.Group
//                               as={Col}
//                               md="5"
//                               controlId="validationCustomUsername"
//                             >
//                               <Button type="submit" className="red-btn btn-lg">
//                                 Send Request
//                               </Button>
//                             </Form.Group>
//                           </Row>
//                         </Form>
//                       </div>
//                     </Col>

//                     <Col md={12} lg={6} className="contact-right-form">
//                       <Image src="/images/contact-form-img.png" alt="..." />
//                     </Col>
//                   </Row>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </Container>
//       </section>

//       {/*--------------- Home section10 insights start---------- */}

//       {/*--------------- footer  start---------- */}

//       <footer className="footer-section home-footer bg-gradient-secondary">
//         <Container>
//           <Row className="py-5 pb-1">
//             <Col
//               xs={6}
//               sm={6}
//               md={12}
//               lg={4}
//               className="text-md-center mb-5 mb-md-5 mb-sm-3 mb-xs-3"
//             >
//               <a href="#" className="brand-logo">
//                 <Image src="/icons/cc-white-logo.svg" className="mb-4" alt="..."/>
//               </a>
//               <p className="light-text-color text-shadow">Follow Us</p>
//               <div className="social-icons">
//                 <a href="#" className="mx-2">
//                   <Image src="/icons/facebook.svg" alt="..."/>
//                 </a>
//                 <a href="#" className="mx-2">
//                   <Image src="/icons/instagram.svg" alt="..."/>
//                 </a>
//                 <a href="#" className="mx-2">
//                   <Image src="/icons/twitter.svg" alt="..."/>
//                 </a>
//                 <a href="#" className="mx-2">
//                   <Image src="/icons/youtube.svg" alt="..."/>
//                 </a>
//               </div>
//             </Col>

//             <Col xs={6} sm={6} md={4} lg={3} className="mb-xs-3 mb-sm-3 mb-4">
//               <p className="h3 light-text-color mb-3">Our Services</p>
//               <ul className="lh-lg">
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Decentralized Finance
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Non Fungible Tokens
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Binance Smart Chain
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     App Development
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Web Development
//                   </a>
//                 </li>
//               </ul>
//             </Col>
//             <Col xs={6} sm={6} md={4} lg={2} className="mb-xs-3 mb-sm-3 mb-4">
//               <p className="h3 light-text-color mb-3">Expert Solutions</p>
//               <ul className="lh-lg">
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Live Ledger
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     True Title
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Instasure
//                   </a>
//                 </li>
//               </ul>
//             </Col>
//             <Col
//               xs={6}
//               sm={6}
//               md={4}
//               lg={{ span: 2, offset: 1 }}
//               className="mb-xs-3 mb-sm-3 mb-4"
//             >
//               <p className="h3 light-text-color mb-3">Connect With Us</p>
//               <ul className="lh-lg">
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Contact Us
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Career
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     More About Us
//                   </a>
//                 </li>
//                 <li className="mb-2">
//                   <a href="#" className="light-text-color">
//                     Blog
//                   </a>
//                 </li>
//               </ul>
//             </Col>
//           </Row>
//           <div className="d-flex justify-content-between align-items-center pt-5 pb-3 copyrights">
//             <span className="light-text-color">
//               ©ChainCode PTY LTD 2021. All rights reserved
//             </span>
//             <ul className="list-inline position-relative footer-after-line">
//               <li className="list-inline-item px-2">
//                 <a href="#" className="light-text-color">
//                   Privacy Policy
//                 </a>
//               </li>
//               <li className="list-inline-item">
//                 <a href="#" className="light-text-color">
//                   Terms of Service & Rules
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </Container>
//       </footer>

//       {/*--------------- footer  end---------- */}
//     </>
//   )
// }
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
