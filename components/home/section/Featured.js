import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import { Container, Row, Col } from 'react-bootstrap';
import { Button, H1, Paragraph, MyImage } from '@components';
import images from '@components/images';

export default function FeaturedSection(props) {
    const router = useRouter();
    const t = i18next.t.bind(i18next),
        featuresList = [
            {
                title: t('home.hyperledgerDevelopment'),
                link: 'services/hyperledger-fabric-development',
                icon: images.hyperledgericon,
                mobileIcon: images.hyperledgericonMobile,
            },
            {
                title: t('home.defiDevelopment'),
                link: 'services/defi-development',
                icon: images.defiicon,
                mobileIcon: images.defiiconMobile,
            },
            {
                title: t('nftDevelopement'),
                link: 'services/nft-development',
                icon: images.nftIcon,
                mobileIcon: images.nftIconMobile,
            },
            {
                title: t('home.obortechSmartHub'),
                link: 'https://www.obortech.io/',
                icon: images.obortechIcon,
                mobileIcon: images.obortechIconMobile,
            },
            {
                title: t('home.gdprCompliance'),
                link: 'services/gdpr-compliance',
                icon: images.gdprIcon,
                mobileIcon: images.gdprIconMobile,
            },
        ];

    return (
        <>
        <section className="hero-banner-container hero-banner-mobile">
            <Container>
                <Row>
                    <Col md={10} lg={8} xl={7} xxl={6}>
                        <div className="d-md-flex align-items-center">
                            <h3 className="h3 secondary-text-color">
                                {t('home.expertBlockchainConsulting')}
                            </h3>
                            <div className="heading-line"> </div>
                        </div>

                        <div className="d-md-none d-block py-2">
                            <MyImage
                                src={images.heroimgMobile}
                                alt=""
                                width={342}
                                height={120}
                                layout="intrinsic"
                                placeholder="blur"
                                loading="lazy"
                            />
                        </div>

                        <H1>{t('home.superchargeBlockchainCapabilities')}</H1>

                        <Paragraph>{t('home.weSimplifyExcellence')}</Paragraph>

                        <div className="button-outer">
                            <Button
                                btnVarient="red-btn"
                                size="lg"
                                onClick={() => {
                                    router.push(`${props.language}/contact`);
                                }}
                            >
                                {t('consultFree')}
                            </Button>
                        </div>
                    </Col>

                   
                </Row>
                <Row className="featured-wrapper d-md-block d-none">
                    <Col md={12} className="text-center featured-wrapper-heading">
                            <h2 className="h2 blue-gradient-text-color">
                                {t('home.featured')}
                            </h2>
                    </Col>

                    <div className="mt-4">
                        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5 justify-content-center">
                            {_.map(featuresList, (item) => (
                                <Col
                                    key={_.uniqueId()}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (item.link) {
                                            if (item.link.search('https') !== -1) {
                                                window.open(item.link, '_blank');
                                            } else {
                                                router.push(
                                                    `${props.language}/${item.link}`
                                                );
                                            }
                                        }
                                    }}
                                >
                                    <div className="featured-box-container-new btn d-flex text-start flex-column  justify-content-between">
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

                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }}
                                        />

                                        <div className="mt-sm-3 mt-4">
                                            <MyImage
                                                src={images.purpleArrow}
                                                alt=""
                                                width={20}
                                                height={17}
                                                layout="intrinsic"
                                                placeholder="blur"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Row>
            </Container>
        </section>
        <section className="featured-mobile d-md-none d-block">
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <h2 className="h2 white-gradient-text-color">
                            {t('home.featured')}
                        </h2>
                    </Col>
                    <Col xs={12}>
                        <Row>
                        {_.map(featuresList, (item) => (
                            <Col xs={12}
                                key={_.uniqueId()}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (item.link) {
                                                if (item.link.search('https') !== -1) {
                                                    window.open(item.link, '_blank');
                                                } else {
                                                    router.push(
                                                        `${props.language}/${item.link}`
                                                    );
                                                }
                                            }
                                        }}
                                    >
                                <div className="featured-box position-relative">
                                    <div className="position-absolute featured-icon-mobile">
                                        <MyImage
                                            src={item.mobileIcon}
                                            alt=""
                                            width={103}
                                            height={112}
                                            layout="intrinsic"
                                            placeholder="blur"
                                            loading="lazy"
                                        />
                                        
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between h-100">
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }}
                                        />
                                        <div>
                                            <MyImage
                                                src={images.purpleArrow}
                                                alt=""
                                                width={16}
                                                height={16}
                                                layout="intrinsic"
                                                placeholder="blur"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                              ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}

FeaturedSection.propTypes = { language: PropTypes.string };

FeaturedSection.defaultProps = {
    language: '',
};
