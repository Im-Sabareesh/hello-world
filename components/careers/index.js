import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Button, H1, Paragraph } from '@components';
import { careerSelector } from '@redux';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import i18next from 'i18next';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { careerAction } from '@redux';
const CareersComponent = (props) => {
    const jobList = useSelector(careerSelector.careerListSelector);

    const router = useRouter(),
        t = i18next.t.bind(i18next);
    const dispatch = useDispatch();

    return (
        <>
            {/*--------------- Careers hero section start---------- */}

            <section className="career-hero-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="text-center w-50 mx-auto">
                                <H1>Join our Team</H1>
                                <Paragraph>
                                    Help us on the quest of making good software
                                    even better.
                                </Paragraph>
                                <div className="button-outer mx-auto mt-md-3 pt-md-3">
                                    <Button btnVarient="red-btn">
                                        {t('careers.currentOpening')}
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
                            <H1 className="mb-md-4 pb-md-3 mb-2 pb-2 ">
                                Why Chaincode Consulting ?
                            </H1>
                            <h3 className="h3 lh-base mb-3 fw-normal">
                                We are always looking for driven, interesting,
                                and capable individules to join our team. In
                                addition to our agaency business, we have
                                several in-house projects and companies.
                            </h3>
                            <h3 className="h3 lh-base mb-3 fw-normal">
                                If you think you fit the bill, then we’d like to
                                chat.
                            </h3>
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
                    <h2 className="h2 mb-md-4 pb-md-3 mb-2 pb-2 dark-secondary-text-color text-center">
                        Job Listings
                    </h2>
                    {/* <Row>
                        <Col sm={12}>
                            <div className="w-1k-block bg-light-primary mx-auto p-lg-4 p-3">
                                <Form className="d-flex flex-wrap justify-content-between p-3">
                                    <Form.Group
                                        className="form-field search-field md-margin"
                                        controlId="formGroupsearch"
                                    >
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
                                        <Form.Select defaultValue="Location">
                                            <option>Location</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>
                    </Row> */}
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
                                            <h3 className="h3">{item.name}</h3>
                                            <span>{item.description}</span>
                                        </div>
                                        <div className="job-info d-flex justify-content-between align-items-center">
                                            <div className="job-location">
                                                <h3 className="h3">Location</h3>
                                                <span>{item.location}</span>
                                            </div>
                                            <div className="job-posted">
                                                <h3 className="h3">Posted</h3>
                                                <span>
                                                    {moment(
                                                        item.time
                                                    ).fromNow()}
                                                </span>
                                            </div>
                                            <Button
                                                btnVarient="gradient-btn"
                                                onClick={() => {
                                                    dispatch(
                                                        careerAction.selectedCareer(
                                                            item
                                                        )
                                                    );
                                                    router.push(
                                                        `/${props.language}/careers/${item.id}`
                                                    );
                                                }}
                                            >
                                                {t('readMore')}
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

CareersComponent.propTypes = { language: PropTypes.string };

CareersComponent.defaultProps = { language: '' };
