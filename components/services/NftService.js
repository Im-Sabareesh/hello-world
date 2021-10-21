import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';

import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const NFTSComponent = () => {
    const router = useRouter();

    return (
        <>
            {/*--------------- NFT Services section1 start---------- */}

            <section className="service-inner-section1">
                <Container>
                    <Row>
                        <Col md={6} sm={12} className="my-auto">
                            <div className="d-flex align-items-center">
                                <h3 className="h3 secondary-text-color">
                                    Service
                                </h3>
                            </div>

                            <h3 className="h1">NFT Development</h3>

                            <p>
                                Our NFT development process provides high
                                customization freedom and allows you to become a
                                frontrunner in the NFT field by availing of the
                                services of our NFT development company.
                            </p>

                            <div className="button-outer pt-lg-4 mt-lg-3 pt-md-3 pt-0 mt-0">
                                <Button
                                    variant="primary"
                                    className="red-btn p-0"
                                    size="lg"
                                    onClick={() => {
                                        router.push('/contact');
                                    }}
                                >
                                    Talk to our Experts
                                </Button>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="nft-service-img-div">
                                <Image
                                    src="/assets/images/nftesrvices-image1.png"
                                    rounded
                                    className="nft-service-img"
                                    alt=" "
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- NFT Services section1 end---------- */}

            {/*--------------- NFT Services section2 start---------- */}

            <section className="service-inner-section2">
                <div className="section-glow">
                    <Container>
                        <Row>
                            <Col xl={{ span: 10, offset: 1 }}>
                                <h2 className="h2 mb-md-3 mb-2 pb-md-3 pb-2">
                                    Blockchain solutions for frictionless
                                    business
                                </h2>
                                <p>
                                    Blockchain is changing the way the world
                                    lives and works – but it&apos;s only a means
                                    to an end, not the end itself. We can help
                                    you apply this technology to drive your
                                    transformation into the future.
                                </p>

                                <p>
                                    We start with an understanding of your
                                    specific aspirations, followed by a
                                    practical application of blockchain
                                    innovation. The conversation grows as new
                                    opportunities come to light along the way.
                                </p>

                                <p>
                                    As the leading independent technology
                                    organization, we integrate alliances,
                                    partnerships, and leaders from every aspect
                                    of the blockchain ecosystem. The goal? To
                                    bring the right combination of capabilities
                                    to your unique infrastructure, challenges
                                    and strategic vision
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/*--------------- NFT Services section2 end---------- */}

            {/*--------------- NFT Services section3 cta start---------- */}

            <section className="service-inner-section3 py-md-5 py-4">
                <Container>
                    <div className="cta-banner cta-banner3 d-flex align-items-center">
                        <div className="cta-txt">
                            <h2 className="h2">Start Now?</h2>
                            <Button
                                variant="primary"
                                className="red-btn min-size-btn"
                                onClick={() => {
                                    router.push('/contact');
                                }}
                            >
                                Get a quote
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/*--------------- NFT Services section3 cta end---------- */}
        </>
    );
};

export default NFTSComponent;
