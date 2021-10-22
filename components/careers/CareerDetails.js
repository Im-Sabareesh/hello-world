import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

import { Button, H1, Paragraph } from '@components';
import careerImages from '@components/images';
import { careerSelector } from '@redux';
import StaticComponent from '../StaticComponent';

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
                                    Careers
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
                                <Paragraph className="location-element">
                                    {state.type} {state.location}
                                </Paragraph>
                                <H1 className="mb-2 pb-2 dark-text-color">
                                    {state.name}
                                </H1>
                                <Button
                                    btnVarient="red-btn"
                                    className="mb-lg-5 mb-md-4 mb-3"
                                >
                                    Apply Now
                                </Button>
                            </div>

                            <div className="job-overview pt-xxl-5">
                                <h2 className="h2 pb-xl-4 pb-md-3 pb-2 dark-secondary-text-color">
                                    Overview
                                </h2>
                                <StaticComponent content={state.overview} />
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={5}>
                            <div className="overview-img">
                                <Image
                                    src={careerImages.careerDetail}
                                    alt="career-overview-img"
                                    className="overview-mobile-img d-none d-lg-block"
                                    width={843}
                                    height={843}
                                />
                                <Image
                                    src={careerImages.careerDetail}
                                    alt="career-overview-img"
                                    className="overview-mobile-img d-block d-lg-none"
                                    width={843}
                                    height={843}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {_.map(state.content, (content) => (
                <StaticComponent content={content} />
            ))}
        </>
    );
};

export default CareerDetailsComponent;
