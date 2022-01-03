import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { Button, H1, Paragraph, MyImage } from '@components';
import images from '@components/images';

const AboutUs = (props) => {
    const router = useRouter(),
        t = i18next.t.bind(i18next),
        teamMemberList = [
            {
                name: 'Amitabh Bacchan',
                designation: 'Founder',
                image: '/assets/images/member_01.jpg',
            },
            {
                name: 'Amitabh Bacchan',
                designation: 'Founder',
                image: '/assets/images/member_02.jpg',
            },
            {
                name: 'Amitabh Bacchan',
                designation: 'Founder',
                image: '/assets/images/member_03.jpg',
            },
            {
                name: 'Amitabh Bacchan',
                designation: 'Founder',
                image: '/assets/images/member_04.jpg',
            },
            {
                name: 'Amitabh Bacchan',
                designation: 'Founder',
                image: '/assets/images/member_05.jpg',
            },
            {
                name: 'Amitabh Bacchan',
                designation: 'Founder',
                image: '/assets/images/member_06.jpg',
            },
            {
                name: 'Amitabh Bacchan',
                designation: 'Founder',
                image: '/assets/images/member_07.jpg',
            },
            {
                name: 'Amitabh Bacchan',
                designation: 'Founder',
                image: '/assets/images/member_08.jpg',
            },
        ],
        howWeDoList = [
            'Assess:',
            'We understand your needs, challenges and pain points, and then determine whether blockchain can add value and set goals.',
            'Plan:',
            'We collaborate with you and your team to create a comprehensive plan for meeting those goals.',
            'Implement:',
            'Next, we turn it into reality. Moving from design to development, we use agile methodology to implement the solution.',
            'Maintain and Scale:',
            'After project delivery, we help onboard, maintain and scale it further.'
        ];

    return (
        <>
            {/*--------------- about us banner section start---------- */}
            <section className="about-us-banner">
                <Container>
                    <Row>
                        <Col>
                            <div className="light-text-color text-center w-50 mx-auto">
                                <H1 className="light-text-color">{t('aboutUs.title')}</H1>
                                <Paragraph>
                                    {t('aboutUs.headerVisions')}
                                </Paragraph>
                                <Paragraph>
                                    {t('aboutUs.headerVisions1')}
                                </Paragraph>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about us banner section end ---------- */}

            {/*--------------- about section1 section start ---------- */}

            <section className="about-section1 pb-xl-5 pb-md-4 pb-2">
                <Container fluid className="pb-xl-5 pb-2">
                    <Row className="pb-xl-5 pb-2">
                        <Col className="pb-xl-5 pb-2 align-img">
                            <MyImage
                                src={images.aboutUs}
                                alt=" "
                                className="mx-auto about-section1-img"
                                rounded="true"
                                width={1385}
                                height={800}
                                layout="responsive"
                                objectPosition="center"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section1 section end ---------- */}

            {/*--------------- about section2 section start ---------- */}

            <section className="about-section2 py-xl-5 py-md-4 py-2">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <H1>{t('aboutUs.wtsOurStory')}</H1>
                        </Col>
                        <Col lg={7}>
                            <Paragraph>
                                {t('aboutUs.ourStory1')}
                            </Paragraph>

                            <Paragraph>
                                {t('aboutUs.ourStory2Since')}<b> 2019</b>, {t('aboutUs.ourStory2Come')}
                            </Paragraph>

                            <Paragraph>
                                {t('aboutUs.ourStory3')}
                            </Paragraph>

                            <Paragraph>
                                {t('aboutUs.ourStory4')}
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row className="pt-xl-5 pt-3 mt-md-4">
                        <Col md={4} sm={6} xs={12}>
                            <div className="our-story-block">
                                <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
                                    <span>01</span>
                                </div>
                                <div className="our-story-block-content">
                                    <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
                                    <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">
                                        {t('aboutUs.mission')}
                                    </h3>
                                    <Paragraph>
                                        {t('aboutUs.missionPara')}
                                    </Paragraph>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div className="our-story-block">
                                <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
                                    <span>02</span>
                                </div>
                                <div className="our-story-block-content">
                                    <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
                                    <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">
                                        {t('aboutUs.vision')}
                                    </h3>
                                    <Paragraph>
                                        {t('aboutUs.visionPara')}
                                    </Paragraph>
                                </div>
                            </div>
                        </Col>
                        <Col md={4} sm={6} xs={12}>
                            <div className="our-story-block">
                                <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
                                    <span>03</span>
                                </div>
                                <div className="our-story-block-content">
                                    <div className="line-animated rounded position-relative float-start me-xl-4 me-2"></div>
                                    <h3 className="h3 purple-gradient-text-color text-uppercase mb-lg-4 mb-2">
                                        {t('aboutUs.whatWeDo')}
                                    </h3>
                                    <Paragraph>
                                        {t('aboutUs.whatWeDoPara')}
                                    </Paragraph>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section2 section end ---------- */}

            {/*--------------- about section3 section start ---------- */}

            <section className="about-section3 bg-gradient-secondary light-text-color py-xl-5 py-md-4 py-2">
                <Container>
                    <Row className="px-4 py-4">
                        <Col xl={4} lg={5}>
                            <div className="our-story-block">
                                <div className="line-animated rounded position-relative float-start me-xl-4 me-2 opacity-50"></div>
                                <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center mb-md-4 mb-3">
                                    <span>04</span>
                                </div>
                                <h3 className="h2 light-text-color">
                                    {t('aboutUs.howWeDoIt')}
                                </h3>
                            </div>
                        </Col>
                        <Col xl={8} lg={7}>
                            <h3 className="h3 mb-3 lh-base fw-normal light-text-color">
                                {t('aboutUs.howWeDoItPara')}
                            </h3>

                            {/* {_.map(howWeDoList, (item, index) => (
                                <h3 className="h3 lh-base fw-normal light-text-color" key={index}>
                                    {item}
                                </h3>
                            ))} */}
                             <div className="h3 lh-base fw-normal light-text-color">
                                 <p><b className="d-block mb-2">Assess:</b>
                                 We understand your needs, challenges and pain points, and then determine whether blockchain can add value and set goals.
                                 </p>
                                 <p><b className="d-block mb-2">Plan:</b>
                                 We collaborate with you and your team to create a comprehensive plan for meeting those goals.
                                 </p>
                                 <p><b className="d-block mb-2">Implement:</b>
                                 Next, we turn it into reality. Moving from design to development, we use agile methodology to implement the solution.
                                 </p>
                                 <p><b className="d-block mb-2">Maintain and Scale:</b>
                                 After project delivery, we help onboard, maintain and scale it further.
                                 </p>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section3 section end ---------- */}

            {/*--------------- about section4 section start ---------- */}

            <section className="about-section4 py-xl-5 py-md-4 py-2">
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className="lets-meet-box bg-gradient-light dark-box-shadow p-5">
                                <h4 className="dark-text-color mb-4 h2">
                                    {t('aboutUs.letMeetOurTeam')} 
                                </h4>
                                <div className="our-team-block">
                                    <div className="line-animated rounded position-relative float-start  me-3"></div>
                                    <h3 className="h3 mb-2 purple-gradient-text-color">
                                        8 {t('aboutUs.member')}
                                    </h3>
                                    <h3 className="h3 dark-secondary-text-color">
                                        {t('aboutUs.designDevMarketing')}
                                    </h3>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7}>
                            <h6 className="h3 text-uppercase dark-text-color mb-4">
                                {t('aboutUs.meetCoreTeam')}
                            </h6>
                            <h3 className="h3 dark-secondary-text-color lh-base fw-normal">
                                {t('aboutUs.meetCoreTeamPara')}
                            </h3>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section4 section end ---------- */}

            {/*--------------- about section5 section start ---------- */}

            <section className="about-section5 py-xl-5 py-md-4 py-2">
                <Container>
                    <Row>
                        {_.map(teamMemberList, (item) => (
                            <Col lg={3} md={4} xs={6} key={_.uniqueId()}>
                                {typeof window !== 'undefined' ? (
                                    <Card className="our-team border-0 p-lg-4 p-3 mb-xl-5 mb-4">
                                        <MyImage
                                            loading="lazy"
                                            className="card-img-top rounded-circle mt-0 mb-xl-4 mb-1"
                                            height={258}
                                            width={258}
                                            src={item.image}
                                        />
                                        <Card.Body className="d-flex justify-content-between align-items-center flex-column  px-0 pb-0">
                                            <div className="text-center mb-md-3 mb-2">
                                                <Card.Title className="dark-text-color">
                                                    {item.name}
                                                </Card.Title>
                                                <Card.Text className="dark-secondary-text-color">
                                                    {item.designation}
                                                </Card.Text>
                                            </div>
                                            <div className="d-flex social-icons">
                                                <a
                                                    href="#"
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                    className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"
                                                >
                                                    <MyImage
                                                        src={images.twitter}
                                                        alt=" "
                                                        width={23}
                                                        height={20}
                                                    />
                                                </a>
                                                <a
                                                    href="#"
                                                    onClick={(e) =>
                                                        e.preventDefault()
                                                    }
                                                    className="rounded-circle d-flex justify-content-center align-items-center mx-lg-3 mx-2"
                                                >
                                                    <MyImage
                                                        src={images.linkeIn}
                                                        alt=" "
                                                        width={23}
                                                        height={20}
                                                    />
                                                </a>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                ) : null}
                            </Col>
                        ))}
                    </Row>
                    <Row></Row>
                </Container>
            </section>

            {/*--------------- about section5 section end ---------- */}

            {/*--------------- about section6 section start ---------- */}

            <section className="about-section6 py-xl-5 py-md-4 py-2 mb-xl-5 mb-4">
                <Container>
                    <Row>
                        <h3 className="h3 purple-gradient-text-color text-uppercase mb-3">
                            {t('aboutUs.workWithUs')}
                        </h3>
                        <Col md={6}>
                            <h6 className="h2 dark-text-color mb-3">
                                {t('aboutUs.workWithUsQuesition')}
                            </h6>
                        </Col>
                        <Col md={6}>
                            <h3 className="h3 dark-secondary-text-color lh-base fw-normal">
                                {t('aboutUs.workWithUsAnswer')}
                            </h3>
                        </Col>
                        <Col md={6} className="mt-lg-4 mt-2">
                            <Button
                                btnVarient="red-btn"
                                onClick={() => {
                                    router.push(`/${props.language}/contact`);
                                }}
                                className="min-size-btn btn btn-primary"
                            >
                                {t('connectWithUs')}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about section6 section end ---------- */}
        </>
    );
};

export default AboutUs;

AboutUs.propTypes = { language: PropTypes.string };

AboutUs.defaultProps = {
    language: '',
};
