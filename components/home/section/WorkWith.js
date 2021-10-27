import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import { ImgPanelSection, H1, Paragraph } from '@components';
import images from '@components/images';

export default function WorkWithSection(props) {
    const t = i18next.t.bind(i18next);

    return (
        <section className="home-section-7 my-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} className="text-center">
                        <h2 className="h2 my-4">{t('home.weWork')} </h2>
                    </Col>

                    <Col md={4} className="workwithus-txt mt-3">
                        <H1 className="secondary-text-color mb-3">121,000+</H1>
                        <Paragraph>
                            {t('home.weWorkDescBefore')} 120{' '}
                            {t('home.weWorkDescAfter')}
                        </Paragraph>
                    </Col>

                    <Col md={8} className="workwithus-txt  mt-3">
                        <Image
                            src={images.weWorkWith}
                            alt=" "
                            height={285}
                            width={822}
                            loading="lazy"
                        />
                    </Col>

                    <Col md={12} className="mt-5 mb-5">
                        <ImgPanelSection
                            title={`${t('home.someQuestion')}<br />${t(
                                'home.getFreeConsultAns'
                            )}`}
                            className="cta-banner cta-banner2 d-flex align-items-center justify-content-end"
                            link={`${props.language}/contact`}
                            btnName={t('letsTalk')}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

WorkWithSection.propTypes = { language: PropTypes.string };

WorkWithSection.defaultProps = {
    language: '',
};
