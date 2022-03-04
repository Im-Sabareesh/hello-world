import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';

import { Container, Row, Col } from 'react-bootstrap';

import { CardSection, Button } from '@components';

export default function BlockChainSolutionSection() {
    const t = i18next.t.bind(i18next),
        blockChainSolnList = [
            {
                title: t('home.obortechHub'),
                image: '/assets/images/home-solution-1.jpg',
                subtitle: t('home.obortechHubDesc'),
                route: 'https://www.obortech.io/'
                // link: t('home.blockChainLink'),
            },
            {
                title: t('home.gdprCompliance'),
                image: '/assets/images/home-solution-2.jpg',
                subtitle: t('home.gdprComplianceDesc'),
                // link: t('home.blockChainLink'),
            },
            {
                title: t('liveLedger'),
                image: '/assets/images/home-solution-3.jpg',
                subtitle: t('home.liveLedgerDesc'),
                // link: t('home.blockChainLink'),
            },
            {
                title: t('home.landRecordBlockChain'),
                image: '/assets/images/home-solution-4.jpg',
                subtitle: t('home.trueTitleDesc'),
                // link: t('home.blockChainLink'),
            },
            {
                title: t('home.ehrBlockchain'),
                image: '/assets/images/home-solution-5.jpg',
                subtitle: t('home.blockChainEHRdesc'),
                // link: t('home.blockChainLink'),
            },
        ];

    return (
        <section className="home-section-3 home-section3-mobile mobile-section-padding">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="h2 light-text-color mb-5 home-section-3-heading">
                            {t('home.ourBlockChainSolutions')}
                        </h2>
                    </Col>

                    {_.map(blockChainSolnList, (item, index) =>
                        index === blockChainSolnList.length - 1 ? (
                            <Col md={12} lg={8} key={index} id={(item.title.replace(/ /g,'')).toLowerCase()}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.route) {
                                        window.open(item.route, '_blank');
                                    }
                                }}>
                                <CardSection
                                    fullCard={true}
                                    footerClass="d-flex justify-content-between"
                                    item={item}
                                />
                            </Col>
                        ) : (
                            <Col md={6} lg={4} key={index} id={item.title.replace(/ /g,'').toLowerCase()}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.route) {
                                        window.open(item.route, '_blank');
                                    }
                                }}>
                                <CardSection
                                    fullCard={true}
                                    footerClass="d-flex justify-content-between"
                                    item={item}
                                />
                            </Col>
                        )
                    )}

                    {/* <Col md={12} className="text-center my-5">
                        <Button btnVarient="red-btn" className="min-size-btn">
                            {t('viewMore')}
                        </Button>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
}

BlockChainSolutionSection.propTypes = {};

BlockChainSolutionSection.defaultProps = {};
