import React from 'react';
import _ from 'lodash';

import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

import { Paragraph } from '@components';

export default function QuickStatsSection() {
    const quickStateList = [
        {
            icon: '/assets/icons/industry-awards.svg',
            counts: '150+',
            title: 'Industry Awards',
        },
        {
            icon: '/assets/icons/projects.svg',
            counts: '150+',
            title: 'Projects',
        },
        {
            icon: '/assets/icons/offices.svg',
            counts: '4',
            title: 'Offices',
        },
        {
            icon: '/assets/icons/happy-clients.svg',
            counts: '500',
            title: 'Happy Clients',
        },
        {
            icon: '/assets/icons/certified-pmp.svg',
            counts: '4',
            title: 'Certified PMP',
        },
        {
            icon: '/assets/icons/mm-lines-of-code.svg',
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
                            <Paragraph className="mb-4">
                                <Image src={item.icon} alt=" " />
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
