import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
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

const DefiSComponent = (props) => {
    const defiServList = useSelector(serviceSelector.servicesListSelector);
    const router = useRouter(),
        t = i18next.t.bind(i18next);

    return (
        <>
            {/*--------------- defi Services section1 start---------- */}

            <section className="service-inner-section1">
                <Container>
                    <Row>
                        <Col md={6} sm={12} className="my-auto">
                            <div className="d-flex align-items-center">
                                <h3 className="h3 secondary-text-color">
                                    {t('header.service')}
                                </h3>
                            </div>

                            <H1>{defiServList.defi.headerSection.title}</H1>

                            <Paragraph>
                                {defiServList.defi.headerSection.description}
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
                                    src={images.defiMain}
                                    rounded="true"
                                    className="nft-service-img"
                                    alt=" "
                                    width={913}
                                    height={752}
                                    layout="intrinsic"
                                    placeholder="blur"
                                    loading="lazy"
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
                            <Col xl={{ span: 10, offset: 1 }}>
                                <h2 className="h2 mb-md-3 mb-2 pb-md-3 pb-2">
                                    {defiServList.defi.smallParaSection.title}
                                </h2>
                                {_.map(
                                    defiServList.defi.smallParaSection.content,
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

            {/*--------------- defi Services section2 end---------- */}

            {/*--------------- defi Services section3 cta start---------- */}

            <section className="service-inner-section3 py-xl-5 py-4">
                <Container>
                    <Row>
                        <Col md={12} className="text-center mb-2 mb-lg-5">
                            <h2 className="h2">
                                {defiServList.defi.cardHeaderTitle}
                            </h2>
                        </Col>
                        {_.map(defiServList.defi.cardSection, (item, i) => (
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
                        className="cta-banner cta-banner2 d-flex align-items-center justify-content-end mt-5 mb-5"
                        title={defiServList.defi.imgPannelSection.title}
                        link={`/${props.language}/contact`}
                        btnName={t('letsTalk')}
                    />
                </Container>
            </section>

            {/*--------------- defi Services section3 cta end---------- */}

            {/*--------------- defi Services section4 start---------- */}

            {/* <section className="service-inner-section4 py-5">
                <Container>
                    <Row>
                        <Col md={12} lg={6} className="my-auto">
                            <h2 className="h2 mb-4">
                                {defiServList.defi.lastParaSection.title}
                            </h2>

                            <Paragraph>
                                {defiServList.defi.lastParaSection.content}
                            </Paragraph>
                        </Col>

                        <Col md={{ span: 12, order: 0 }} lg={6}>
                            <MyImage
                                src={images.defiTwo}
                                alt=".."
                                width={927}
                                height={646}
                                layout="responsive"
                                placeholder="blur"
                                loading="lazy"
                            />
                        </Col>
                    </Row>
                </Container>
            </section> */}

            {/*--------------- defi Services section4 end---------- */}
        </>
    );
};

export default DefiSComponent;

DefiSComponent.propTypes = { language: PropTypes.string };

DefiSComponent.defaultProps = {
    language: '',
};
