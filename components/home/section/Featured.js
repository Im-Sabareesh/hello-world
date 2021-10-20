import React from 'react';
import _ from 'lodash';
import Link from 'next/link';

import { Container, Row, Col, Button } from 'react-bootstrap';

export default function FeaturedSection() {
    const featuresList = [
        {
            title: 'Hyperledger Development',
            link: '#',
        },
        {
            title: 'Defi Development',
            link: '/services/DefiServices/',
        },
        {
            title: 'NFT Development',
            link: '/services/NFTServices/',
        },
        {
            title: 'Obortech Smart Hub',
            link: '#',
        },
        {
            title: 'GDPR Compliance',
            link: '#',
        },
    ];

    return (
        <section className="hero-banner-container">
            <Container>
                <Row>
                    <Col md={10} lg={8} xl={7} xxl={6}>
                        <div className="d-flex align-items-center">
                            <h3 className="h3 secondary-text-color">
                                Blockchain Technology
                            </h3>
                            <div className="heading-line"> </div>
                        </div>

                        <h3 className="h1">
                            We provide enterprise blockchain consulting
                        </h3>

                        <p>
                            Unleash full business potential with our cutting
                            edge blockchain solutions. We innovate, build and
                            integrate real-world blockchain applications.
                        </p>

                        <div className="button-outer">
                            <Button
                                variant="primary"
                                className="red-btn"
                                size="lg"
                                onClick={() => {
                                    router.push('/contact');
                                }}
                            >
                                Consult for Free
                            </Button>
                        </div>
                    </Col>

                    <Col md={12} className="text-center mt-4">
                        <h2 className="h2 secondary-text-color">Featured</h2>
                    </Col>

                    <div className="mt-4">
                        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                            {_.map(featuresList, (item) => (
                                <Col key={_.uniqueId()}>
                                    {item.link !== '#' ? (
                                        <Link href={item.link}>
                                            <div className="featured-box-container btn d-flex align-items-center justify-content-center text-center">
                                                <span> {item.title} </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="featured-box-container btn d-flex align-items-center justify-content-center text-center">
                                            <span> {item.title} </span>
                                        </div>
                                    )}
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Row>
            </Container>
        </section>
    );
}
