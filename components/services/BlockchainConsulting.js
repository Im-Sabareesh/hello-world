import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
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
    const blockchainServList = useSelector(serviceSelector.servicesListSelector);
    const router = useRouter(),
        t = i18next.t.bind(i18next);

    return (
        <>
            {/*--------------- Blockchain Consulting section1 start---------- */}

            <section className="service-inner-section1">
                <Container>
                    <Row>
                        <Col md={6} sm={12} className="my-auto">
                            <div className="d-flex align-items-center">
                                <h3 className="h3 secondary-text-color">
                                    {t('header.service')}
                                </h3>
                            </div>

                            <H1>{blockchainServList.blockchain.headerSection.title}</H1>

                            <Paragraph>
                                {blockchainServList.blockchain.headerSection.description}
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
                                    {t('talkOurExperts')}
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

            {/*--------------- Blockchain Consulting section1 end---------- */}

            {/*--------------- Blockchain Consulting section2 start---------- */}

            <section className="service-inner-section2">
                <div className="section-glow">
                    <Container>
                        <Row>
                            <Col md={6} sm={12}>
                                {_.map(blockchainServList.blockchain.accordion, (item, i) => (                                        
                                    <Accordion key={`${i}`} defaultActiveKey="0" flush>
                                        <Accordion.Item eventKey={`${i}`}>
                                            <Accordion.Header>
                                                {item.headerTitle}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {item.headerBody}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                ))}
                            </Col>

                            <Col md={6} sm={12}>
                                <h2 className="h2 mb-md-3 mb-2 pb-md-3 pb-2">
                                    {blockchainServList.blockchain.smallParaSection.title}
                                </h2>
                                {_.map(blockchainServList.blockchain.smallParaSection.content,
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

            {/*--------------- Blockchain Consulting section2 end---------- */}

            {/*--------------- Blockchain Consulting section3 cta start---------- */}

            <section className="service-inner-section3 py-xl-5 py-4">
                <Container>
                    <Row>
                        <Col md={12} className="text-center mb-2 mb-lg-5">
                            <h2 className="h2">
                                {blockchainServList.blockchain.cardHeaderTitle}
                            </h2>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-0 pt-2">
                    <Row>
                     {_.map(blockchainServList.blockchain.cardSection, (item, i) => (
                            <Col key={_.uniqueId()} xs={12} sm={6} md={6} lg={3}>
                                <CardSection
                                    className="block-chain-feature-card mb-3 mb-sm-3 mb-md-3 mb-lg-0 mb-xl-0"
                                    cardBodyCls="p-5 p-sm-3 p-md-3 p-lg-3 p-xl-5"
                                    item={item}
                                    index={i}
                                    footer="true"
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Container className="mt-5 pt-2">
                    <ImgPanelSection
                        className="cta-banner cta-banner2 d-flex align-items-center justify-content-end mt-5 mb-5"
                        title={blockchainServList.blockchain.imgPannelSection.title}
                        link={`/${props.language}/contact`}
                        btnName={t('letsTalk')}
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
