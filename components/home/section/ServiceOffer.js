import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';
import { Container, Row, Col } from 'react-bootstrap';

import images from '@components/images';
import { Paragraph, MyImage } from '@components';

export default function ServiceOfferSection() {
    const t = i18next.t.bind(i18next);
    const serviceList = [
        {
            name: 'Hyperledger Fabric Development',
            icon: images.deCenFin,
            describe:
                'The modular architecture and plug-in components of Hyperledger Fabric allow stable, scalable, reusable and robust applications across industries-  supply chain, fintech, healthcare or governance.  Our track record of launching multiple successful HFD products world-over makes us one of the top in the field of Hyperledger Fabric Development with a strong team of certified professional developers.',
        },
        {
            name: 'Non Fungible Tokens',
            icon: images.nonFunToken,
            describe:
                'Every artist, celebrity and brand are hurrying to jump on the NFT bandwagon. Tokenize your artwork, video file, or any other digital asset for good and trade these tokenized assets via a custom marketplace. Our blockchain engineers and domain experts work together to offer diligently-crafted decentralized non-fungible token development solutions to suit your business needs- tokenize, trade and transcend!',
        },
        {
            name: 'DevOps Blockchain',
            icon: images.smartChain,
            describe:
                'Enterprise DevOps Blockchain can be implemented using single‑chain or multi-chain blockchains as an underlying infrastructure to solve complex business problems. The flexibility of the EDOB in supporting different delivery models allows organizations to fast-track the transition from traditional to DevOps delivery while maintaining auditable and transparent records. As front-runners in the blockchain space, count on us as your tech partners.',
        },
        {
            name: 'Blockchain Consulting',
            icon: images.webDev,
            describe:
                'Powered by the world’s most comprehensive collection of blockchain technology research, data, and tools, Chaincode Consulting with its unmatched expertise in De-Fi and HFD helps businesses achieve their goals- faster and better. Test out a blockchain POC or go full in, we help create a roadmap to your success right from use case analysis to development and launch.',
        },
        {
            name: 'Binance Smart Chain',
            icon: images.mobDev,
            describe:
                'Empower your users with BSC dual-chain architecture to build their decentralized apps and digital assets on one blockchain and take advantage of the fast trading to exchange on the other. Binance Smart Chain offers one of the fastest blockchain transaction times and lowest fee structures, making it an ideal option for building decentralized applications.',
        },
        {
            name: 'DApp Development',
            icon: images.aiTech,
            describe:
                'With proven extensive experience and credible expertise, we design and build secure, trustless, stable and rapidly scalable dApps. We harness different blockchains like Ethereum, EOS, BSC, Polkadot, and more to build customized dApps that align with your business needs and enable you to penetrate the market- be it gaming, collectibles, finance or even governance.',
        },
    ];

    return (
        <section className="home-section-2 py-5">
            <Container>
                <Row>
                    <Col md={8} className="mx-auto text-center mb-2">
                        <h2 className="h2 dark-text-color mb-4">
                            {t('home.servicesOffer')}
                        </h2>

                        <Paragraph>{t('home.servicesOfferDesc')}</Paragraph>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row>
                    {_.map(serviceList, (item) => (
                        <Col
                            key={_.uniqueId()}
                            md={6}
                            lg={4}
                            className="service-thumb text-center mt-5"
                        >
                            {/* <p> */}
                            <MyImage
                                src={item.icon}
                                alt=""
                                height={122}
                                width={150}
                                placeholder="blur"
                                loading="lazy"
                                objectFit="contain"
                            />
                            {/* </p> */}

                            <h3 className="h3 dark-text-color pt-2">
                                {item.name}
                            </h3>

                            <Paragraph> {item.describe} </Paragraph>
                        </Col>
                    ))}

                    <Col md={12} className="text-center mt-5">
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="h3 dark-text-color link-primary"
                        >
                            {t('home.lotMoreYou')}
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

ServiceOfferSection.propTypes = {};

ServiceOfferSection.defaultProps = {};
