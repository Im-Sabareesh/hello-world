import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';

import { ImgPanelSection, Button, H1, Paragraph } from '@components';
import images from '@components/images';

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

                            <H1>NFT Development</H1>

                            <Paragraph>
                                Our NFT development process provides high
                                customization freedom and allows you to become a
                                frontrunner in the NFT field by availing of the
                                services of our NFT development company.
                            </Paragraph>

                            <div className="button-outer pt-lg-4 mt-lg-3 pt-md-3 pt-0 mt-0">
                                <Button
                                    btnVarient="red-btn"
                                    className="p-0"
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
                                    src={images.nftPng}
                                    rounded
                                    className="nft-service-img"
                                    alt=" "
                                    width={636}
                                    height={529}
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
                                <Paragraph>
                                    Blockchain is changing the way the world
                                    lives and works – but it&apos;s only a means
                                    to an end, not the end itself. We can help
                                    you apply this technology to drive your
                                    transformation into the future.
                                </Paragraph>

                                <Paragraph>
                                    We start with an understanding of your
                                    specific aspirations, followed by a
                                    practical application of blockchain
                                    innovation. The conversation grows as new
                                    opportunities come to light along the way.
                                </Paragraph>

                                <Paragraph>
                                    As the leading independent technology
                                    organization, we integrate alliances,
                                    partnerships, and leaders from every aspect
                                    of the blockchain ecosystem. The goal? To
                                    bring the right combination of capabilities
                                    to your unique infrastructure, challenges
                                    and strategic vision
                                </Paragraph>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/*--------------- NFT Services section2 end---------- */}

            {/*--------------- NFT Services section3 cta start---------- */}

            <ImgPanelSection
                secClass="service-inner-section3 py-md-5 py-4"
                className="cta-banner cta-banner3 d-flex align-items-center"
                title="Start Now?"
                link="/contact"
                btnName="Get a quote"
            />

            {/*--------------- NFT Services section3 cta end---------- */}
        </>
    );
};

export default NFTSComponent;

NFTSComponent.propTypes = {};

NFTSComponent.defaultProps = {};