import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { careerSelector } from '@redux';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const CareersComponent = () => {
    const jobList = useSelector(careerSelector.careerListSelector);

    const router = useRouter();

    return (
        <>
            {/*--------------- Careers hero section start---------- */}

            <section className="career-hero-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center w-50 mx-auto">
                                <h1 className="h1">Join our Team</h1>
                                <p>
                                    Help us on the quest of making good software
                                    even better.
                                </p>
                                <div className="button-outer mx-auto mt-md-3 pt-md-3">
                                    <Button
                                        variant="primary"
                                        className="red-btn"
                                    >
                                        See Current Openings
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- Careers hero section end ---------- */}

            {/*--------------- career-section1 start---------- */}

            <section className="career-section1  py-xl-5 py-4">
                <Container>
                    <Row>
                        <Col
                            xl={5}
                            md={12}
                            sm={12}
                            className="dark-secondary-text-color"
                        >
                            <h1 className="h1 mb-md-4 pb-md-3 mb-2 pb-2 ">
                                Why Chaincode Consulting ?
                            </h1>
                            <p className="h3 lh-base mb-3 fw-normal">
                                We are always looking for driven, interesting,
                                and capable individules to join our team. In
                                addition to our agaency business, we have
                                several in-house projects and companies.
                            </p>
                            <p className="h3 lh-base mb-3 fw-normal">
                                If you think you fit the bill, then we’d like to
                                chat.
                            </p>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="h3 dark-secondary-text-color"
                            >
                                <b>Check out the opportunities below.</b>
                            </a>
                        </Col>
                        <Col
                            xl={{ span: 6, offset: 1 }}
                            md={12}
                            sm={12}
                            className="my-auto"
                        >
                            <ul className="listing-div">
                                <li className="h3 fw-normal">
                                    <span className="h2 purple-gradient-text-color">
                                        01
                                    </span>
                                    Blockchain is changing the way the world
                                    lives and works.
                                </li>
                                <li className="h3 fw-normal">
                                    <span className="h2 purple-gradient-text-color">
                                        02
                                    </span>
                                    Blockchain is changing the way the world
                                    lives and works.
                                </li>
                                <li className="h3 fw-normal">
                                    <span className="h2 purple-gradient-text-color">
                                        03
                                    </span>
                                    Blockchain is changing the way the world
                                    lives and works.
                                </li>
                                <li className="h3 fw-normal">
                                    <span className="h2 purple-gradient-text-color">
                                        04
                                    </span>
                                    Blockchain is changing the way the world
                                    lives and works.
                                </li>
                                <li className="h3 fw-normal">
                                    <span className="h2 purple-gradient-text-color">
                                        05
                                    </span>
                                    Blockchain is changing the way the world
                                    lives and works.
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- career-section1 end ---------- */}

            {/*--------------- career-section2 start---------- */}

            <section className="career-section2  py-xl-5 py-4">
                <Container>
                    <h1 className="h2 mb-md-4 pb-md-3 mb-2 pb-2 dark-secondary-text-color text-center">
                        Job Listings
                    </h1>
                    <Row>
                        <Col sm={12}>
                            <div className="w-1k-block bg-light-primary mx-auto p-lg-4 p-3">
                                <Form className="d-flex flex-wrap justify-content-between p-3">
                                    <Form.Group
                                        className="form-field search-field md-margin"
                                        controlId="formGroupsearch"
                                    >
                                        {/* <Form.Label>Email address</Form.Label> */}
                                        <Form.Control
                                            type="text"
                                            placeholder="Search by Keyword"
                                        />
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        className="form-field md-margin"
                                        controlId="formGridCategory"
                                    >
                                        {/* <Form.Label>State</Form.Label> */}
                                        <Form.Select defaultValue="Category">
                                            <option>Category</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        className="form-field"
                                        controlId="formGridJobType"
                                    >
                                        {/* <Form.Label>State</Form.Label> */}
                                        <Form.Select defaultValue="Job Type">
                                            <option>Job Type</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group
                                        as={Col}
                                        className="form-field"
                                        controlId="formGridLocation"
                                    >
                                        {/* <Form.Label>State</Form.Label> */}
                                        <Form.Select defaultValue="Location">
                                            <option>Location</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- career-section2 end ---------- */}

            {/*--------------- career-section3 start---------- */}

            <section className="career-section3">
                <Container>
                    <Row>
                        <Col sm={12}>
                            {_.map(jobList, (item) => (
                                <div
                                    key={_.uniqueId()}
                                    className="w-1k-block bg-light-primary mx-auto p-lg-4 p-3 mb-lg-4 mb-md-4 mb-3"
                                >
                                    <div className="job-listing p-3  d-flex justify-content-between align-items-center flex-lg-nowrap flex-wrap">
                                        <div className="job-position">
                                            <p className="h3">{item.name}</p>
                                            <span>{item.description}</span>
                                        </div>
                                        <div className="job-info d-flex justify-content-between align-items-center">
                                            <div className="job-location">
                                                <p className="h3">Location</p>
                                                <span>{item.location}</span>
                                            </div>
                                            <div className="job-posted">
                                                <p className="h3">Posted</p>
                                                <span>
                                                    {moment(
                                                        item.time
                                                    ).fromNow()}
                                                </span>
                                            </div>
                                            <Button
                                                onClick={() => {
                                                    router.push(
                                                        `careers/${item.id}`
                                                    );
                                                }}
                                                className="gradient-btn"
                                            >
                                                Read More
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- career-section3 end ---------- */}
        </>
    );
};

export default CareersComponent;

CareersComponent.propTypes = {};

CareersComponent.defaultProps = {};