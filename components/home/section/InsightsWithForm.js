import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { Container, Row, Col, Form } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { axios } from '@libs';

import images from '@components/images';
import { CardSection, Button, Paragraph, MyImage } from '@components';

export default function InsightWithFormSection() {
    const t = i18next.t.bind(i18next),
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
    
        const form = React.useRef();
    const [firstName, setFirstName] = React.useState(false);
    const [email, setEmail] = React.useState(false);
    const [phoneNumber, setPhoneNumber] = React.useState(false);
    const [helpText, setHelpText] = React.useState(false);
    const myFunctio = (e) => {
        console.log(e);
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        init("user_G0Zd3Z5CvPjd1IOQcZXPu");
        event.preventDefault();
        event.stopPropagation();
        // if (form.checkValidity() === false) {
        // }

        let formData = {
            firstName,
            email,
            phoneNumber,
            helpText
        }

        // fetch("/api/mailer", {
        //     method: "POST",
        //     headers: {
        //         Accept: "application/json, text/plain, */*",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         name: firstName,
        //         email: email,
        //         text: helpText,
        //     }),
        // })

        axios
            .post('/api/mailer.js')
            .then((response) => {
                console.log(response);
            })
            .catch((err) => console.log(err));
        
        emailjs.send('service_p7gh4pe', 'template_1vtsqvp', formData, 'user_G0Zd3Z5CvPjd1IOQcZXPu')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        setValidated(true);
    };

    return (
        <section className="home-section-10 py-5">
            <Container>
                <Row>
                    <Col lg={12} className="text-center mb-5">
                        <h2 className="h2"> {t('home.ourLatestInsights')} </h2>
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
                            {t('viewMore')}
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
                                            {t('home.readyGetStarted')}
                                        </h2>
                                        <Paragraph>
                                            {t('home.haveAnIdea')}
                                        </Paragraph>

                                        <div className="home-contact-form mt-4">
                                            <Form
                                                noValidate
                                                validated={validated}
                                                onSubmit={handleSubmit}
                                                ref={form}
                                            >
                                                <Row className="">
                                                    <Form.Group
                                                        as={Col}
                                                        md="12"
                                                        controlId="validationCustom01"
                                                    >
                                                        <Form.Label>
                                                            {t(
                                                                'home.firstName'
                                                            )}
                                                            *
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder=""
                                                            defaultValue=""
                                                            onChange={(fn) => setFirstName(fn.target.value)}
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
                                                            {t('home.email')}*
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder=""
                                                            defaultValue=""
                                                            onChange={(em) => setEmail(em.target.value)}
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
                                                            {t('home.phone')}*
                                                        </Form.Label>
                                                        <Form.Control
                                                            required
                                                            type="text"
                                                            placeholder=""
                                                            defaultValue=""
                                                            onChange={(mob) => setPhoneNumber(mob.target.value)}
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
                                                            {t(
                                                                'home.weHelpYou'
                                                            )}
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={2}
                                                            onChange={(hText) => setHelpText(hText.target.value)}
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
                                                                                'home.agreeTrems'
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
                                                                                    'privacyPolicy'
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
                                        <MyImage
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
