import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import homeImages from '@components/images';

import { CardSection } from 'common-components';

export default function InsightWithFormSection() {
    const router = useRouter(),
        insightsList = [
            {
                title: 'Financial Inclusion, Advanced by Digital Currencies',
                subtitle: 'Jane Cooper | 14 March 2021',
                image: '/assets/images/insight-img1.jpg',
            },
            {
                title: 'Financial Inclusion, Advanced by Digital Currencies',
                subtitle: 'Jane Cooper | 14 March 2021',
                image: '/assets/images/insight-img2.jpg',
            },
            {
                title: 'Financial Inclusion, Advanced by Digital Currencies',
                subtitle: 'Jane Cooper | 14 March 2021',
                image: '/assets/images/insight-img3.jpg',
            },
        ];
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <section className="home-section-10 py-5">
            <Container>
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="h2"> Our Latest Insights </h2>
                    </Col>

                    {_.map(insightsList, (item) => (
                        <Col md={6} lg={4} key={_.uniqueId()}>
                            <CardSection
                                className="insight-card mt-3"
                                fullCard={true}
                                item={item}
                            />
                        </Col>
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

            <Container>
                <div className="home-section-11">
                    <Row>
                        <Col lg={{ span: 10, offset: 1 }}>
                            <div className="home-contact-card">
                                <Row>
                                    <Col md={12} lg={6}>
                                        <h2 className="h2 mb-2">
                                            Ready to Get Started?
                                        </h2>
                                        <p>Have an idea? Let’s discuss it!</p>

                                        <div className="home-contact-form mt-4">
                                            <Form
                                                noValidate
                                                validated={validated}
                                                onSubmit={handleSubmit}
                                            >
                                                <Row className="">
                                                    <Form.Group
                                                        as={Col}
                                                        md="12"
                                                        controlId="validationCustom01"
                                                    >
                                                        <Form.Label>
                                                            FIRST NAME*
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder=""
                                                            defaultValue=""
                                                        />
                                                        <Form.Control.Feedback>
                                                            Looks good!
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group
                                                        as={Col}
                                                        md="6"
                                                        controlId="validationCustom02"
                                                    >
                                                        <Form.Label>
                                                            EMAIL*
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder=""
                                                            defaultValue=""
                                                        />
                                                        <Form.Control.Feedback>
                                                            Looks good!
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                    <Form.Group
                                                        as={Col}
                                                        md="6"
                                                        controlId="validationCustomUsername"
                                                    >
                                                        <Form.Label>
                                                            PHONE*
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder=""
                                                            defaultValue=""
                                                        />
                                                    </Form.Group>
                                                </Row>
                                                <Row className="">
                                                    <Form.Group
                                                        as={Col}
                                                        md="12"
                                                        controlId="validationCustom03"
                                                    >
                                                        <Form.Label>
                                                            HOW CAN WE HELP YOU?
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={2}
                                                        />
                                                        <Form.Control.Feedback type="invalid">
                                                            Please provide a
                                                            valid city.
                                                        </Form.Control.Feedback>
                                                    </Form.Group>
                                                </Row>

                                                <Row className="mt-3">
                                                    <Form.Group
                                                        as={Col}
                                                        md="7"
                                                        className="mt-2"
                                                    >
                                                        {['checkbox'].map(
                                                            (type) => (
                                                                <div
                                                                    key={type}
                                                                    className="mb-3"
                                                                >
                                                                    <Form.Check
                                                                        type={
                                                                            type
                                                                        }
                                                                        id={`check-api-${type}`}
                                                                        className="d-flex"
                                                                    >
                                                                        <Form.Check.Input
                                                                            type={
                                                                                type
                                                                            }
                                                                            className="flex-shrink-0 mr-3"
                                                                        />
                                                                        <Form.Check.Label>
                                                                            *As
                                                                            a
                                                                            result
                                                                            of
                                                                            submitting
                                                                            completed
                                                                            “Contact
                                                                            Us”
                                                                            form,
                                                                            your
                                                                            personal
                                                                            data
                                                                            will
                                                                            be
                                                                            processed
                                                                            by
                                                                            ChainCode.
                                                                            We
                                                                            are
                                                                            committed
                                                                            to
                                                                            respecting
                                                                            your
                                                                            privacy.
                                                                            Read
                                                                            our{' '}
                                                                            <a
                                                                                href="#"
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    e.preventDefault()
                                                                                }
                                                                            >
                                                                                Privacy
                                                                                Policy
                                                                            </a>
                                                                            .
                                                                        </Form.Check.Label>
                                                                    </Form.Check>
                                                                </div>
                                                            )
                                                        )}
                                                    </Form.Group>

                                                    <Form.Group
                                                        as={Col}
                                                        md="5"
                                                        controlId="validationCustomUsername"
                                                    >
                                                        <Button
                                                            type="submit"
                                                            className="red-btn btn-lg"
                                                        >
                                                            Send Request
                                                        </Button>
                                                    </Form.Group>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Col>

                                    <Col
                                        md={12}
                                        lg={6}
                                        className="contact-right-form"
                                    >
                                        <Image
                                            src={homeImages.contactForm}
                                            alt=" "
                                            height={488}
                                            width={486}
                                            loading="lazy"
                                            placeholder="blur"
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}
