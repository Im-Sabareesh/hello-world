import React from 'react';
import _ from 'lodash';

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Image,
} from 'react-bootstrap';

import { CardSection } from 'common-components';

export default function BlockChainSolutionSection() {

    const blockChainSolnList = [
        {
            title: 'Obortech Smart Hub',
            image: '/assets/images/solution-1.jpg',
            subtitle:
                'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            link: 'BLOCKCHAIN',
        },
        {
            title: 'GDPR Compliance',
            image: '/assets/images/solution-2.jpg',
            subtitle:
                'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            link: 'BLOCKCHAIN',
        },
        {
            title: 'Live Ledger',
            image: '/assets/images/solution-3.jpg',
            subtitle:
                'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            link: 'BLOCKCHAIN',
        },
        {
            title: 'True Title',
            image: '/assets/images/solution-4.jpg',
            subtitle:
                'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            link: 'BLOCKCHAIN',
        },
    ];

    return (
        <section className="home-section-3 py-5">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="h2 light-text-color mb-5">
                            Our BlockChain Solutions
                        </h2>
                    </Col>

                    <CardSection className="custom-card" footerCls="d-flex justify-content-between" data={blockChainSolnList}/>

                    <Col md={12} lg={8}>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src="/assets/images/solution-5.jpg"
                            />
                            <Card.Body>
                                <Card.Title>
                                    <h3 className="h3">Instasure</h3>
                                </Card.Title>
                                <Card.Text>
                                    Nulla Lorem mollit cupidatat irure.
                                    Laborum magna nulla duis ullamco cillum
                                    dolor. Voluptate exercitation
                                    incididunt. Alteration in some form, by
                                    injected humour, or randomised words
                                    which don&apos;t look even slightly
                                    believable. If you are going to use a
                                    passage of Lorem Ipsum. Nulla Lorem
                                    mollit cupidatat irure. Laborum magna
                                    nulla duis ullamco cillum dolor.
                                    Voluptate exercitation incididunt.
                                    Alteration in some form, by injected
                                    humour, or randomised words which
                                    don&apos;t look even slightly
                                    believable. If you are going to use a
                                    passage of Lorem Ipsum.
                                </Card.Text>
                            </Card.Body>

                            <Card.Footer className="d-flex justify-content-between">
                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                    className="link-primary"
                                >
                                    BLOCKCHAIN
                                </a>

                                <a
                                    href="#"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <Image
                                        src="/assets/icons/card-arrow.svg"
                                        alt=""
                                    />
                                </a>
                            </Card.Footer>
                        </Card>
                    </Col>

                    <Col md={12} className="text-center my-5">
                        <Button
                            variant="primary"
                            className="red-btn min-size-btn"
                        >
                            View More
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}