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

const HLFDSComponent = (props) => {
    const hlfdServList = useSelector(serviceSelector.servicesListSelector);
    const router = useRouter(),
        t = i18next.t.bind(i18next);
    const hlfdFabricList = [
            {
                title: t('hyperledgerFabric.performanceScalabilty'),
                link: '#',
                icon: images.performanceIcon,
                content: t('hyperledgerFabric.performanceContent')
            },
            {
                title: t('hyperledgerFabric.governance'),
                link: '#',
                icon: images.governanceIcon,
                content: t('hyperledgerFabric.governanceContent')
            },
            {
                title: t('hyperledgerFabric.security'),
                link: '#',
                icon: images.securityIcon,
                content: t('hyperledgerFabric.securityContent')
            },
            {
                title: t('hyperledgerFabric.privacy'),
                link: '#',
                icon: images.privacyIcon,
                content: t('hyperledgerFabric.privacyContent')
            },
        ];
    return (
        <>
            {/*--------------- Hyper ledger fabric development section1 start---------- */}

            <section className="service-inner-section1 enterprise-section1">
                <Container>
                    <Row>
                        <Col lg={6} sm={12} className="my-auto">
                            <div className="d-sm-flex align-items-center">
                                <h3 className="h3 secondary-text-color text-uppercase">
                                    {t('hdfDevelopment')}
                                </h3>
                                <div className="heading-line"></div>  
                            </div>

                            <H1 className="mb-lg-4 mb-3">
                                {t('hyperledgerFabric.tapThePotential')} <br /> {t('hyperledgerFabric.distributedLedger')}
                            </H1>

                            <Paragraph>
                                <b>{t('hyperledgerFabric.headerDesc')}</b>
                            </Paragraph>

                            <Paragraph>
                                {t('hyperledgerFabric.headerPara')}
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
                                 {t('talkOurExperts')}
                                </Button>
                            </div>
                        </Col>
                        <Col lg={6} sm={12}>
                            <div className="nft-service-img-div">
                               {/* <Image src="../../public/assets/images/enterprise-blockchain-img.png" alt="..."></Image> */}
                                <MyImage
                                    src={images.hyperledgerBanner}
                                    rounded="true"
                                    className="nft-service-img"
                                    alt=" "
                                    width={603}
                                    height={668}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- Hyper ledger fabric development  section1 end---------- */}

            {/*--------------- Hyper ledger fabric development  section2 start---------- */}

            <section className="service-inner-section2 enterprise-section2">
                <div className="section-glow-banner develop-hyperledger">
                    <Container>
                        <Row>
                            <Col xl={{ span: 5, order: 0 }} lg={{ span: 6, order: 0 }} md={{ span: 12, order: 1 }} sm={{ span: 12, order: 1 }} xs={{ span: 12, order: 1 }}>
                                <div className="next-generation-accordion floating-content">
                                    
                                    <h3>{t('hyperledgerFabric.whatIsHyperledger')}</h3>
                                    <Paragraph>
                                        {t('hyperledgerFabric.whatIsHyperledgerAns')}
                                    </Paragraph>
                                    <Button
                                        btnVarient="red-btn"
                                        className="p-0 rounded-0"
                                        size="lg"
                                        onClick={() => {
                                            window.open('https://www.hyperledger.org/blog/2020/01/30/welcome-hyperledger-fabric-2-0-enterprise-dlt-for-production', '_blank');
                                        }}
                                    >
                                        {t('hyperledgerFabric.visitHyperledger')}
                                    </Button>
                                    
                               
                                </div>
                            </Col>

                            <Col xl={{ span: 7, order: 0 }} lg={{ span: 6, order: 0 }} md={{ span: 12, order: 0 }} sm={{ span: 12, order: 0 }} xs={{ span: 12, order: 0 }} className="banner-content">
                                <h2 className="h2 mb-4">
                                    {t('hyperledgerFabric.blockHyperledgerFabric')}
                                </h2>
                                <Paragraph>
                                    {t('hyperledgerFabric.blockHyperledgerFabricPara')} <br/>
                                    {t('hyperledgerFabric.hyperFabric')}.
                                </Paragraph>
                                <div className="d-xl-none d-lg-block d-none mx-auto">
                                    <MyImage
                                        src={images.hyperledgerimg}
                                        rounded="true"
                                        className="nft-service-img"
                                        alt=" "
                                        width={517}
                                        height={417}
                                    />
                                </div>
                            </Col>
                           
                        </Row>
                        <Row className="d-xl-flex d-lg-none">
                            <Col xl={5} lg={6}>
                                
                            </Col>
                            <Col xl={7} lg={6} className="what-hyperledger-img text-center">
                                <MyImage
                                    src={images.hyperledgerimg}
                                    rounded="true"
                                    className="nft-service-img"
                                    alt=" "
                                    width={517}
                                    height={417}
                                />
                            </Col>
                        </Row>

                    </Container>
                </div>
            </section>

            {/*--------------- Hyper ledger fabric development  section2 end---------- */}

            {/*--------------- Hyper ledger fabric development  section3 cta start---------- */}

            <section className="service-inner-section3 enterprise-section3 why-hyperledger">
                <Container>
                    <Row>
                        <Col md={12} className="mb-2 mb-lg-5">
                            <h2 className="h2">
                                {t('hyperledgerFabric.whyHyperledgerFabric')}
                            </h2>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-0 pt-2">
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-4 justify-content-center">
                        {_.map(hlfdFabricList, (item, i) => (
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
                                <div className={`featured-box-container-new btn text-start position-relative featured-iconbg-new${i+1}`}>
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

            {/*--------------- Hyper ledger fabric development cta end---------- */}


            {/*--------------- Hyper ledger fabric development cta start---------- */}

            <section className="orange-cta-section enterprise-section4">
                <Container>
                    <Row>
                        <Col md={12} className="get-started-block text-center">
                            <h6 className="getstarted-heading text-white"
                                dangerouslySetInnerHTML={{
                                    __html: t('blockchainConsulting.leverageHeader'),
                                }}>                                
                            </h6>

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

export default HLFDSComponent;

HLFDSComponent.propTypes = { language: PropTypes.string };

HLFDSComponent.defaultProps = {
    language: '',
};
