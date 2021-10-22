import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';

import { Paragraph } from '@components';
import images from '@components/images';

export default function ChooseUsSection() {
    const { t } = useTranslation('home');
    const chooseUSList = [
        {
            icon: images.whyChose,
            name: 'Focus on Innovation',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: images.truePartner,
            name: 'True Partners',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: images.devOps,
            name: 'DevOps',
            describe:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon: images.dedTeam,
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
                            src={images.blockchainBuss}
                            placeholder="blur"
                            alt=" "
                            height={332}
                            width={636}
                            loading="lazy"
                        />
                    </Col>

                    <Col md={12} lg={6}>
                        <h2 className="h2 mb-4"> {t('chooseUs')} </h2>

                        <Paragraph>{t('chooseUsDesc1')}</Paragraph>

                        <Paragraph>{t('chooseUsDesc2')}</Paragraph>
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
                                    <Paragraph>{item.describe}</Paragraph>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

ChooseUsSection.propTypes = {};

ChooseUsSection.defaultProps = {};
