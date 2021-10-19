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

import { CardSection } from 'common-components';

export default function SectionEight({data}) {

    return (
        <section className="home-section-8 py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} className="text-center mt-5">
                        <h2 className="h2 my-4">
                            Explore Projects Delivered by ChainCode
                        </h2>
                    </Col>
                    <CardSection className="custom-card custom-card2 text-center" btnClass="red-btn min-size-btn" data={data} />
                </Row>
            </Container>
        </section>
    )
}