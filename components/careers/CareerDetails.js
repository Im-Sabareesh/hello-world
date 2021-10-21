import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import {
    Container,
    Row,
    Col,
    Button,
    Image,
    Breadcrumb,
} from 'react-bootstrap';
import { careerSelector } from '@redux';
import CareerStaticPosts from './careerStaticPosts';

const CareerDetailsComponent = () => {
    const router = useRouter();
    const {
        query: { cid },
    } = router;
    const state =
        useSelector((state) =>
            careerSelector.careerDetailsSelector(state, cid)
        ) || {};

    return (
        <>
            <div className="breadcrumb-section">
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <Breadcrumb.Item
                                    onClick={(e) => {
                                        e.preventDefault();
                                        router.back();
                                    }}
                                >
                                    Careers{' '}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    {state.name}
                                </Breadcrumb.Item>
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
                                <p className="location-element">
                                    {state.type} {state.location}
                                </p>
                                <h1 className="h1 mb-2 pb-2 dark-text-color">
                                    {state.name}
                                </h1>
                                <Button
                                    variant="primary"
                                    className="red-btn mb-lg-5 mb-md-4 mb-3"
                                >
                                    Apply Now
                                </Button>
                            </div>

                            <div className="job-overview pt-xxl-5">
                                <h2 className="h2 pb-xl-4 pb-md-3 pb-2 dark-secondary-text-color">
                                    Overview
                                </h2>
                                <p>
                                    At ChainCode, we Combine medical expertise
                                    with Machine Learning to offer patients a
                                    primary care experiance like any other.
                                </p>

                                <p>
                                    As the primary interface between patients
                                    and their medical team, Our mobile app is a
                                    strategic piece of the virtual clinic we are
                                    building.
                                </p>

                                <p>
                                    As the primary interface between patients
                                    and their medical team, Our mobile app is a
                                    strategic piece of the virtual clinic we are
                                    building.
                                </p>

                                <p>
                                    This position is full-time and based in
                                    Paris, but we are open to partial remote
                                    work.
                                </p>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={5}>
                            <div className="overview-img">
                                <Image
                                    src="/assets/images/career-details-mobile-img1.png"
                                    alt="career-overview-img"
                                    className="overview-mobile-img d-none d-lg-block"
                                />
                                <Image
                                    src="/assets/images/career-details-mobile-img1.png"
                                    alt="career-overview-img"
                                    className="overview-mobile-img d-block d-lg-none"
                                />
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
                                <h3 className="h2 pb-xl-4 pb-md-3 pb-2 dark-secondary-text-color">
                                    Roles & Responsibilities
                                </h3>

                                <p>
                                    The Swiggy Design team works with design
                                    oriented engineers, product managers and
                                    some of the best designers in a fast-paced,
                                    rapidly growing, hybrid
                                    (technology/operations) environment.
                                </p>

                                <p>
                                    We are highly user-centric and we deeply
                                    believe we can innovate our way out of any
                                    box. The role demands great execution, bold
                                    innovation, obsession with quality,
                                    fearlessness and optimism to be inspired by
                                    the unknown and never settle, solving
                                    problems with creativity while keeping the
                                    user in mind and ambition to take projects
                                    to the finish line.
                                </p>

                                <ul className="career-listings lh-md mt-md-4">
                                    <li>
                                        Create and refine comprehensive UX user
                                        flows for business-critical
                                        interactions.
                                    </li>
                                    <li>
                                        Work with users and product teams to
                                        test, evaluate and iterate on product
                                        features.
                                    </li>
                                    <li>
                                        Monitor and analyse data, how well
                                        existing interfaces work and where they
                                        breakdown.
                                    </li>
                                    <li>
                                        Clearly and effectively communicate
                                        design processes, ideas, and solutions.
                                    </li>
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
                            <h4 className="h2 pb-xl-4 pb-md-3 pb-2 dark-secondary-text-color">
                                Ideal Candidate
                            </h4>

                            <CareerStaticPosts content={state.idealCandidate} />
                            <div className="text-center mt-xl-5 pt-xl-5 mt-md-4 pt-md-4 mt-3 pt-3">
                                <Button
                                    variant="primary"
                                    className="red-btn career-apply-btn"
                                >
                                    Apply Now
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- careerdetail-canditate-section end---------- */}
        </>
    );
};

export default CareerDetailsComponent;
