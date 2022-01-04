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
                content: "Increased compliance with modern business standards."
            },
            {
                link: '#',
                icon: images.experienceIcon,
                content: "Improved customer experience."
            },
            {
                link: '#',
                icon: images.productivityIcon,
                content: "Improvement in the overall productivity."
            },
            {
                link: '#',
                icon: images.capabilitiesIcon,
                content: "Ensuring better management capabilities."
            },
            {
                link: '#',
                icon: images.utilizingIcon,
                content: "Utilizing machine learning capabilities."
            },
        ];

    const uiPathConsultList = [
        {
            title: 'UiPath Consulting',
            image: '/assets/images/solution-1.jpg',
            subtitle:
                'With several years of relevant industry expertise, Chain Code Consulting has been delivering professional UiPath consulting services to help you incorporate the RPA process in your day-to-day business operations.',
            link: t('home.blockChainLink'),
        },
        {
            title: 'UiPath Implementation',
            image: '/assets/images/solution-2.jpg',
            subtitle:
                'The implementation phase of the RPA process involves the iterative operations of in-depth business analysis along with UiPath configuration and training & testing.nce.',
            link: t('home.blockChainLink'),
        },
        {
            title: 'Managed Services',
            image: '/assets/images/solution-3.jpg',
            subtitle:
                'As an integral part of our Business Process Outsourcing solutions, we help in managing, monitoring, and continuously optimizing your UiPath RPA implementation –along with ensuring infrastructure as well as system support.',
            link: t('home.blockChainLink'),
        },
    ];
    return (
        <>
            {/*--------------- RPA service section1 start---------- */}

            <section className="service-inner-section1 enterprise-section1">
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="my-auto">
                            <div className="d-sm-flex align-items-center">
                                <h3 className="h3 secondary-text-color text-uppercase">
                                    UiPath Consulting
                                </h3>
                                <div className="heading-line"></div>  
                            </div>

                            <H1 className="mb-lg-4 mb-3">
                            Robotic Process Automation</H1>

                            <Paragraph>
                            Robotic Process Automation (RPA) is here to stay in the modern era. The sooner you would start leveraging its potential, the faster it will help in creating a competitive edge for your business enterprise. UiPath is known all around the world for delivering impressive product leadership along with technical excellence. Boasting one of the largest management teams in the industry, UiPath is committed to continuous innovation throughout the year for accelerating your business value from automation. Chaincode Consulting is a leading UiPath consulting service provider to help you get a technical advantage in the modern market.
                            </Paragraph>

                            <div className="pt-lg-4 mt-lg-3 pt-md-3 pt-0 mt-0">
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
                                 Talk to our Experts
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
                                    width={710}
                                    height={571}
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
                                    
                                    <h3>What is RPA?</h3>
                                    <Paragraph>
                                    RPA stands for Robotic Process Automation. It is referred to as the technology allowing an individual to configure some computer software (a robot) for emulating and integrating the actions of a human being who is interacting with some digital system for executing a business-centric process. RPA automated systems or robots are known to make use of the available user interface for capturing data and manipulating applications just like human beings.
                                    </Paragraph>
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
                                    Visit Hyperledger.org
                                    </Button>
                                    
                               
                                </div>
                            </Col>

                            <Col xl={{ span: 7, order: 0 }} lg={{ span: 6, order: 0 }} md={{ span: 12, order: 0 }} sm={{ span: 12, order: 0 }} xs={{ span: 12, order: 0 }} className="banner-content">
                                {/* <h2 className="h2 mb-4">
                                    Our GDPR  Solution
                                </h2> */}
                                <Paragraph>
                                    The robots are capable of interpreting, triggering responses, and communicating with the inter-related systems for performing upon a wide range of repetitive activities. The best thing about the high-end RPA software solution is that it never sleeps, makes zero errors, and turns out highly cost-effective. For making the most of the revolutionary RPA technology & its solutions for your business enterprise, gain access to our modern UiPath consulting services.
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
                                        className=""
                                        alt=" "
                                        width={239}
                                        height={85}
                                    />
                                </div>
                                 <h2 className="h2 mb-4">
                                    What Is UiPath? 
                                </h2>
                                <Paragraph>
                                    Studio by UiPath is a specialized automated designing tool allowing businesses to model the needed business processes throughout various levels of scalability and complexity. Studio by UiPath is a diverse tool with a myriad of attractive features that are widely accepted by the end-users –ranging from business enterprises to programming experts. For maximizing the overall productivity for your business enterprise to upscale its operations significantly, reach out to our professional team of UiPath consultants providing assistance on the latest UiPath solutions.
                                </Paragraph>
                            </Col>

                            <Col xl={{ span: 5, order: 0 }} lg={{ span: 6, order: 0 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                                <div className="floating-content">
                                    <div className="floating-content-heading">
                                        <Paragraph>
                                            Benefits of RPA/UiPath automation technology in business
                                        </Paragraph>
                                    </div>
                                    <ul class="benefits-listing">
                                        <li>
                                            <strong class="d-block">Drag & Drop</strong>
                                            <Paragraph>
                                                Automating quickly in a code-free environment.
                                            </Paragraph>
                                        </li>
                                        <li>
                                            <strong class="d-block">Recording Your Actions</strong>
                                            <Paragraph>
                                                Specialized built-in workflow recorders for web apps, desktop apps, and Citrix.
                                            </Paragraph>
                                        </li>
                                        <li>
                                            <strong class="d-block">Vast Library</strong>
                                            <Paragraph>
                                                Featuring built-in drag-and-drop automation templates for accelerating the overall deployment time.
                                            </Paragraph>
                                        </li>
                                        <li>
                                            <strong class="d-block">Universal Search</strong>
                                            <Paragraph>
                                                The innovative Unified search technology allows you to search across the available automation resources.
                                            </Paragraph>
                                        </li>
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
                                Potential benefits of UiPath automation technology
                            </h2>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-0 pt-2 benefits-content">
                    <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5 justify-content-center">
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
                                Our UiPath Consulting Services
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
                            <h6 className="getstarted-heading text-white">Leverage blockchain to enhance your business. <br /> Talk to an expert.</h6>

                            <Button
                                    btnVarient="white-outline-btn"
                                    className="white-outline-btn"
                                    onClick={() => {
                                        router.push(
                                            `/${props.language}/contact`
                                        );
                                    }}
                                >
                              Get Started
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
