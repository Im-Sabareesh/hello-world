import React from 'react';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col } from 'react-bootstrap';

import { CardSection } from '@components';

export default function ExploreProjectSection() {
    const { t } = useTranslation('home'),
        exploreProjectList = [
            {
                title: 'Blockchain Consulting',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
                title: 'Development and Deployment',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
                title: 'Public Blockchains Development Services',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
                title: 'Non Fungible Tokens',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
                title: 'Decentralized Finance',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
                title: 'Binance Smart Chain',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
        ];

    return (
        <section className="home-section-8 py-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={12} className="text-center mt-5">
                        <h2 className="h2 my-4">{t('exploreProject')}</h2>
                    </Col>
                    {_.map(exploreProjectList, (item) => (
                        <Col md={6} lg={4} key={_.uniqueId()}>
                            <CardSection
                                className="custom-card2 text-center"
                                item={item}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

ExploreProjectSection.propTypes = {};

ExploreProjectSection.defaultProps = {};