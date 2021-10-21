import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col, Image } from 'react-bootstrap';

export default function ChooseUsSection() {
    const { t } = useTranslation('home'),
        chooseUSList = [
            {
                icon: '/assets/icons/whychoose-icon1.svg',
                name: 'Focus on Innovation',
                describe:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
            {
                icon: '/assets/icons/whychoose-icon2.svg',
                name: 'True Partners',
                describe:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
            {
                icon: '/assets/icons/whychoose-icon3.svg',
                name: 'DevOps',
                describe:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
            {
                icon: '/assets/icons/whychoose-icon4.svg',
                name: 'Dedicated Teams',
                describe:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
        ];

    return (
        <section className="home-section-5 py-5">
            <Container>
                <Row>
                    <Col md={{ span: 12, order: 0 }} lg={6}>
                        <Image
                            src="/assets/images/blockchain-business.png"
                            alt=" "
                        />
                    </Col>

                    <Col md={12} lg={6}>
                        <h2 className="h2 mb-4"> {t('chooseUs')} </h2>

                        <p>{t('chooseUsDesc1')}</p>

                        <p>{t('chooseUsDesc2')}</p>
                    </Col>
                    {_.map(chooseUSList, (item) => (
                        <Col key={_.uniqueId()} md={6} className="mt-4">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <Image src={item.icon} alt=" " />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h3 className="h3 mb-3">{item.name}</h3>
                                    <p>{item.describe}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
