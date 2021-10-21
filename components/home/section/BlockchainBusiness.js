import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col, Image } from 'react-bootstrap';

export default function BlockchainBusinessSection() {
    const { t } = useTranslation(['home', 'common']),
        blockChainUsageList = [
            {
                name: t('enhancedSecurity'),
                icon: '/assets/icons/enhanced-security.svg',
            },
            {
                name: t('greaterTransparency'),
                icon: '/assets/icons/greater-transparancy.svg',
            },
            {
                name: t('instantTraceability'),
                icon: '/assets/icons/instant-tracibility.svg',
            },
            {
                name: t('increasedEfficiency'),
                icon: '/assets/icons/increased-efficiency.svg',
            },
            {
                name: t('decentralizedGovernance'),
                icon: '/assets/icons/decentralized-governance.svg',
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
                            src="/assets/images/home-section1-img.png"
                            alt=""
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
                                        <p>
                                            <Image src={item.icon} alt="" />
                                        </p>
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
