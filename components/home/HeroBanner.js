import React from 'react';
import _ from 'lodash';
import {Container, Row, Col, Button} from 'react-bootstrap';

const featureList = [
    "Hyperledger Development",
    "DeFi Development",
    "NFT Development",
    "Obortech Smart Hub",
    "GDPR Compliance",
]; 

const HeroBanner = () => {
    return (
        <section className="hero-banner-container">
        <Container>
            <Row>
                <Col md={6}>
                    <div className="d-flex align-items-center">
                        <h3 className="h3 secondary-text-color">
                            Blockchain Technology
                        </h3>
                        <div className="heading-line"></div>
                    </div>

                    <h3 className="h1 ">
                        We provide enterprise blockchain consulting
                    </h3>

                    <p>
                        Unleash full business potential with our cutting edge blockchain solutions. We innovate, build and integrate real-world blockchain applications.
                    </p>

                    <div className="button-outer">
                        <Button variant="primary" className="red-btn" size="lg">
                            Consult for Free
                        </Button>
                    </div>
                </Col>

                <Col md={12}
                    className="text-center">
                    <h2 className="h2 secondary-text-color">
                        Featured
                    </h2>
                </Col>

                <div className="mt-4">
                    <Row  className="row-cols-2 row-cols-lg-5 justify-content-center">
                      {_.map(featureList,list=>(
                            <Col key={list}>
                                <div className="featured-box-container d-flex align-items-center justify-content-center text-center">
                                    <span>
                                        {list}
                                    </span>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Row>
        </Container>
    </section>
    )
}

export default HeroBanner