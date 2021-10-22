import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col } from 'react-bootstrap';

import { CardSection, Button } from '@components';

export default function BlockChainSolutionSection() {
    const { t } = useTranslation(['home', 'common']),
        blockChainSolnList = [
            {
                title: 'Obortech Smart Hub',
                image: '/assets/images/solution-1.jpg',
                subtitle:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
                link: t('blockChainLink'),
            },
            {
                title: 'GDPR Compliance',
                image: '/assets/images/solution-2.jpg',
                subtitle:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
                link: t('blockChainLink'),
            },
            {
                title: 'Live Ledger',
                image: '/assets/images/solution-3.jpg',
                subtitle:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
                link: t('blockChainLink'),
            },
            {
                title: 'True Title',
                image: '/assets/images/solution-4.jpg',
                subtitle:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
                link: t('blockChainLink'),
            },
            {
                title: 'Instasure',
                image: '/assets/images/solution-5.jpg',
                subtitle:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt. Alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt. Alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum.',
                link: t('blockChainLink'),
            },
        ];

    return (
        <section className="home-section-3 py-5">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="h2 light-text-color mb-5">
                            {t('ourBlockChainSolutions')}
                        </h2>
                    </Col>

                    {_.map(blockChainSolnList, (item, index) =>
                        index === blockChainSolnList.length - 1 ? (
                            <Col md={12} lg={8} key={_.uniqueId()}>
                                <CardSection
                                    fullCard={true}
                                    footerClass="d-flex justify-content-between"
                                    item={item}
                                />
                            </Col>
                        ) : (
                            <Col md={6} lg={4} key={_.uniqueId()}>
                                <CardSection
                                    fullCard={true}
                                    footerClass="d-flex justify-content-between"
                                    item={item}
                                />
                            </Col>
                        )
                    )}

                    <Col md={12} className="text-center my-5">
                        <Button btnVarient="red-btn" className="min-size-btn">
                            {t('viewMore', { ns: 'common' })}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

BlockChainSolutionSection.propTypes = {};

BlockChainSolutionSection.defaultProps = {};
