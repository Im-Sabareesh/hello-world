import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Container, Row, Col, Form } from 'react-bootstrap';

import images from '@components/images';
import { CardSection, Button, Paragraph } from '@components';

export default function InsightWithFormSection() {
    const { t } = useTranslation(['home', 'common']),
        router = useRouter(),
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
                        <h2 className="h2"> {t('ourLatestInsights')} </h2>
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
                        <Button btnVarient="red-btn" className="min-size-btn">
                            {t('viewMore', { ns: 'common' })}
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
                                            {t('readyGetStarted')}
                                        </h2>
                                        <Paragraph>{t('haveAnIdea')}</Paragraph>

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
                                                            {t('firstName')}*
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
                                                            {t('email')}*
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
                                                            {t('phone')}*
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
                                                            {t('weHelpYou')}
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
                                                                    key={_.uniqueId()}
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
                                                                            *
                                                                            {t(
                                                                                'agreeTrems'
                                                                            )}
                                                                            <a
                                                                                href="#"
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    e.preventDefault()
                                                                                }
                                                                            >
                                                                                {t(
                                                                                    'privacyPolicy',
                                                                                    {
                                                                                        ns: 'common',
                                                                                    }
                                                                                )}
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
                                                            btnVarient="red-btn"
                                                            type="submit"
                                                            className="btn-lg"
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
                                            src={images.contactForm}
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

InsightWithFormSection.propTypes = {};

InsightWithFormSection.defaultProps = {};