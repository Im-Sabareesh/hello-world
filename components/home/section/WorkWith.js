import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col, Image } from 'react-bootstrap';

import { ImgPanelSection } from 'common-components';

export default function WorkWithSection() {
    const { t } = useTranslation(['home', 'common']);

    return (
        <section className="home-section-7 my-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} className="text-center">
                        <h2 className="h2 my-4">{t('weWork')} </h2>
                    </Col>

                    <Col md={4} className="workwithus-txt mt-3">
                        <h1 className="h1 secondary-text-color mb-3">
                            121,000+
                        </h1>
                        <p>
                            {t('weWorkDescBefore')} 120 {t('weWorkDescAfter')}
                        </p>
                    </Col>

                    <Col md={8} className="workwithus-txt  mt-3">
                        <Image src="/assets/images/we-work.png" alt=" " />
                    </Col>

                    <Col md={12} className="mt-5 mb-5">
                        <ImgPanelSection
                            title={`${t('someQuestion')}<br />${t(
                                'getFreeConsultAns'
                            )}`}
                            className="cta-banner cta-banner2 d-flex align-items-center justify-content-end"
                            link="/contact"
                            btnName={t('letsTalk', { ns: 'common' })}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
