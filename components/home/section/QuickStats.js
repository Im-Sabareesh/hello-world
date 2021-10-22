import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';

import { Paragraph } from '@components';
import homeImages from '@components/images';

export default function QuickStatsSection() {
    const { t } = useTranslation('home'),
        quickStateList = [
            {
                icon: homeImages.indusAwards,
                counts: '150+',
                title: t('industryAwards'),
            },
            {
                icon: homeImages.projects,
                counts: '150+',
                title: t('projects'),
            },
            {
                icon: homeImages.officers,
                counts: '4',
                title: t('offices'),
            },
            {
                icon: homeImages.hpyClients,
                counts: '500',
                title: t('happyClients'),
            },
            {
                icon: homeImages.certPmp,
                counts: '4',
                title: t('certifiedPMP'),
            },
            {
                icon: homeImages.mmLines,
                counts: '100',
                title: t('mmLineCode'),
            },
        ];

    return (
        <section className="home-section-6 py-5">
            <Container>
                <Row>
                    <Col md={12} className="text-center mb-5">
                        <h2 className="h2">{t('quickStats')}</h2>
                    </Col>
                    {_.map(quickStateList, (item) => (
                        <Col
                            key={_.uniqueId()}
                            xs={6}
                            md={4}
                            lg={2}
                            className="counter-thumb text-center mt-3"
                        >
                            <Paragraph className="mb-4">
                                <Image
                                    src={item.icon}
                                    alt=" "
                                    height={40}
                                    width={40}
                                    loading="lazy"
                                />
                            </Paragraph>

                            <Paragraph className="mb-1">
                                <span> {item.counts} </span>
                            </Paragraph>

                            <Paragraph>
                                <strong> {item.title} </strong>
                            </Paragraph>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
