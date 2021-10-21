import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';

import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';

const DefiSComponent = () => {
    const router = useRouter(),
        wideServiceListSec3 = [
            {
                title: 'Market-Market Consulting',
                image: '/assets/images/wide-service-1.jpg',
                describe:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            },
            {
                title: 'Decentralized Crypto Banking',
                image: '/assets/images/wide-service-2.jpg',
                describe:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            },
            {
                title: 'Decentralized Crypto Banking',
                image: '/assets/images/wide-service-3.jpg',
                describe:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            },
        ];

    return (
        <>
            {/*--------------- defi Services section1 start---------- */}

            <section className="service-inner-section1">
                <Container>
                    <Row>
                        <Col md={6} sm={12} className="my-auto">
                            <div className="d-flex align-items-center">
                                <h3 className="h3 secondary-text-color">
                                    Service
                                </h3>
                            </div>

                            <h3 className="h1">Defi development</h3>

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
                                    src="/assets/images/defi-main.png"
                                    rounded
                                    className="nft-service-img"
                                    alt=" "
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- defi Services section1  end---------- */}

            {/*--------------- defi Services section2 start---------- */}

            <section className="service-inner-section2 p-0">
                <div className="section-glow">
                    <Container>
                        <Row>
                            <Col lg={5}>
                                <Image src="/assets/images/video-thumb.png" />
                            </Col>

                            <Col lg={{ span: 6, offset: 1 }}>
                                <h2 className="h2 mb-md-3 mb-2 pb-md-3 pb-2">
                                    Blockchain solutions for frictionless
                                    business
                                </h2>

                                <ul className="ul-list">
                                    <li>
                                        {' '}
                                        Blockchain is changing the way the world
                                        lives and works – but it&apos;s only a
                                        means to an end, not the end itself. We
                                        can help you apply this technology to
                                        drive your transformation into the
                                        future.{' '}
                                    </li>

                                    <li>
                                        {' '}
                                        We start with an understanding of your
                                        specific aspirations, followed by a
                                        practical application of blockchain
                                        innovation. The conversation grows as
                                        new opportunities come to light along
                                        the way.{' '}
                                    </li>

                                    <li>
                                        {' '}
                                        As the leading independent technology
                                        organization, we integrate alliances,
                                        partnerships, and leaders from every
                                        aspect of the blockchain ecosystem. The
                                        goal? To bring the right combination of
                                        capabilities to your unique
                                        infrastructure, challenges and strategic
                                        vision{' '}
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/*--------------- defi Services section2 end---------- */}

            {/*--------------- defi Services section3 cta start---------- */}

            <section className="service-inner-section3 py-xl-5 py-4">
                <Container>
                    <Row>
                        <Col md={12} className="text-center mb-2 mb-lg-5">
                            <h2 className="h2">
                                {' '}
                                Our wide range of service include{' '}
                            </h2>
                        </Col>
                        {_.map(wideServiceListSec3, (item) => (
                            <Col key={_.uniqueId()} md={6} lg={4}>
                                <Card className="custom-card shadow-sm mt-3 mb-4">
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h3 className="h3">
                                                {' '}
                                                {item.title}{' '}
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>{item.describe}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between">
                                        <button
                                            type="button"
                                            className="red-btn min-size-btn btn btn-primary w-100"
                                        >
                                            Know More
                                        </button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Container className="mt-5 pt-2">
                    <div className="cta-banner cta-banner2 d-flex align-items-center justify-content-end mt-5 mb-5">
                        <div className="cta-txt">
                            <h2 className="h2">
                                It’s Never too Late to Start! Get FREE
                                Consultation from our Experts
                            </h2>
                            <Button
                                variant="primary"
                                className="red-btn min-size-btn"
                                onClick={() => {
                                    router.push('/contact');
                                }}
                            >
                                Let’s Talk
                            </Button>
                        </div>
                    </div>
                </Container>
            </section>

            {/*--------------- defi Services section3 cta end---------- */}

            {/*--------------- defi Services section4 start---------- */}

            <section className="service-inner-section4 py-5">
                <Container>
                    <Row>
                        <Col md={12} lg={6} className="my-auto">
                            <h2 className="h2 mb-4">
                                {' '}
                                Blockchain solutions for frictionless business{' '}
                            </h2>

                            <p>
                                Blockchain for business uses a shared and
                                immutable ledger that can only be accessed by
                                members with permission. Network members control
                                what information each organization or member may
                                see, and what actions each can take. Blockchain
                                is sometimes called a trustless network not
                                because business partners don’t trust each
                                other, but because they don’t have to.
                            </p>
                        </Col>

                        <Col md={{ span: 12, order: 0 }} lg={6}>
                            <Image
                                src="/assets/images/defi-img2.png"
                                alt=".."
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- defi Services section4 end---------- */}
        </>
    );
};

export default DefiSComponent;
