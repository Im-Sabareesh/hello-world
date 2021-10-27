import React from 'react';
import _ from 'lodash';
import i18next from 'i18next';
import { Container, Row, Col } from 'react-bootstrap';

import { Paragraph, MyImage } from '@components';
import images from '@components/images';

export default function ChooseUsSection() {
    const t = i18next.t.bind(i18next);
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
                        <MyImage
                            src={images.blockchainBuss}
                            placeholder="blur"
                            alt=" "
                            height={332}
                            width={636}
                            loading="lazy"
                        />
                    </Col>

                    <Col md={12} lg={6}>
                        <h2 className="h2 mb-4"> {t('home.chooseUs')} </h2>

                        <Paragraph>{t('home.chooseUsDesc1')}</Paragraph>

                        <Paragraph>{t('home.chooseUsDesc2')}</Paragraph>
                    </Col>
                    {_.map(chooseUSList, (item) => (
                        <Col key={_.uniqueId()} md={6} className="mt-4">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <MyImage
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
