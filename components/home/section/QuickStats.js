import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import homeImages from '@components/images';

export default function QuickStatsSection() {
    const quickStateList = [
        {
            icon: homeImages.indusAwards,
            counts: '150+',
            title: 'Industry Awards',
        },
        {
            icon: homeImages.projects,
            counts: '150+',
            title: 'Projects',
        },
        {
            icon: homeImages.officers,
            counts: '4',
            title: 'Offices',
        },
        {
            icon: homeImages.hpyClients,
            counts: '500',
            title: 'Happy Clients',
        },
        {
            icon: homeImages.certPmp,
            counts: '4',
            title: 'Certified PMP',
        },
        {
            icon: homeImages.mmLines,
            counts: '100',
            title: 'MM Lines of Code',
        },
    ];

    return (
        <section className="home-section-6 py-5">
            <Container>
                <Row>
                    <Col md={12} className="text-center mb-5">
                        <h2 className="h2">Quick Stats</h2>
                    </Col>
                    {_.map(quickStateList, (item) => (
                        <Col
                            key={_.uniqueId()}
                            xs={6}
                            md={4}
                            lg={2}
                            className="counter-thumb text-center mt-3"
                        >
                            <p className="mb-4">
                                <Image
                                    src={item.icon}
                                    alt=" "
                                    height={40}
                                    width={40}
                                    loading="lazy"
                                />
                            </p>

                            <p className="mb-1">
                                <span> {item.counts} </span>
                            </p>

                            <p>
                                <strong> {item.title} </strong>
                            </p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
