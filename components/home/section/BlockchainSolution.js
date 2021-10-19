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
        {
            title: 'Instasure',
            image: '/assets/images/solution-5.jpg',
            subtitle: 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt. Alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt. Alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum.',
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

                    {_.map(blockChainSolnList, (item, index) => (
                        index === (blockChainSolnList.length -1) ?
                        (
                            <Col md={12} lg={8}>
                                <CardSection fullCard={true} footerClass="d-flex justify-content-between" item={item}/>
                            </Col> 
                        )
                        : (
                        <Col md={6} lg={4} key={_.uniqueId()}>
                            <CardSection fullCard={true} footerClass="justify-content-between" item={item}/>
                        </Col>
                        )
                    ))}

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