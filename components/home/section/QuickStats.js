import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';

import { Paragraph } from '@components';
import images from '@components/images';

export default function QuickStatsSection() {
    const { t } = useTranslation('home'),
        quickStateList = [
            {
                icon: images.indusAwards,
                counts: '150+',
                title: t('industryAwards'),
            },
            {
                icon: images.projects,
                counts: '150+',
                title: t('projects'),
            },
            {
                icon: images.officers,
                counts: '4',
                title: t('offices'),
            },
            {
                icon: images.hpyClients,
                counts: '500',
                title: t('happyClients'),
            },
            {
                icon: images.certPmp,
                counts: '4',
                title: t('certifiedPMP'),
            },
            {
                icon: images.mmLines,
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
                            <div className="mb-4">
                                <Image
                                    src={item.icon}
                                    alt=" "
                                    height={40}
                                    width={40}
                                    loading="lazy"
                                />
                            </div>

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

QuickStatsSection.propTypes = {};

QuickStatsSection.defaultProps = {};