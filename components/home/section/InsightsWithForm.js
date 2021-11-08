import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';
import { Container, Row, Col } from 'react-bootstrap';

import {
    // GoogleReCaptchaProvider,
    withGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import images from '@components/images';
import { CardSection, Button, HomeFormFormik, Paragraph, MyImage } from '@components';

const InsightWithFormSection = (props) => {
    const t = i18next.t.bind(i18next),
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
