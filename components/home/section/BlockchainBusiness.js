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
            <Container>
                <Row>
                    <Col md={12} lg={6} className="mt-5">
                        <h2 className="dark-text-color mb-4 h2">
                            {t('home.blockChainEnhance')}
                        </h2>

                        <Paragraph>{t('home.blockChainEnhanceDesc')}</Paragraph>
                    </Col>

                    <Col
                        md={12}
                        lg={6}
                        className="mt-5 text-end text-lg-end text-md-center"
                    >
                        <MyImage
                            src={images.homeSecTopImg}
                            alt=""
                            width={610}
                            height={318}
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

                    <div className="mt-5 mb-3">
                        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 justify-content-center mt-2">
                            {_.map(blockChainUsageList, (item) => (
                                <Col
                                    key={_.uniqueId()}
                                    className="home-section-icons d-flex align-items-center justify-content-center text-center"
                                >
                                    <div>
                                        {/* <p> */}
                                        <MyImage
                                            src={item.icon}
                                            alt=""
                                            width={76}
                                            height={76}
                                            loading="lazy"
                                        />
                                        {/* </p> */}
                                        <h3 className="h3 dark-text-color mb-0">
                                            {item.name}
                                        </h3>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Row>
            </Container>
        </section>
    );
}

BlockchainBusinessSection.propTypes = {};

BlockchainBusinessSection.defaultProps = {};
