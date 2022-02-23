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
                name: 'Alok Gupta',
                designation: t('aboutUs.teamDesignation.founderceo'),
                image: '/assets/images/team-member/Alok-Gupta.jpg',
                linkedIn: 'https://www.linkedin.com/in/alok-gupta-32010615/'
            },
            {
                name: 'Vandani Gupta',
                designation: t('aboutUs.teamDesignation.director'),
                image: '/assets/images/team-member/Vandani-Gupta.jpeg',
                linkedIn: 'https://www.linkedin.com/in/vandani-gupta-73031b223/'
            },
            {
                name: 'Anant Randhawa',
                designation: t('aboutUs.teamDesignation.healthcareAdvisor'),
                image: '/assets/images/team-member/Anant-Randhawa.jpg',
                linkedIn: ''
            },
            {
                name: 'Nitika Sharma',
                designation: t('aboutUs.teamDesignation.recruitmentManager'),
                image: '/assets/images/team-member/Nitika-Sharma.jpeg',
                linkedIn: 'https://www.linkedin.com/in/nitika-sharma-18513362/'
            },
            {
                name: 'Damini Singh',
                designation: t('aboutUs.teamDesignation.digitalMarketing'),
                image: '/assets/images/team-member/Damini.jpg',
                linkedIn: 'https://www.linkedin.com/in/damini-singh-7b1129168/'
            },
            {
                name: 'Gurpreet Rajpal',
                designation: t('aboutUs.teamDesignation.teamLead'),
                image: '/assets/images/team-member/gurpreet-rajpal.jpg',
                linkedIn: 'https://www.linkedin.com/in/gurpreet-rajpal-a2869135/'
            },
            {
                name: 'Hansraj Rami',
                designation: t('aboutUs.teamDesignation.teamLead'),
                image: '/assets/images/team-member/Hansraj-Rami.jpg',
                linkedIn: 'https://www.linkedin.com/in/hansraj-rami-7a82a6165/'
            },
            {
                name: 'Pinki Maurya',
                designation: t('aboutUs.teamDesignation.qALead'),
                image: '/assets/images/team-member/Pinki-Maurya.jpg',
                linkedIn: 'https://www.linkedin.com/in/pinki-maurya/'
            },
            {
                name: 'Shaishav Pindadi',
                designation: t('aboutUs.teamDesignation.blockchainEngineer'),
                image: '/assets/images/team-member/Shaishav.jpeg',
                linkedIn: 'https://www.linkedin.com/in/shaivpidadi/'
            },
        ],
        howWeDoList = [
            {
                title: t('aboutUs.assess'),
                describe: t('aboutUs.assessDescribe')
            }, {
                title: t('aboutUs.plan'),
                describe: t('aboutUs.planDescribe')
            }, {
                title: t('aboutUs.implement'),
                describe: t('aboutUs.implementDescribe')
            }, {
                title: t('aboutUs.maintainScale'),
                describe: t('aboutUs.maintainScaleDescribe')
            }
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- about us banner section end ---------- */}

            {/*--------------- about section1 section start ---------- */}

            <section className="about-section1 pb-xl-5 pb-md-4 pb-2">
                <Container fluid>
                    <Row>
                        <Col className="align-img">
                            <MyImage
                                src={images.aboutUs}
                                alt=" "
                                className="mx-auto about-section1-img"
                                rounded="true"
                                width={1211}
                                height={614}
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
                <div className="right-end-bg-img">
                    <Container>
                        <Row className="px-lg-4 py-4">
                            <Col xl={7} lg={7} sm={12}>
                                <div className="our-story-block d-flex align-items-center">
                                    <div className="our-story-block-number rounded-circle d-flex justify-content-center align-items-center">
                                        <span className="text-white">04</span>
                                    </div>
                                    <h3 className="h2 light-text-color mb-0">
                                        {t('aboutUs.howWeDoIt')}
                                    </h3>
                                </div>
                                <div className="timeline-content">
                                    <h3 className="h3 light-text-color">
                                        {t('aboutUs.howWeDoItPara')}
                                    </h3>
                                    <div className="box">
                                        <ul id="first-list">
                                            {_.map(howWeDoList, (item, index) => (
                                                <li  key={index}>
                                                    <span></span>
                                                    <div className="info">
                                                        <h3 className="light-text-color text-uppercase">{item.title}:</h3>
                                                        <small>{item.describe}</small>
                                                    </div>
                                                </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={5} lg={5}>

                            </Col>
                        </Row>
                    </Container>
                </div>
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
                            <Col lg={3} md={4} sm={6} xs={12} key={_.uniqueId()}>
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
                                            <div className={`d-flex social-icons ${!item.linkedIn && 'visiblity-hidden'}`}>
                                                <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        if (item.linkedIn) {
                                                            window.open(item.linkedIn, '_blank');
                                                        }
                                                    }}
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
