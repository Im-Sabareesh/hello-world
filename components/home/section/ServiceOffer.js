import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import homeImages from '@components/images';

export default function ServiceOfferSection() {
    const { t } = useTranslation('home');
    const serviceList = [
        {
            name: 'Decentraized Finance',
            icon: homeImages.deCenFin,
            describe:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            name: 'Non Fungible Tokens',
            icon: homeImages.nonFunToken,
            describe:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            name: 'Binance Smart Chain',
            icon: homeImages.smartChain,
            describe:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            name: 'Website Development',
            icon: homeImages.webDev,
            describe:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            name: 'Mobile App Development',
            icon: homeImages.mobDev,
            describe:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
        {
            name: 'AI Technology',
            icon: homeImages.aiTech,
            describe:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
        },
    ];

    return (
        <section className="home-section-2 py-5">
            <Container>
                <Row>
                    <Col md={8} className="mx-auto text-center mb-2">
                        <h2 className="h2 dark-text-color mb-4">
                            {t('servicesOffer')}
                        </h2>

                        <p>{t('nullaLoremLaborum')}</p>
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
                            <p>
                                <Image
                                    src={item.icon}
                                    alt=""
                                    height={65}
                                    width={85}
                                    placeholder="blur"
                                    loading="lazy"
                                />
                            </p>

                            <h3 className="h3 dark-text-color">{item.name}</h3>

                            <p> {item.describe} </p>
                        </Col>
                    ))}

                    <Col md={12} className="text-center mt-5">
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="h3 dark-text-color link-primary"
                        >
                            {t('lotMoreYou')}
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
