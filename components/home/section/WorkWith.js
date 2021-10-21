import React from 'react';
import _ from 'lodash';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

import { ImgPanelSection } from 'common-components';
import homeImages from '@components/images';

export default function WorkWithSection() {
    return (
        <section className="home-section-7 my-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} className="text-center">
                        <h2 className="h2 my-4"> We Work with </h2>
                    </Col>

                    <Col md={4} className="workwithus-txt mt-3">
                        <h1 className="h1 secondary-text-color mb-3">
                            121,000+
                        </h1>
                        <p>
                            customers in over 120 countries growing their
                            businesses with Blockchain Consulting
                        </p>
                    </Col>

                    <Col md={8} className="workwithus-txt  mt-3">
                        <Image
                            src={homeImages.weWorkWith}
                            alt=" "
                            height={285}
                            width={822}
                            loading="lazy"
                        />
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
