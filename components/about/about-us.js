import React from 'react';
import _ from 'lodash';
import {useRouter} from 'next/router';

import {
    Container,
    Row,
    Col,
    Image,
    Card
} from "react-bootstrap";

const AboutUs = () => {

    const router = useRouter(),
    teamMemberList = [
        {
            name: 'Amitabh Bacchan',
            designation: 'Founder',
            image: '/assets/images/member_01.jpg',            
        }, {
            name: 'Amitabh Bacchan',
            designation: 'Founder',
            image: '/assets/images/member_02.jpg',            
        }, {
            name: 'Amitabh Bacchan',
            designation: 'Founder',
            image: '/assets/images/member_03.jpg',            
        }, {
            name: 'Amitabh Bacchan',
            designation: 'Founder',
            image: '/assets/images/member_04.jpg',            
        }, {
            name: 'Amitabh Bacchan',
            designation: 'Founder',
            image: '/assets/images/member_05.jpg',            
        }, {
            name: 'Amitabh Bacchan',
            designation: 'Founder',
            image: '/assets/images/member_06.jpg',            
        }, {
            name: 'Amitabh Bacchan',
            designation: 'Founder',
            image: '/assets/images/member_07.jpg',            
        }, {
            name: 'Amitabh Bacchan',
            designation: 'Founder',
            image: '/assets/images/member_08.jpg',            
        }
    ];

    return (
        <>
            {/*--------------- about us banner section start---------- */}
            <section className="about-us-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="light-text-color text-center w-50 mx-auto">
                                <h1 className="h1 light-text-color">About Us</h1>
                                <p>Our vision is to be the world’s most trusted transparency platform to build a system where reputable people buy & sell assets.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about us banner section end ---------- */}

            {/*--------------- about section1 section start ---------- */}

            <section className="about-section1 pb-xl-5 pb-md-4 pb-2">
                <Container fluid className="pb-xl-5 pb-2">
                    <Row className="pb-xl-5 pb-2">
                        <Col className="pb-xl-5 pb-2">
                            <Image src="/assets/images/about-us-grid.png" className="mx-auto d-block" alt=" " rounded />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section1 section end ---------- */}

            {/*--------------- about section2 section start ---------- */}

            <section className="about-section2 py-xl-5 py-md-4 py-2">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <h2 className="h1">Whats Our Story?</h2>
                        </Col>
                        <Col lg={7}>
                            <p>Blockchain is changing the way the world lives and works – but it&apos;s only a means to an end, not the end itself. We can help you apply this technology to drive your transformation into the future.</p>

                            <p>We start with an understanding of your specific aspirations, followed by a practical application of blockchain innovation. The conversation grows as new opportunities come to light along the way.</p>

                            <p>As the leading independent technology organization, we integrate alliances, partnerships, and leaders from every aspect of the blockchain ecosystem. </p>
                        </Col>
                    </Row>
                    <Row className="pt-xl-5 pt-3 mt-md-4">
                        <Col md={4} sm={6} xs={12}>
                            <div className="our-story-block">
                                <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
                                    <span>01</span>
                                </div>
                                <div className="our-story-block-content">
                                    <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
                                    <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">Our vision</h3>
                                    <p>We believe that universal access to space will inherently improve human life</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div className="our-story-block">
                                <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
                                    <span>02</span>
                                </div>
                                <div className="our-story-block-content">
                                    <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
                                    <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">Our mission</h3>
                                    <p>We believe that universal access to space will inherently improve human life</p>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div className="our-story-block">
                                <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
                                    <span>03</span>
                                </div>
                                <div className="our-story-block-content">
                                    <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
                                    <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">what we do</h3>
                                    <p>We believe that universal access to space will inherently improve human life</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section2 section end ---------- */}

             {/*--------------- about section3 section start ---------- */}

            <section className="about-section3 bg-gradient-secondary light-text-color py-xl-5 py-md-4 py-2">
                <Container>
                    <Row className="px-4 py-4">
                        <Col xl={4} lg={5}>
                            <div className="our-story-block">   
                                <div className="line-animated rounded position-relative float-start me-xl-4 me-2 opacity-50"></div>
                                <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
                                    <span>04</span>
                                </div>
                                <h3 className="h2 light-text-color">The Way Forward</h3>
                            </div>
                        </Col>
                       <Col xl={8} lg={7}>
                            <p className="h3 lh-base fw-normal light-text-color">Blockchain is changing the way the world lives and works – but it&apos;s only a means to an end, not the end itself. We can help you apply this technology to drive your transformation into the future. As the leading independent technology organization.</p>

                            <p className="h3 lh-base fw-normal light-text-color">We start with an understanding of your specific aspirations, followed by a practical application of blockchain innovation. The conversation grows as new opportunities come to light along the way.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section3 section end ---------- */}

            {/*--------------- about section4 section start ---------- */}

            <section className="about-section4 py-xl-5 py-md-4 py-2">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="lets-meet-box bg-gradient-light dark-box-shadow p-5">
                                <h4 className="dark-text-color mb-4 h2">Lets Meet Our Team</h4>
                                <div className="our-team-block">
                                    <div className="line-animated rounded position-relative float-start  me-3"></div>
                                    <p className="h3 mb-2 purple-gradient-text-color">8 Members</p>
                                    <p className="h3 dark-secondary-text-color">Designer - Developer - Marketing</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <h6 className="h3 text-uppercase dark-text-color mb-4">Our Team</h6>
                            <p className="h3 dark-secondary-text-color lh-base fw-normal">Making people smile gets us out of bed every morning. Through thoughtful design we create delightful digital experiences that make life simpler and more enjoyable</p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section4 section end ---------- */}

            {/*--------------- about section5 section start ---------- */}

            <section className="about-section5 py-xl-5 py-md-4 py-2">
                <Container>
                    <Row>
                        {_.map(teamMemberList, (item) => (
                            <Col lg={3} md={4} xs={6} key={_.uniqueId()}>
                                <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
                                    <Card.Img variant="top" src={item.image} className="rounded-circle mb-xl-4 mb-1" />
                                    <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
                                        <div className="text-center mb-md-3 mb-2">
                                            <Card.Title className="dark-text-color">{item.name}</Card.Title>
                                            <Card.Text className="dark-secondary-text-color">{item.designation}</Card.Text>
                                        </div>
                                        <div className="d-flex social-icons">
                                            <a 
                                                href="#" 
                                                onClick={e => e.preventDefault()} 
                                                className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"
                                            >
                                                <Image src="/assets/icons/gradient-twitter.svg" alt=" " />
                                            </a>
                                            <a 
                                                href="#" 
                                                onClick={e => e.preventDefault()} 
                                                className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"
                                            >
                                                <Image src="/assets/icons/gradient-linkedin.svg" alt=" " />
                                            </a>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <Row></Row>
                </Container>
            </section>

            {/*--------------- about section5 section end ---------- */}

            {/*--------------- about section6 section start ---------- */}

            <section className="about-section6 py-xl-5 py-md-4 py-2 mb-xl-5 mb-4">
                <Container>
                    <Row>
                        <p className="h3 purple-gradient-text-color text-uppercase mb-3">WORK WITH US</p>
                        <Col md={6}>
                            <h6 className="h2 dark-text-color mb-3">Have you decided to work on a project with us?</h6>
                        </Col>
                        <Col md={6}>
                            <p className="h3 dark-secondary-text-color lh-base fw-normal">Interested in joining our team and impacting the world? Reach out! We are always looking for new projectsto help take design to next level</p>
                        </Col>
                        <Col md={6} className="mt-lg-4 mt-2">
                            <button type="button" onClick={()=>{router.push('/contact')}} className="red-btn min-size-btn btn btn-primary">Connect with us</button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section6 section end ---------- */}
        </>
    )
}

export default AboutUs