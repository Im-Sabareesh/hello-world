import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Image,
    Form,
} from 'react-bootstrap';

import { Paragraph } from '@components';

export default function ServiceOfferSection() {
    const { t } = useTranslation('home'),
        serviceList = [
            {
                name: 'Decentralized Finance',
                icon: '/assets/icons/service-icon1.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'Non Fungible Tokens',
                icon: '/assets/icons/service-icon2.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'Binance Smart Chain',
                icon: '/assets/icons/service-icon3.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'Website Development',
                icon: '/assets/icons/service-icon2.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'Mobile App Development',
                icon: '/assets/icons/service-icon3.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'AI Technology',
                icon: '/assets/icons/service-icon6.png',
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

                        <Paragraph>{t('nullaLoremLaborum')}</Paragraph>
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
                            <Paragraph>
                                <Image src={item.icon} alt="" />
                            </Paragraph>

                            <h3 className="h3 dark-text-color">{item.name}</h3>

                            <Paragraph> {item.describe} </Paragraph>
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
