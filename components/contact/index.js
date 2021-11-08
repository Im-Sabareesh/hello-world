import React from 'react';
import _ from 'lodash';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router';
import i18next from 'i18next';

import { ContactFormFormik, H1, MyImage, Paragraph } from '@components';
import images from '@components/images';

const ContactComponent = (props) => {
    const router = useRouter(),
    t = i18next.t.bind(i18next);
    const branchList = [
        {
            location: 'India',
            address: {
                building: 'Sco 362, Top Floor',
                town: '',
                city: 'Sector 44D, Chandigarh',
            },
            phone: '+91-9646579412',
            mailID: 'info@chaincodeconsulting.com',
        },
        {
            location: 'USA',
            address: {
                building: '1495 Lake Ave',
                town: '',
                city: 'Rochester, New York – 14615',
            },
            phone: '+1-585-633-7642',
            mailID: 'info@chaincodeconsulting.com',
        },
        {
            location: 'Canada',
            address: {
                building: '226 Acadie Avenue',
                town: 'Dieppe',
                city: 'E1A 1G5 New Brunswick',
            },
            phone: '+1-506-500-5950',
            mailID: 'info@chaincodeconsulting.com',
        },
    ];

    return (
        <>
            {/*--------------- Contactus banner start ---------- */}

            <section className="contactus-banner">
                <Container>
                    <div className="contactus-inner-banner">
                        <Row>
                            <Col>
                                <div className="light-text-color text-center w-50 mx-auto">
                                    <H1 className="light-text-color">
                                        {t('contactUs')}
                                    </H1>
                                    <Paragraph>
                                        lets start something great togeather.
                                        Connect with one of the experts from the
                                        team today !
                                    </Paragraph>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

            {/*--------------- Contactus banner end ---------- */}

            {/*--------------- Contactus container start---------- */}

            <div className="contactus-container mt-5 pt-5">
                <section className="contactform py-5">
                    <Container>
                        <Row>
                            <Col md={6} lg={6}>
                                <Paragraph className="contact-img mb-5">
                                    <MyImage
                                        src={images.contactUs}
                                        alt=" "
                                        width={636}
                                        height={527}
                                        layout="intrinsic"
                                        loading="lazy"
                                    />
                                </Paragraph>

                                <div className="contact-small-section pt-4">
                                    <h3 className="h3">About Us</h3>
                                    <Paragraph className="mb-0">
                                        Chaincode consulting is an Enterprise
                                        Blockchain development and consulting
                                        firm. We are a team of highly
                                        experienced developers.
                                        <a
                                            href="#"
                                            onClick={() =>
                                                router.push(
                                                    `/${props.language}/about`
                                                )
                                            }
                                        >
                                            {t('readMore')}
                                        </a>
                                    </Paragraph>
                                </div>

                                <div className="contact-small-section contact-small-section-contact pt-4">
                                    <h3 className="h3">{t('contactUs')}</h3>
                                    <span className="d-flex">
                                        <Paragraph className="contact-icon">
                                            <MyImage
                                                src={images.contactPhone}
                                                alt=" "
                                                className=""
                                                height={20}
                                                width={20}
                                                layout="intrinsic"
                                                objectFit="unset"
                                            />
                                        </Paragraph>
                                        <Paragraph>
                                            <a href="tel:+91-9646579412">
                                                +91-9646579412
                                            </a>
                                        </Paragraph>
                                    </span>
                                    <span className="d-flex">
                                        <Paragraph className="contact-icon">
                                            <MyImage
                                                src={images.contactEmail}
                                                alt=" "
                                                className=""
                                                height={20}
                                                width={20}
                                                layout="intrinsic"
                                            />
                                        </Paragraph>
                                        <Paragraph>
                                            <a href="mailto:info@chaincodeconsulting.com">
                                                info@chaincodeconsulting.com
                                            </a>
                                        </Paragraph>
                                    </span>
                                </div>

                                <div className="contact-small-section pt-4">
                                    <h3 className="h3">Follow Us </h3>
                                    <Paragraph className="contactus-sociallinks">
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <MyImage
                                                src={images.fbPng}
                                                alt=""
                                                height={27}
                                                width={15}
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <MyImage
                                                src={images.instaPgn}
                                                alt=""
                                                height={27}
                                                width={28}
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <MyImage
                                                src={images.twitterPng}
                                                alt=""
                                                height={25}
                                                width={30}
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <MyImage
                                                src={images.uTubePng}
                                                alt=""
                                                height={25}
                                                width={34}
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <MyImage
                                                src={images.wpPng}
                                                alt=""
                                                height={64}
                                                width={64}
                                            />
                                        </a>
                                    </Paragraph>
                                </div>
                            </Col>

                            <Col md={6} lg={6}>
                                <h2 className="h2"> Get In Touch </h2>

                                <Paragraph className="getintouch-txt mb-1">
                                    To request a quote, contact us directly or
                                    fill out the form and we will get back to
                                    you within 24 hours. We will keep your
                                    information confidential.
                                </Paragraph>
                                
                                {/* Contact Us form in seperate component with formik */}
                                <ContactFormFormik />
                            </Col>
                        </Row>
                    </Container>
                </section>

                <section className="ouroffice-container py-5">
                    <Container fluid>
                        <Row>
                            <Col className="text-center">
                                <h2 className="h2 mb-5"> Our Offices </h2>
                            </Col>
                            <Col md={12} className=" ouroffice-banner pe-0">
                                <MyImage
                                    src={images.contactUsJpg}
                                    alt=""
                                    className="office-banner"
                                    width={1754}
                                    height={544}
                                    layout="responsive"
                                    placeholder="blur"
                                    loading="lazy"
                                />
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            {_.map(branchList, (item) => (
                                <Col
                                    md={4}
                                    lg={4}
                                    key={_.uniqueId()}
                                    className="d-flex mt-5"
                                >
                                    <div className=" mt-1 me-3 flex-shrink-0">
                                        <MyImage
                                            src={images.mappin}
                                            alt=" "
                                            height={29}
                                            width={22}
                                        />
                                    </div>
                                    <div className="address-cont ml-2 flex-shrink-0">
                                        <h2 className="h2 mb-3">
                                            {item.location}{' '}
                                        </h2>
                                        <Paragraph className="address-txt">
                                            {item.address.building}
                                            {item.address.town !== '' && (
                                                <>
                                                    <br /> {item.address.town}
                                                </>
                                            )}
                                            <br />
                                            {item.address.city}
                                        </Paragraph>
                                        <div className="contact-small-section contact-small-section-contact pt-3">
                                            <span className="d-flex">
                                                <Paragraph className="contact-icon">
                                                    <MyImage
                                                        src={
                                                            images.contactPhone
                                                        }
                                                        alt=" "
                                                        className=""
                                                        height={20}
                                                        width={20}
                                                        layout="intrinsic"
                                                        objectFit="unset"
                                                    />
                                                </Paragraph>
                                                <Paragraph>
                                                    <a href="tel:+91-9646579412">
                                                        {item.phone}
                                                    </a>
                                                </Paragraph>
                                            </span>
                                            <span className="d-flex">
                                                <Paragraph className="contact-icon">
                                                    <MyImage
                                                        src={
                                                            images.contactEmail
                                                        }
                                                        alt=" "
                                                        className=""
                                                        height={20}
                                                        width={20}
                                                    />
                                                </Paragraph>
                                                <Paragraph>
                                                    <a href="mailto:info@chaincodeconsulting.com">
                                                        {item.mailID}
                                                    </a>
                                                </Paragraph>
                                            </span>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </div>

            {/*--------------- Contactus container end---------- */}
        </>
    );
};

export default ContactComponent;

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};
