import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Image,
    Form,
} from 'react-bootstrap';

export default function SectionSix({data}) {

    return (
        <section className="home-section-6 py-5">
            <Container>
                <Row>
                    <Col md={12} className="text-center mb-5">
                        <h2 className="h2">Quick Stats</h2>
                    </Col>
                    {_.map(data, (item) => (
                        <Col
                            key={_.uniqueId()}
                            xs={6}
                            md={4}
                            lg={2}
                            className="counter-thumb text-center mt-3"
                        >
                            <p className="mb-4">
                                <Image src={item.icon} alt=" " />
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
    )
}