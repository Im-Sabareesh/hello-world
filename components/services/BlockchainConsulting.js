import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Container, Row, Col, Accordion, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { serviceSelector } from '@redux';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

import {
    CardSection,
    ImgPanelSection,
    Button,
    H1,
    Paragraph,
    MyImage,
} from '@components';
import images from '@components/images';

const BlockchainConsultingComponent = (props) => {
    return (
        <>
            {/*--------------- Blockchain Consulting section1 start---------- */}

            <section className="service-inner-section1">
                <Container>
                    <Row>
                        <Col md={6} sm={12} className="my-auto">
                            <div className="d-flex align-items-center">
                                <h3 className="h3 secondary-text-color">
                                    Service
                                </h3>
                            </div>

                            <H1>Enterprise Blockchain Consulting</H1>

                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus gravida pellentesque
                                mauris. Maecenas cursus, magna quis mollis
                                euismod, neque elit scelerisque nunc, eu
                                pellentesque lectus ante sed leo. Vivamus sit
                                amet magna nibh. Fusce turpis dui, dapibus ut
                                congue non, consequat ac orci. Maecenas vel
                                neque aliquet, suscipit metus a, congue ante.
                            </Paragraph>

                            <div className="button-outer pt-lg-4 mt-lg-3 pt-md-3 pt-0 mt-0">
                                <Button
                                    btnVarient="red-btn"
                                    className="p-0"
                                    size="lg"
                                    onClick={() => {
                                        router.push(
                                            `/${props.language}/contact`
                                        );
                                    }}
                                ></Button>
                            </div>
                        </Col>
                        <Col md={6} sm={12}>
                            <div className="nft-service-img-div">
                                <MyImage
                                    src={images.nftPng}
                                    rounded="true"
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

            {/*--------------- Blockchain Consulting section1 end---------- */}

            {/*--------------- Blockchain Consulting section2 start---------- */}

            <section className="service-inner-section2">
                <div className="section-glow">
                    <Container>
                        <Row>
                            <Col md={6} sm={12}>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            What Is Blockchain?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is a distributed ledger
                                            that can record transactions in a
                                            secured and permanent way verifiable
                                            by the stakeholders
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Why Blockchain Matters?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is revolutionizing the
                                            enterprise world by providing a new
                                            type of infrastructure enabling
                                            trusted tech-based business
                                            relationships without the need of
                                            the third party thus making the
                                            system more transparent, efficient,
                                            and affordable.
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            Are you blockchain ready?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is disrupting the market
                                            across industries with its
                                            transformational capabilities. Our
                                            enterprise blockchain consulting
                                            services help clients to evaluate
                                            blockchain applicability and
                                            readiness of their systems to adopt
                                            the technology effectively.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </Col>

                            <Col md={6} sm={12}>
                                <h2 className="h2 mb-md-3 mb-2 pb-md-3 pb-2">
                                    Build Next-Generation Blockchain Solutions
                                </h2>

                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Vivamus gravida
                                    pellentesque mauris. Maecenas cursus, magna
                                    quis mollis euismod, neque elit scelerisque
                                    nunc, eu pellentesque lectus ante sed leo.
                                    Vivamus sit amet magna nibh. Fusce turpis
                                    dui, dapibus ut congue non, consequat ac
                                    orci. Maecenas vel neque aliquet, suscipit
                                    metus a, congue ante.
                                </Paragraph>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/*--------------- Blockchain Consulting section2 end---------- */}

            {/*--------------- Blockchain Consulting section3 cta start---------- */}

            <section className="service-inner-section3 py-xl-5 py-4">
                <Container>
                    <Row>
                        <Col md={12} className="text-center mb-2 mb-lg-5">
                            <h2 className="h2">
                                Our Blockchain Consulting Services
                            </h2>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-0 pt-2">
                    <Row>
                        <Col xs={12} sm={6} md={6} lg={3}>
                            <Card className="block-chain-feature-card mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0">
                                <Card.Body className="p-5 p-sm-3 p-md-3 p-lg-3 p-xl-5 ">
                                    <Card.Title className="mb-3">
                                        Advisory
                                    </Card.Title>
                                    <Card.Text>
                                        From use case discovery to POC to
                                        full-scale development, we help our
                                        clients at every stage to understand the
                                        business impact and adopt the right
                                        blockchain strategy.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={3}>
                            <Card className="block-chain-feature-card mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0">
                                <Card.Body className="p-5 p-sm-3 p-md-3 p-lg-3 p-xl-5 ">
                                    <Card.Title className="mb-3">
                                        Proof Of Concept
                                    </Card.Title>
                                    <Card.Text>
                                        Be blockchain confident before the
                                        adoption. We develop quick POCs to
                                        demonstrate how blockchain will increase
                                        efficiency and drive business results.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={3}>
                            <Card className="block-chain-feature-card mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0">
                                <Card.Body className="p-5 p-sm-3 p-md-3 p-lg-3 p-xl-5 ">
                                    <Card.Title className="mb-3">
                                        Blockchain Development
                                    </Card.Title>
                                    <Card.Text>
                                        We turn blockchain ideas into a robust
                                        DApp with our unparalleled industry
                                        experience & Hyperledger Fabric
                                        Development capabilities.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} sm={6} md={6} lg={3}>
                            <Card className="block-chain-feature-card mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0">
                                <Card.Body className="p-5 p-sm-3 p-md-3 p-lg-3 p-xl-5 ">
                                    <Card.Title className="mb-3">
                                        Training{' '}
                                    </Card.Title>
                                    <Card.Text>
                                        Our business and technical experts
                                        educate and train our clients to develop
                                        the right aptitude enabling them
                                        co-innovate and co-create blockchain
                                        solutions suitable for their use cases.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-5 pt-2">
                    <ImgPanelSection
                        className="cta-banner cta-banner2 d-flex align-items-center justify-content-end mt-5 mb-5"
                        title="I
                        Leverage blockchain to enhance your <br/> business.  Talk to an expert.
                        "
                        // link={`/${props.language}/contact`}
                        btnName="Let's Talk"
                    />
                </Container>
            </section>

            {/*--------------- Blockchain Consulting section3 cta end---------- */}
        </>
    );
};

export default BlockchainConsultingComponent;

BlockchainConsultingComponent.propTypes = { language: PropTypes.string };

BlockchainConsultingComponent.defaultProps = {
    language: '',
};
