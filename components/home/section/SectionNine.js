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

export default function SectionNine({data}) {

    return(
        <section className="home-section-9 py-5">
            <Container>
                <Row>
                    <Col>
                        <div className="testimonial-bg py-5">
                            <Row>
                                <Col lg={12} className="text-center">
                                    <small> Testimonial </small>

                                    <h2 className="h2 mt-4 mb-5">
                                        Let Our Clients do the Talking
                                    </h2>
                                </Col>

                                <Col className="mt-4">
                                    <Row className=" justify-content-center row-cols-1 row-cols-md-2  row-cols-lg-3">
                                        {_.map(data, (item) => (
                                            <Col
                                                key={_.uniqueId()}
                                                className=""
                                            >
                                                <div className="testimonial-cont">
                                                    <div className="testimonial-user-cont d-flex align-items-center">
                                                        <div className="user-thumb">
                                                            <Image
                                                                src={
                                                                    item.image
                                                                }
                                                                roundedCircle
                                                                className="shadow"
                                                                alt=" "
                                                            />
                                                        </div>
                                                        <div className="user-name">
                                                            <h3 className="h3 mb-0">
                                                                {item.name}
                                                            </h3>
                                                            <span>
                                                                { item.company }
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="testimonials-txt mt-3">
                                                        {item.describe}
                                                    </div>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}