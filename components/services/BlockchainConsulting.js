import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import { Container, Row, Col, Accordion, Card, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { serviceSelector } from '@redux';
import { useSelector } from 'react-redux';
import i18next from 'i18next';

import {
    CardSection,
    ImgPanelSection,
    Button,
    H1,
    Paragraph,
    MyImage,
} from '@components';
import images from '@components/images';

const BlockchainConsultingComponent = (props) => {
    const blockchainServList = useSelector(serviceSelector.servicesListSelector);
    const router = useRouter(),
        t = i18next.t.bind(i18next);
    const consultingService = [
            {
                title: t('blockchainConsulting.advisory'),
                link: '#',
                icon: images.advisoryIcon,
                bgicon: images.featurebgadvisoryIcon,
                content: "From use case discovery to POC to full-scale development, we help our clients at every stage to understand the business impact and adopt the right blockchain strategy."
            },
            {
                title: t('blockchainConsulting.proofConcept'),
                link: '#',
                icon: images.proofconceptIcon,
                bgicon: images.featurebgproofconceptIcon,
                content: "Be blockchain confident before the adoption. We develop quick POCs to demonstrate how blockchain will increase efficiency and drive business results"
            },
            {
                title: t('blockchainConsulting.blockchainDevelopment'),
                link: '#',
                icon: images.blockchaindevelopmentIcon,
                bgicon: images.featurebgblockchaindevelopmentIcon,
                content: "We turn blockchain ideas into a robust DApp with our unparalleled industry experience & Hyperledger Fabric Development capabilities."
            },
            {
                title: t('blockchainConsulting.training'),
                link: '#',
                icon: images.trainingIcon,
                bgicon: images.featurebgtrainingIcon,
                content: "Our business and technical experts educate and train our clients to develop the right aptitude enabling them co-innovate and co-create blockchain solutions suitable for their use cases."
            },
        ];
    return (
        <>
            {/*--------------- Blockchain Consulting section1 start---------- */}

            <section className="service-inner-section1 enterprise-section1">
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="my-auto">
                            <div className="d-sm-flex align-items-center">
                                <h3 className="h3 secondary-text-color">
                                BLOCKCHAIN CONSULTING
                                </h3>
                                <div className="heading-line"></div>  
                            </div>

                            <H1>Enterprise Blockchain <br />Consulting</H1>

                            <Paragraph>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus gravida pellentesque
                                mauris. Maecenas cursus, magna quis mollis
                                euismod, neque elit scelerisque nunc, eu
                                pellentesque lectus ante sed leo. Vivamus sit
                                amet magna nibh. Fusce turpis dui, dapibus ut
                                congue non, consequat ac orci. Maecenas vel
                                neque aliquet, suscipit metus a, congue ante.
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
                                    src={images.enterpriseBlockchain}
                                    rounded="true"
                                    className="nft-service-img"
                                    alt=" "
                                    width={778}
                                    height={716}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- Blockchain Consulting section1 end---------- */}

            {/*--------------- Blockchain Consulting section2 start---------- */}

            <section className="service-inner-section2 enterprise-section2">
                <div className="section-glow-banner">
                    <Container>
                        <Row>
                            <Col lg={{ span: 6, order: 0 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                                <div className="next-generation-accordion floating-content">
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            What Is Blockchain?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is a distributed ledger
                                            that can record transactions in a
                                            secured and permanent way verifiable
                                            by the stakeholders
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Why Blockchain Matters?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is revolutionizing the
                                            enterprise world by providing a new
                                            type of infrastructure enabling
                                            trusted tech-based business
                                            relationships without the need of
                                            the third party thus making the
                                            system more transparent, efficient,
                                            and affordable.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            Are you blockchain ready?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is disrupting the market
                                            across industries with its
                                            transformational capabilities. Our
                                            enterprise blockchain consulting
                                            services help clients to evaluate
                                            blockchain applicability and
                                            readiness of their systems to adopt
                                            the technology effectively.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>

                                {/* <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            What Is Blockchain?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is a distributed ledger
                                            that can record transactions in a
                                            secured and permanent way verifiable
                                            by the stakeholders
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion flush>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            Why Blockchain Matters?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is revolutionizing the
                                            enterprise world by providing a new
                                            type of infrastructure enabling
                                            trusted tech-based business
                                            relationships without the need of
                                            the third party thus making the
                                            system more transparent, efficient,
                                            and affordable.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <Accordion flush>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            Are you blockchain ready?
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            Blockchain is disrupting the market
                                            across industries with its
                                            transformational capabilities. Our
                                            enterprise blockchain consulting
                                            services help clients to evaluate
                                            blockchain applicability and
                                            readiness of their systems to adopt
                                            the technology effectively.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion> */}
                                </div>
                            </Col>

                            <Col lg={{ span: 6, order: 1 }} md={{ span: 12, order: 0 }} sm={{ span: 12, order: 0 }} xs={{ span: 12, order: 0 }} className="banner-content">
                                <h2 className="h2">
                                    Build Next-Generation
                                    Blockchain Solutions
                                </h2>
                                <Paragraph>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida pellentesque mauris. Maecenas cursus, magna quis mollis euismod, neque elit scelerisque nunc, eu pellentesque lectus ante sed leo. Vivamus sit amet magna nibh.
                                </Paragraph>
                                 {/* <Paragraph>
                                    Our blockchain consultants have the perfect blend of expertise in business processes, industries, and blockchain development to seize the true potential of the technology.
                                </Paragraph>
                                <Paragraph>
                                    We are passionately dedicated to enabling enterprise-wide adoption of decentralized business applications embraced with blockchain technology. We as your business partners are committed to reduce risks and maximize ROI with proven business results.
                                </Paragraph>  */}
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            {/*--------------- Blockchain Consulting section2 end---------- */}

            {/*--------------- Blockchain Consulting section3 cta start---------- */}

            <section className="service-inner-section3 enterprise-section3">
                <Container>
                    <Row>
                        <Col md={12} className="mb-2 mb-lg-5">
                            <h2 className="h2">
                                Our Blockchain Consulting Services
                            </h2>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-0 pt-2">
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                        {_.map(consultingService, (item, i) => (
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
                                <div className={`featured-box-container-new btn text-start position-relative featured-hyperledgerbg${i+1}`}>
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
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }}
                                        />
                                         <Paragraph className="paragraph-text mb-sm-0">
                                             {item.content}                                            
                                        </Paragraph>
                                    </div>
                                    <div className="mt-auto">
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
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/*--------------- Blockchain Consulting section3 cta end---------- */}


            {/*--------------- Blockchain Consulting orange cta start---------- */}

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

export default BlockchainConsultingComponent;

BlockchainConsultingComponent.propTypes = { language: PropTypes.string };

BlockchainConsultingComponent.defaultProps = {
    language: '',
};
