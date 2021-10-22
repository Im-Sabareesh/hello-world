import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import homeImages from '@components/images';

export default function BlockchainBusinessSection() {
    const { t } = useTranslation(['home', 'common']),
        blockChainUsageList = [
            {
                name: t('enhancedSecurity'),
                icon: homeImages.enhSecurity,
            },
            {
                name: t('greaterTransparency'),
                icon: homeImages.greTransp,
            },
            {
                name: t('instantTraceability'),
                icon: homeImages.instanceTrace,
            },
            {
                name: t('increasedEfficiency'),
                icon: homeImages.incEff,
            },
            {
                name: t('decentralizedGovernance'),
                icon: homeImages.deCenGov,
            },
        ];

    return (
        <section className="home-section1 py-5">
            <Container>
                <Row>
                    <Col md={12} lg={6} className="mt-5">
                        <h2 className="dark-text-color mb-4 h2">
                            {t('blockChainEnhance')}
                        </h2>

                        <p>{t('blockChainEnhanceDesc')}</p>
                    </Col>

                    <Col
                        md={12}
                        lg={6}
                        className="mt-5 text-end text-lg-end text-md-center"
                    >
                        <Image
                            src={homeImages.homeSecTopImg}
                            alt=""
                            width={610}
                            height={318}
                            layout="intrinsic"
                            placeholder="blur"
                            loading="lazy"
                        />
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
                                            <Image
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