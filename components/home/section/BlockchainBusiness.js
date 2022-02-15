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
        <section className="home-section1 py-5 home-section1-mobile mobile-section-padding">
            <div className="home-section1-bg pb-xl-5">
                <Container>
                    <Row>
                        <Col md={12} lg={6} className="my-auto">
                            <h2 className="dark-text-color mb-lg-4 h2 mb-0">
                                {t('home.blockchainRevolutionizingBusiness')}
                            </h2>
                            <div className='home-section1-mobile-image text-center d-lg-none d-block'>
                                <MyImage
                                    src={images.homeSecTopImg}
                                    alt=""
                                    width={440}
                                    height={509}
                                    layout="intrinsic"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                            </div>
                            <Paragraph>{t('home.blockchainRevolutionizingBusinessDesc')}</Paragraph>
                            <Paragraph>{t('home.blockchainRevolutionizingBusinessDesc1')}</Paragraph>
                        </Col>

                        <Col
                            md={12}
                            lg={6}
                            className="text-center d-lg-block d-none"
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

                        <div className="mt-lg-5 mt-1 mb-sm-3">
                            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-2 justify-content-md-center mt-2">
                                {_.map(blockChainUsageList, (item) => (
                                    <Col
                                        key={_.uniqueId()}
                                    >
                                        <div className="home-section-icons d-flex align-items-center justify-content-md-center text-center home-section-icons-block">
                                            <div className="blockchain-consulting-icon">
                                                {/* <p> */}
                                                <MyImage
                                                    src={item.icon}
                                                    alt=""
                                                    width={76}
                                                    height={76}
                                                    loading="lazy"
                                                    className="pb-md-2"
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
