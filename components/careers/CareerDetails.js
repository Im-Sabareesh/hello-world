import React from "react";

import {
    Container,
    Row,
    Col,
    Button,
    Image,
    Breadcrumb,
} from "react-bootstrap";

const CareerDetailsComponent = () => {

    return (
        <>
            <div className="breadcrumb-section">
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#" onClick={e => e.preventDefault()}>Careers </Breadcrumb.Item>
                                <Breadcrumb.Item active>User Experience Designer</Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/*--------------- careerdetail-overview-section start---------- */}

            <section className="careerdetail-overview-section mb-xl-5">
                <Container>
                    <Row>
                        <Col sm={12} md={12} lg={7} className="my-auto">
                            <div className="text-center text-lg-start">
                                <p className="location-element">Full Time, Pune</p>
                                <h1 className="h1 mb-2 pb-2 dark-text-color">User Experience Designer</h1>
                                <Button variant="primary" className="red-btn mb-lg-5 mb-md-4 mb-3"> Apply Now </Button>
                            </div>
                        

                            <div className="job-overview pt-xxl-5">
                                <h2 className="h2 pb-xl-4 pb-md-3 pb-2 dark-secondary-text-color">Overview</h2>
                                <p>At ChainCode, we Combine medical expertise with Machine Learning to offer patients a primary care experiance like any other.</p>

                                <p>As the primary interface between patients and their medical team, Our mobile app is a strategic piece of the virtual clinic we are building.</p>

                                <p>As the primary interface between patients and their medical team, Our mobile app is a strategic piece of the virtual clinic we are building.</p>

                                <p>This position is full-time and based in Paris, but we are open to partial remote work.</p>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={5}>
                            <div className="overview-img">
                                <Image src="/images/career-details-mobile-img1.png" alt="career-overview-img" className="overview-mobile-img d-none d-lg-block" />
                                <Image src="/images/career-details-mobile-img1.png" alt="career-overview-img"  className="overview-mobile-img d-block d-lg-none" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- careerdetail-overview-section end---------- */}

            {/*--------------- career-roles-responsibility start---------- */}

            <section className="careerdetail-roles-section mb-xl-5 pb-xl-5 mb-md-4 pb-md-4 mb-3 pb-3">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <div className="roles-responsibility">
                                <h3 className="h2 pb-xl-4 pb-md-3 pb-2 dark-secondary-text-color">Roles & Responsibilities</h3>

                                <p>The Swiggy Design team works with design oriented engineers, product managers and some of the best designers in a fast-paced, rapidly growing, hybrid (technology/operations) environment.</p>

                                <p>We are highly user-centric and we deeply believe we can innovate our way out of any box. The role demands great execution, bold innovation, obsession with quality, fearlessness and optimism to be inspired by the unknown and never settle, solving problems with creativity while keeping the user in mind and ambition to take projects to the finish line.</p>

                                <ul className="career-listings lh-md mt-md-4">
                                    <li>Create and refine comprehensive UX user flows for business-critical interactions.</li>
                                    <li>Work with users and product teams to test, evaluate and iterate on product features.</li>
                                    <li>Monitor and analyse data, how well existing interfaces work and where they breakdown.</li>
                                    <li>Clearly and effectively communicate design processes, ideas, and solutions.</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- career-roles-responsibility end---------- */}


            {/*--------------- careerdetail-canditate-section start---------- */}

            <section className="careerdetail-canditate-section mb-xl-5 pb-xl-5 mb-md-4 pb-md-4 mb-3 pb-3">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h4 className="h2 pb-xl-4 pb-md-3 pb-2 dark-secondary-text-color">Ideal Candidate</h4>

                            <ul className="career-listings lh-md">
                                <li>You believe in craftsmanship and create elegant and compelling designs, over andover.</li>
                                <li>Your portfolio has some best-in-class work. You&apos;re a walking encyclopedia of microinteractions in use (on mobile, web, desktop, etc), and have nuanced views on how to make many of them even better.</li>
                                <li>You&apos;ve shipped product.</li>
                                <li>You&apos;ve weathered release cycles and know what details matter at each stage, how to motivate engineers to get the fit and finish right, how to translate insights from user studies into meaningful action, and what&apos;s most likely to go afoul at each stage. You can share several shining examples of real work you&apos;ve shipped, and what you learned along the way.</li>
                                <li>You substantially contribute to defining the &apos;what&apos; as well as the &apos;how&apos;.</li>
                                <li>You&apos;re a product manager&apos;s secret weapon. You thrive best when helping to define the requirements, not just translating them into designs. You facilitate and draw the best design ideas from teammates.</li>
                                <li>You can think and talk about the bottom line.</li>
                                <li>Analytics don&apos;t scare you, and you know which features can act as force multipliers on your company&apos;s business model.</li>
                                <li>Prototyping is a key part of your toolset.</li>
                                <li>You&apos;ve prototyped on multiple platforms. You&apos;ve made last-minute tweaks between user studies. You know how to be all kinds of quick and dirty, but dream of better prototyping tools.</li>
                                <li>Cross-platform is your style.</li>
                                <li>Hopefully you&apos;ve shipped something across several platforms. You know what translates from desktop and what doesn&apos;t, or why you&apos;d opt for one solution for iOS and another on Android.</li>
                            </ul>
                            <div className="text-center mt-xl-5 pt-xl-5 mt-md-4 pt-md-4 mt-3 pt-3">
                                <Button variant="primary" className="red-btn career-apply-btn">Apply Now</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- careerdetail-canditate-section end---------- */}
        </>
    );
}

export default CareerDetailsComponent