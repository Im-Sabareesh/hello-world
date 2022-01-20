import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';

import { Container, Row, Col } from 'react-bootstrap';
import images from '@components/images';

import { Paragraph, MyImage } from '@components';

export default function BlockchainBusinessSection() {
    const t = i18next.t.bind(i18next),
        blockChainUsageList = [
            {
                name: t('home.enhancedSecurity'),
                icon: images.enhSecurity,
            },
            {
                name: t('home.greaterTransparency'),
                icon: images.greTransp,
            },
            {
                name: t('home.instantTraceability'),
                icon: images.instanceTrace,
            },
            {
                name: t('home.increasedEfficiency'),
                icon: images.incEff,
            },
            {
                name: t('home.decentralizedGovernance'),
                icon: images.deCenGov,
            },
        ];

    return (
        <section className="home-section1 py-5">
            <div className="home-section1-bg pb-xl-5">
                <Container>
                    <Row>
                        <Col md={12} lg={6} className="my-auto">
                            <h2 className="dark-text-color mb-4 h2">
                                {t('home.blockchainRevolutionizingBusiness')}
                            </h2>

                            <Paragraph>{t('home.blockchainRevolutionizingBusinessDesc')}</Paragraph>
                            <Paragraph>{t('home.blockchainRevolutionizingBusinessDesc1')}</Paragraph>
                        </Col>

                        <Col
                            md={12}
                            lg={6}
                            className="text-end text-lg-end text-md-center"
                        >
                            <MyImage
                                src={images.homeSecTopImg}
                                alt=""
                                width={440}
                                height={509}
                                layout="intrinsic"
                                placeholder="blur"
                                loading="lazy"
                            />
                            {/* <Image
                                src={images.homeSecTopImg}
                                alt=""
                                width={610}
                                height={318}
                                layout="intrinsic"
                                placeholder="blur"
                                loading="lazy"
                            /> */}
                        </Col>

                        <div className="mt-5 mb-sm-3">
                            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 justify-content-center mt-2">
                                {_.map(blockChainUsageList, (item) => (
                                    <Col
                                        key={_.uniqueId()}
                                    >
                                        <div className="home-section-icons d-flex align-items-center justify-content-center text-center home-section-icons-block">
                                            <div>
                                                {/* <p> */}
                                                <MyImage
                                                    src={item.icon}
                                                    alt=""
                                                    width={76}
                                                    height={76}
                                                    loading="lazy"
                                                    className="pb-2"
                                                />
                                                {/* </p> */}
                                                <h3 className="h3 dark-text-color mb-0">
                                                    {item.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

BlockchainBusinessSection.propTypes = {};

BlockchainBusinessSection.defaultProps = {};
