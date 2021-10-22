import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col, Image } from 'react-bootstrap';

export default function CilentTestimonialSection() {
    const { t } = useTranslation('home'),
        testimonialList = [
            {
                name: 'Chuan Allen',
                company: 'Reporter in CNN TV',
                describe:
                    "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
                image: '/assets/images/user-1.jpg',
            },
            {
                name: 'Chuan Allen',
                company: 'Reporter in CNN TV',
                describe:
                    "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
                image: '/assets/images/user-1.jpg',
            },
            {
                name: 'Chuan Allen',
                company: 'Reporter in CNN TV',
                describe:
                    "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
                image: '/assets/images/user-1.jpg',
            },
        ];

    return (
        <section className="home-section-9 py-5">
            <Container>
                <Row>
                    <Col>
                        <div className="testimonial-bg py-5">
                            <Row>
                                <Col lg={12} className="text-center">
                                    <small> {t('testimonial')} </small>

                                    <h2 className="h2 mt-4 mb-5">
                                        {t('letClients')}
                                    </h2>
                                </Col>

                                <Col className="mt-4">
                                    <Row className=" justify-content-center row-cols-1 row-cols-md-2  row-cols-lg-3">
                                        {_.map(testimonialList, (item) => (
                                            <Col
                                                key={_.uniqueId()}
                                                className=""
                                            >
                                                <div className="testimonial-cont">
                                                    <div className="testimonial-user-cont d-flex align-items-center">
                                                        <div className="user-thumb">
                                                            <Image
                                                                src={item.image}
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
                                                                {item.company}
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
    );
}
