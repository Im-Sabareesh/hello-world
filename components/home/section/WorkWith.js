import React from 'react';
import _ from 'lodash';

import { Container, Row, Col, Image } from 'react-bootstrap';

import { ImgPanelSection, H1, Paragraph } from '@components';

export default function WorkWithSection() {
    return (
        <section className="home-section-7 my-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} className="text-center">
                        <h2 className="h2 my-4"> We Work with </h2>
                    </Col>

                    <Col md={4} className="workwithus-txt mt-3">
                        <H1 className="secondary-text-color mb-3">
                            121,000+
                        </H1>
                        <Paragraph>
                            customers in over 120 countries growing their
                            businesses with Blockchain Consulting
                        </Paragraph>
                    </Col>

                    <Col md={8} className="workwithus-txt  mt-3">
                        <Image src="/assets/images/we-work.png" alt=" " />
                    </Col>

                    <Col md={12} className="mt-5 mb-5">
                        <ImgPanelSection
                            title="Still Have some Questions in Mind? Don't Worry. <br /> Get FREE Consultation from our Experts"
                            className="cta-banner cta-banner2 d-flex align-items-center justify-content-end"
                            link="/contact"
                            btnName="Let’s Talk"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
