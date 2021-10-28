import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { serviceSelector } from '@redux';
import { useSelector } from 'react-redux';

import {
    CardSection,
    ImgPanelSection,
    Button,
    H1,
    Paragraph,
    MyImage,
} from '@components';
import images from '@components/images';

const NFTSComponent = (props) => {
    const nftServList = useSelector(serviceSelector.servicesListSelector);
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

                            <H1>{nftServList.nft.headerSection.title}</H1>

                            <Paragraph>
                                {nftServList.nft.headerSection.description}
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
                                >
                                    Talk to our Experts
                                </Button>
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
                                {_.map(
                                    nftServList.nft.smallParaSection,
                                    (item, i) => (
                                        <Paragraph key={_.uniqueId()}>
                                            {item}
                                        </Paragraph>
                                    )
                                )}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/*--------------- NFT Services section2 end---------- */}

            {/*--------------- NFT Services section3 cta start---------- */}

            <section className="service-inner-section3 py-xl-5 py-4">
                <Container>
                    <Row>
                        <Col md={12} className="text-center mb-2 mb-lg-5">
                            <h2 className="h2">
                                {' '}
                                Our wide range of service include{' '}
                            </h2>
                        </Col>
                        {_.map(nftServList.nft.cardSection, (item, i) => (
                            <Col key={_.uniqueId()} md={6} lg={4}>
                                <CardSection
                                    className="card shadow-sm mt-3 mb-4"
                                    item={item}
                                    index={i}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Container className="mt-5 pt-2">
                    <ImgPanelSection
                        secClass="service-inner-section3 py-md-5 py-4"
                        className="cta-banner cta-banner3 d-flex align-items-center"
                        title="Start Now?"
                        link={`/${props.language}/contact`}
                        btnName="Get a quote"
                    />
                </Container>
            </section>

            {/*--------------- NFT Services section3 cta end---------- */}
        </>
    );
};

export default NFTSComponent;

NFTSComponent.propTypes = { language: PropTypes.string };

NFTSComponent.defaultProps = {
    language: '',
};
