import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import i18next from 'i18next';

import { Container, Row, Col } from 'react-bootstrap';
import { Button, H1, Paragraph } from '@components';

export default function FeaturedSection(props) {
    const router = useRouter();
    const t = i18next.t.bind(i18next),
        featuresList = [
            {
                title: t('home.hyperledgerDevelopment'),
                link: '#',
            },
            {
                title: t('home.defiDevelopment'),
                link: 'services/DefiServices/',
            },
            {
                title: t('nftDevelopement'),
                link: 'services/NFTServices/',
            },
            {
                title: t('home.obortechSmartHub'),
                link: '#',
            },
            {
                title: t('home.gdprCompliance'),
                link: '#',
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

                    <Col md={12} className="text-center mt-4">
                        <h2 className="h2 secondary-text-color">
                            {t('home.featured')}
                        </h2>
                    </Col>

                    <div className="mt-4">
                        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                            {_.map(featuresList, (item) => (
                                <Col key={_.uniqueId()}>
                                    {item.link !== '#' ? (
                                        <Link
                                            href={`${props.language}/${item.link}`}
                                        >
                                            <div className="featured-box-container btn d-flex align-items-center justify-content-center text-center">
                                                <span> {item.title} </span>
                                            </div>
                                        </Link>
                                    ) : (
                                        <div className="featured-box-container btn d-flex align-items-center justify-content-center text-center">
                                            <span> {item.title} </span>
                                        </div>
                                    )}
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
