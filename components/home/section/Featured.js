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
            },
            {
                title: t('home.defiDevelopment'),
                link: 'services/defi-development',
                icon: images.defiicon,
            },
            {
                title: t('nftDevelopement'),
                link: 'services/nft-development',
                icon: images.nftIcon,
            },
            {
                title: t('home.obortechSmartHub'),
                link: '#',
                icon: images.obortechIcon,
            },
            {
                title: t('home.gdprCompliance'),
                link: '#',
                icon: images.gdprIcon,
            },
        ];

    return (
        <section className="hero-banner-container">
            <Container>
                <Row>
                    <Col md={10} lg={8} xl={7} xxl={6}>
                        <div className="d-flex align-items-center">
                            <h3 className="h3 secondary-text-color">
                                {t('home.blockChainTechnology')}
                            </h3>
                            <div className="heading-line"> </div>
                        </div>

                        <H1>{t('home.provideEnterprise')}</H1>

                        <Paragraph>{t('home.provideEnterpriseDesc')}</Paragraph>

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

                    <Col md={12} className="text-center mt-4 featured-heading">
                        <h2 className="h2 blue-gradient-text-color">
                            {t('home.featured')}
                        </h2>
                    </Col>

                    <div className="mt-4">
                        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-5 justify-content-center">
                            {_.map(featuresList, (item) => (
                                <Col key={_.uniqueId()}>
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

                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.title,
                                            }}
                                        />

                                        <div>
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
                    </div>
                </Row>
            </Container>
        </section>
    );
}

FeaturedSection.propTypes = { language: PropTypes.string };

FeaturedSection.defaultProps = {
    language: '',
};
