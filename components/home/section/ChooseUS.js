import React from 'react';
import _ from 'lodash';

import { Container, Row, Col, Image } from 'react-bootstrap';

import { Paragraph } from '@components';

export default function ChooseUsSection({ data }) {
    const chooseUSList = [
        {
            icon: '/assets/icons/whychoose-icon1.svg',
            name: 'Focus on Innovation',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: '/assets/icons/whychoose-icon2.svg',
            name: 'True Partners',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: '/assets/icons/whychoose-icon3.svg',
            name: 'DevOps',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: '/assets/icons/whychoose-icon4.svg',
            name: 'Dedicated Teams',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
    ];

    return (
        <section className="home-section-5 py-5">
            <Container>
                <Row>
                    <Col md={{ span: 12, order: 0 }} lg={6}>
                        <Image
                            src="/assets/images/blockchain-business.png"
                            alt=" "
                        />
                    </Col>

                    <Col md={12} lg={6}>
                        <h2 className="h2 mb-4"> Why Choose Us </h2>

                        <Paragraph>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            &apos;Content here, content here&apos;, making it
                            look like readable English.
                        </Paragraph>

                        <Paragraph>
                            Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model
                            text, and a search for &apos;lorem ipsum&apos; will
                            uncover many web sites still in their infancy.
                        </Paragraph>
                    </Col>
                    {_.map(chooseUSList, (item) => (
                        <Col key={_.uniqueId()} md={6} className="mt-4">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <Image src={item.icon} alt=" " />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h3 className="h3 mb-3">{item.name}</h3>
                                    <Paragraph>{item.describe}</Paragraph>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
