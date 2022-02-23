import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { serviceSelector } from '@redux';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

import { CardSection, Button, H1, Paragraph, MyImage } from '@components';
import images from '@components/images';

const RPAComponent = (props) => {
    const rpaServList = useSelector(serviceSelector.servicesListSelector);
    const router = useRouter(),
        t = i18next.t.bind(i18next);
    const rpaFabricList = [
            {
                link: '#',
                icon: images.standardIcon,
                content: t('rpaService.benefitStd')
            },
            {
                link: '#',
                icon: images.experienceIcon,
                content: t('rpaService.benefitImproved')
            },
            {
                link: '#',
                icon: images.productivityIcon,
                content: t('rpaService.benefitProductivity')
            },
            {
                link: '#',
                icon: images.capabilitiesIcon,
                content: t('rpaService.benefitEnsuring')
            },
            {
                link: '#',
                icon: images.utilizingIcon,
                content: t('rpaService.benefitUtilizing')
            },
        ];

    const uiPathConsultList = [
        {
            title: t('rpaService.uiPathConsulting'),
            image: '/assets/images/solution-rpa-img1.jpg',
            subtitle: t('rpaService.uiPathConsultingContent')
        },
        {
            title: t('rpaService.uiPathImplementation'),
            image: '/assets/images/solution-rpa-img2.jpg',
            subtitle: t('rpaService.uiPathImplementationContent')
        },
        {
            title: t('rpaService.managedServices'),
            image: '/assets/images/solution-rpa-img3.jpg',
            subtitle: t('rpaService.managedServicesContent')
        },
    ],
    benefitListing = [
        {
            title: t('rpaService.dragnDrop'),
            describe: t('rpaService.dragnDropDesc')
        }, {
            title: t('rpaService.recordingActions'),
            describe: t('rpaService.recordingActionsDesc')
        }, {
            title: t('rpaService.vastLibrary'),
            describe: t('rpaService.vastLibraryDesc')
        }, {
            title: t('rpaService.universalSearch'),
            describe: t('rpaService.universalSearchDesc')
        }
    ];
    return (
        <>
            {/*--------------- RPA service section1 start---------- */}

            <section className="service-inner-section1 enterprise-section1">
                <Container>
                    <Row>
                        <Col lg={6} sm={12}>
                            <div className="d-sm-flex align-items-center">
                                <h3 className="h3 secondary-text-color text-uppercase">
                                    {t('rpaService.uiPathConsulting')}
                                </h3>
                                <div className="heading-line"></div>  
                            </div>

                            <H1 className="mb-lg-4 mb-3">
                                {t('rpaService.roboticAutomation')}
                            </H1>

                            <Paragraph>
                                {t('rpaService.roboticAutomationDesc')}
                            </Paragraph>

                            <div className="pt-xxl-4 pt-xl-0 pt-lg-4 mt-lg-3 pt-md-3 pt-0 mt-0">
                                <Button
                                    btnVarient="red-btn"
                                    className="p-0 rounded-0"
                                    size="lg"
                                    onClick={() => {
                                        router.push(
                                            `/${props.language}/contact`
                                        );
                                    }}
                                >
                                 {t('talkOurExperts')}
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="nft-service-img-div">
                               {/* <Image src="../../public/assets/images/enterprise-blockchain-img.png" alt="..."></Image> */}
                                <MyImage
                                    src={images.rpaBanner}
                                    rounded="true"
                                    className="nft-service-img"
                                    alt=" "
                                    width={1409}
                                    height={1290}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- RPA service  section1 end---------- */}

            {/*--------------- RPA service  section2 start---------- */}

            <section className="service-inner-section2 enterprise-section2">
                <div className="section-glow-banner develop-hyperledger">
                    <Container>
                        <Row>
                            <Col xl={{ span: 5, order: 0 }} lg={{ span: 6, order: 0 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                                <div className="next-generation-accordion floating-content">
                                    
                                    <h3>{t('rpaService.whatisRPA')}</h3>
                                    <Paragraph>
                                        {t('rpaService.whatisRPAans')}
                                    </Paragraph>
                                    {/* <Button
                                        btnVarient="red-btn"
                                        className="p-0 rounded-0"
                                        size="lg"
                                        onClick={() => {
                                            window.open('https://www.hyperledger.org/blog/2020/01/30/welcome-hyperledger-fabric-2-0-enterprise-dlt-for-production', '_blank');
                                        }}
                                    >
                                        {t('visitHyperledger')}
                                    </Button> */}
                                    
                               
                                </div>
                            </Col>

                            <Col xl={{ span: 7, order: 0 }} lg={{ span: 6, order: 0 }} md={{ span: 12, order: 0 }} sm={{ span: 12, order: 0 }} xs={{ span: 12, order: 0 }} className="banner-content">
                                <h2 className="h2 mb-4">
                                    {t('rpaService.rpaSoftwareSolutions')}
                                </h2>
                                <Paragraph>
                                    {t('rpaService.robotsInterpreting')}
                                </Paragraph>
                                <div className="d-xl-none d-lg-block d-none mx-auto">
                                    <MyImage
                                        src={images.rpaImage}
                                        rounded="true"
                                        className="nft-service-img"
                                        alt=" "
                                        width={399}
                                        height={247}
                                    />
                                </div>
                            </Col>
                           
                        </Row>
                        <Row className="d-xl-flex d-lg-none">
                            <Col xl={5} lg={6}>
                                
                            </Col>
                            <Col xl={7} lg={6} className="what-hyperledger-img text-lg-start text-center">
                                <MyImage
                                    src={images.rpaImage}
                                    rounded="true"
                                    className="nft-service-img"
                                    alt=" "
                                    width={399}
                                    height={247}
                                />
                            </Col>
                        </Row>

                    </Container>
                </div>
            </section>

            {/*--------------- RPA service  section2 end---------- */}


            {/*--------------- RPA service  section3 start---------- */}

            <section className="right-overlapped-content">
                <div className="light-red-bg">
                    <Container>
                        <Row>
                            <Col xl={{ span: 7, order: 0 }} lg={{ span: 6, order: 0 }} md={{ span: 12, order: 0 }} sm={{ span: 12, order: 0 }} xs={{ span: 12, order: 0 }} className="banner-content">
                                <div className="logo-image">
                                    <MyImage
                                        src={images.uipathLogo}
                                        rounded="true"
                                        alt=" "
                                        width={239}
                                        height={85}
                                    />
                                </div>
                                 <h2 className="h2 mb-4">
                                    {t('rpaService.whatUiPath')} 
                                </h2>
                                <Paragraph>
                                    {t('rpaService.whatUiPathAns')}
                                </Paragraph>
                            </Col>

                            <Col xl={{ span: 5, order: 0 }} lg={{ span: 6, order: 0 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                                <div className="floating-content">
                                    <div className="floating-content-heading">
                                        <Paragraph>
                                            {t('rpaService.benefitsRPaPara')}
                                        </Paragraph>
                                    </div>
                                    <ul className="benefits-listing">
                                        {_.map(benefitListing, (item, index) =>
                                            <li key={index}>
                                                <strong className="d-block">{item.title}</strong>
                                                <Paragraph>
                                                    {item.describe}
                                                </Paragraph>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/*--------------- RPA service  section3 end---------- */}

            {/*--------------- RPA service  cta start---------- */}

            <section className="service-inner-section3 enterprise-section3 why-hyperledger">
                <Container>
                    <Row>
                        <Col md={12} className="mb-2 mb-lg-5">
                            <h2 className="h2">
                                {t('rpaService.potentialAutomation')}
                            </h2>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-0 pt-2 benefits-content">
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5 justify-content-center">
                        {_.map(rpaFabricList, (item, i) => (
                            <Col
                                key={_.uniqueId()}
                                onClick={(e) => {
                                    e.preventDefault();
                                    if (item.link && item.link !== '#') {
                                        router.push(
                                            `${props.language}/${item.link}`
                                        );
                                    }
                                }}
                            >
                                <div className={`featured-box-container-new btn text-start position-relative featured-rpabg${i+1}`}>
                                    <div className="featured-icon-new">
                                        <MyImage
                                            src={item.icon}
                                            alt=""
                                            width={112}
                                            height={112}
                                            layout="intrinsic"
                                            placeholder="blur"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="featured-content">
                                        {/* <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }}
                                        /> */}
                                         <Paragraph className="paragraph-text mb-sm-0">
                                             {item.content}                                            
                                        </Paragraph>
                                    </div>
                                    {/* <div className="mt-auto">
                                        {' '}
                                        <MyImage
                                            src={images.purpleArrow}
                                            alt=""
                                            width={20}
                                            height={17}
                                            layout="intrinsic"
                                            placeholder="blur"
                                            loading="lazy"
                                        />{' '}
                                    </div> */}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>

                <Container className="ui-consulting-service">
                    <Row>
                        <Col md={12} className="mb-2 mb-lg-5">
                            <h2 className="h2">
                                {t('rpaService.ourUiPathServices')}
                            </h2>
                        </Col>
                                    
                        {_.map(uiPathConsultList, (item, index) =>
                            <Col md={6} lg={4} key={_.uniqueId()}>
                                <CardSection
                                    fullCard={true}
                                    footerClass="d-flex justify-content-between"
                                    item={item}
                                />
                            </Col>
                    )}

                    </Row>
                </Container>

        
            </section>

            {/*--------------- RPA service cta end---------- */}


            {/*--------------- RPA service cta start---------- */}

            <section className="orange-cta-section enterprise-section4">
                <Container>
                    <Row>
                        <Col md={12} className="get-started-block text-center">
                            <h6 className="getstarted-heading text-white"
                                dangerouslySetInnerHTML={{
                                    __html: t('leverageHeader'),
                                }}></h6>

                            <Button
                                    btnVarient="white-outline-btn"
                                    className="white-outline-btn"
                                    onClick={() => {
                                        router.push(
                                            `/${props.language}/contact`
                                        );
                                    }}
                                >
                              {t('getStarted')}
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section> 

            {/*--------------- Blockchain Consulting orange cta end---------- */}
        </>
    );
};

export default RPAComponent;

RPAComponent.propTypes = { language: PropTypes.string };

RPAComponent.defaultProps = {
    language: '',
};
