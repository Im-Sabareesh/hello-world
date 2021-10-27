import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';

import { Button, H1, MyImage, Paragraph } from '@components';
import images from '@components/images';
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
                        <Col sm={12} md={12} lg={6} className="my-auto">
                            <div className="text-center text-lg-start">
                                <Paragraph className="location-element">
                                    {state.type} {state.location}
                                </Paragraph>
                                <H1 className="mb-2 pb-2 dark-text-color career-name">
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
                        <Col sm={12} md={12} lg={6}>
                            <div className="overview-img">
                                <div className="d-none d-lg-block">
                                    <MyImage
                                        src={images.careerDetail}
                                        alt="career-overview-img"
                                        className="overview-mobile-img p-0"
                                        width={843}
                                        height={843}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="d-lg-flex">
                                    <MyImage
                                        src={images.careerDetail}
                                        alt="career-overview-img"
                                        className="overview-mobile-img"
                                        width={843}
                                        height={843}
                                        layout="responsive"
                                    />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            {_.map(state.content, (content) => (
                <StaticComponent key={_.uniqueId()} content={content} />
            ))}
            <section className="careerdetail-canditate-section mb-xl-5 pb-xl-5 mb-md-4 pb-md-4 mb-3 pb-3">
                <div className="text-center mt-xl-5 pt-xl-5 mt-md-4 pt-md-4 mt-3 pt-3">
                    <Button btnVarient="red-btn" className=" career-apply-btn">
                        Apply Now
                    </Button>
                </div>
            </section>
        </>
    );
};

export default CareerDetailsComponent;

CareerDetailsComponent.propTypes = {};

CareerDetailsComponent.defaultProps = {};
