import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';
import { Container, Row, Col } from 'react-bootstrap';

import images from '@components/images';
import { MyImage } from '@components';

export default function CilentTestimonialSection() {
    const t = i18next.t.bind(i18next);
    const testimonialList = [
        {
            name: 'Chuan Allen',
            company: 'Reporter in CNN TV',
            describe:
                "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
            image: images.user1,
        },
        {
            name: 'Chuan Allen',
            company: 'Reporter in CNN TV',
            describe:
                "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
            image: images.user1,
        },
        {
            name: 'Chuan Allen',
            company: 'Reporter in CNN TV',
            describe:
                "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
            image: images.user1,
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
                                    <small> {t('home.testimonial')} </small>

                                    <h2 className="h2 mt-4 mb-5">
                                        {t('home.letClients')}
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
                                                            <MyImage
                                                                src={item.image}
                                                                className="shadow"
                                                                alt=" "
                                                                placeholder="blur"
                                                                height={70}
                                                                width={70}
                                                                loading="lazy"
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

CilentTestimonialSection.propTypes = {};

CilentTestimonialSection.defaultProps = {};
