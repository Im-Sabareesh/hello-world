import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';

import { Container, Row, Col } from 'react-bootstrap';

import { CardSection, Button } from '@components';

export default function BlockChainSolutionSection() {
    const t = i18next.t.bind(i18next),
        blockChainSolnList = [
            {
                title: 'GDPR Compliance',
                image: '/assets/images/solution-1.jpg',
                subtitle:
                    'Superior data governance and privacy through blockchain. <br/> Our expert-designed blockchain solution handles vast amounts of data generated and automates the regulatory compliance requirements.  We utilize the powerful combination of  Hyperledger Fabric & Mutable Prive IPFS to conform to all GDPR fundamentals.',
                link: t('home.blockChainLink'),
            },
            {
                title: 'Obortech Smart Hub',
                image: '/assets/images/solution-2.jpg',
                subtitle:
                    'Supply Chain Management minus the guesswork. <br/> Obortech brings smart automation to the supply chain by employing emerging technologies: blockchain, AI & IOT. Smart hub exploits the capabilities of  Hyperledger Fabric blockchain framework to overcome the trust,  timing, tracking, and transparency challenges with supply chains.',
                link: t('home.blockChainLink'),
            },
            {
                title: 'Live Ledger',
                image: '/assets/images/solution-3.jpg',
                subtitle:
                    'Retail Supply Chain Reimagined with Blockchain. <br/> Retail chains are marred with inefficient processes with unreliable and untimely data inputs. Our blockchain-based retail supply chain management solution, Live Ledger allows proactive inventory management, forecasts demands, and provides automated.',
                link: t('home.blockChainLink'),
            },
            {
                title: 'True Title',
                image: '/assets/images/solution-4.jpg',
                subtitle:
                    'Fraud-proof Land Registry. <br/> Land registration traditionally relies on multiple intermediaries making the system vulnerable to discrepancies, delays and frauds. True Title endeavors to resolve the problems of forged property transactions and mortgage frauds by employing blockchain. It provides a transparent infrastructure with smart contracts ensuring non-repudiation, immutability, and traceability of land registries.',
                link: t('home.blockChainLink'),
            },
            {
                title: 'Blockchain-based EHR',
                image: '/assets/images/solution-5.jpg',
                subtitle:
                    'Interoperable, Secure and Unified patient health record. <br/> Digitization in the healthcare industry brought with it challenges of control, privacy, security, interoperability and provenance. Through Blockchain, we are completely reimagining and reengineering the storage, access, and sharing of EHR among different stakeholders.  Distributed ledger connects the fragmented systems to ensure data availability and data integrity via permissioned access, the immutability of records and governance consensus.',
                link: t('home.blockChainLink'),
            },
        ];

    return (
        <section className="home-section-3 py-5">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="h2 light-text-color mb-5">
                            {t('home.ourBlockChainSolutions')}
                        </h2>
                    </Col>

                    {_.map(blockChainSolnList, (item, index) =>
                        index === blockChainSolnList.length - 1 ? (
                            <Col md={12} lg={8} key={_.uniqueId()}>
                                <CardSection
                                    fullCard={true}
                                    footerClass="d-flex justify-content-between"
                                    item={item}
                                />
                            </Col>
                        ) : (
                            <Col md={6} lg={4} key={_.uniqueId()}>
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
