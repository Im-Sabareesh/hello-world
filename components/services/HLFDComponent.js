import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { serviceSelector } from '@redux';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

import { CardSection, Button, H1, Paragraph, MyImage } from '@components';
import images from '@components/images';

const HLFDSComponent = (props) => {
    const hlfdServList = useSelector(serviceSelector.servicesListSelector);
    const router = useRouter(),
        t = i18next.t.bind(i18next);

    return (
        <>
            <section className="service-inner-section1">
                <Container>
                    <Row>
                        <Col md={6} sm={12} className="my-auto">
                            <div className="d-flex align-items-center">
                                <h3 className="h3 secondary-text-color">
                                    Service
                                </h3>
                            </div>

                            <H1>{hlfdServList.hlfd.headerSection.title}</H1>

                            <Paragraph>
                                {hlfdServList.hlfd.headerSection.description}
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
                            <Col lg={5}>
                                <MyImage
                                    src={images.videoThumb}
                                    width={771}
                                    height={542}
                                    layout="responsive"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                            </Col>

                            <Col lg={{ span: 6, offset: 1 }}>
                                <h2 className="h2 mb-md-3 mb-2 pb-md-3 pb-2">
                                    {hlfdServList.hlfd.smallParaSection.title}
                                </h2>
                                <div className="ul-list">
                                    <p>
                                        {
                                            hlfdServList.hlfd.smallParaSection
                                                .content
                                        }
                                    </p>
                                </div>
                                <h3 className="h3 mb-md-3 mb-2 pb-md-3 pb-2">
                                    {
                                        hlfdServList.hlfd.smallParaSection
                                            .subtitle
                                    }
                                </h3>
                                <div className="ul-list">
                                    <p>
                                        {
                                            hlfdServList.hlfd.smallParaSection
                                                .subcontent
                                        }
                                    </p>
                                </div>
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
                                Our wide range of service include{' '}
                            </h2>
                        </Col>
                        {_.map(hlfdServList.hlfd.cardSection, (item, i) => (
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
            </section>
        </>
    );
};

export default HLFDSComponent;

HLFDSComponent.propTypes = { language: PropTypes.string };

HLFDSComponent.defaultProps = {
    language: '',
};
