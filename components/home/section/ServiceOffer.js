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
            name: t('hdfDevelopment'),
            icon: images.deCenFin,
            describe:  t('home.serviceOfferList.hdfDevelopmentDescribe')
        },
        {
            name:  t('home.serviceOfferList.nonFungibleTokens'),
            icon: images.nonFunToken,
            describe: t('home.serviceOfferList.nonFungibleTokensDescribe')
        },
        {
            name: t('home.serviceOfferList.devOpsBlockchain'),
            icon: images.smartChain,
            describe: t('home.serviceOfferList.devOpsBlockchainDescribe')
        },
        {
            name: t('blockChainConsulting'),
            icon: images.webDev,
            describe: t('home.serviceOfferList.blockChainDescribe')
        },
        {
            name: t('home.serviceOfferList.binanceSmartChain'),
            icon: images.mobDev,
            describe: t('home.serviceOfferList.SmartChainDescribe')
        },
        {
            name: t('home.serviceOfferList.dAppDevelopment'),
            icon: images.aiTech,
            describe: t('home.serviceOfferList.dAppDevelopmentDescribe')
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
                </Row>
            </Container>
        </section>
    );
}

ServiceOfferSection.propTypes = {};

ServiceOfferSection.defaultProps = {};
