import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';

import { Container, Row, Col } from 'react-bootstrap';

import { Paragraph, MyImage } from '@components';
import images from '@components/images';

export default function QuickStatsSection() {
    const t = i18next.t.bind(i18next),
        quickStateList = [
            {
                icon: images.indusAwards,
                counts: '150+',
                title: t('home.industryAwards'),
            },
            {
                icon: images.projects,
                counts: '150+',
                title: t('home.projects'),
            },
            {
                icon: images.officers,
                counts: '4',
                title: t('home.offices'),
            },
            {
                icon: images.hpyClients,
                counts: '500',
                title: t('home.happyClients'),
            },
            {
                icon: images.certPmp,
                counts: '4',
                title: t('home.certifiedPMP'),
            },
            {
                icon: images.mmLines,
                counts: '100',
                title: t('home.mmLineCode'),
            },
        ];

    return (
        <section className="home-section-6 py-5">
            <Container>
                <Row>
                    <Col md={12} className="text-center mb-5">
                        <h2 className="h2">{t('home.quickStats')}</h2>
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
                                <MyImage
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
