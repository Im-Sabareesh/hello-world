import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { axios } from '@libs';

import {
    // GoogleReCaptchaProvider,
    withGoogleReCaptcha,
    GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import images from '@components/images';
import { CardSection, Button, HomeFormFormik, Paragraph, MyImage } from '@components';

const InsightWithFormSection = (props) => {
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

    const handleSubmit = (data) => {
        event.preventDefault();
        event.stopPropagation();
        const target = data.target;
        let body = {};
        _.map(target, (t) => (body[t.name] = t.value));

        axios
            .post('/sent-mail', body)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => console.log(err));

        setValidated(true);
    };

    const handleVerify = (value) => {
        console.log(value);
    };

    const handleVerifyRecaptcha = async () => {
        console.log(props);
        const { executeRecaptcha } = props.googleReCaptchaProps;

        if (!executeRecaptcha) {
            console.log('Recaptcha has not been loaded');

            return;
        }

        const token = await executeRecaptcha('homepage');
        console.log('token -- > ', token);
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

                                        {/* Send Request home form in component with formik */}
                                        <HomeFormFormik />
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
};

InsightWithFormSection.propTypes = {};

InsightWithFormSection.defaultProps = {};

export default withGoogleReCaptcha(InsightWithFormSection);
