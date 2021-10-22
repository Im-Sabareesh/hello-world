import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import homeImages from '@components/images';

export default function ChooseUsSection({ data }) {
  const { t } = useTranslation('home')
    const chooseUSList = [
        {
            icon: homeImages.whyChose,
            name: 'Focus on Innovation',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: homeImages.truePartner,
            name: 'True Partners',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: homeImages.devOps,
            name: 'DevOps',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: homeImages.dedTeam,
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
                            src={homeImages.blockchainBuss}
                            placeholder="blur"
                            alt=" "
                            height={332}
                            width={636}
                            loading="lazy"
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
                                    <Image
                                        src={item.icon}
                                        alt=" "
                                        height={40}
                                        width={40}
                                        loading="lazy"
                                    />
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
