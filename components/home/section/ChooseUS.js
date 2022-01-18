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
            name: 'Design Thinking-led Innovation',
            describe:
                'We are passionate about bringing the leverage of blockchain to business. Our experts employ a design thinking-driven approach to identify blockchain use cases in your industry and build a robust strategy to implement them.',
        },
        {
            icon: images.truePartner,
            name: 'Your Tech Partners',
            describe:
                'We work as your partners. You cut down on R&D time and expense by delegating blockchain deployment to us. We understand the why and then help implement the what and the how of an idea into stable, value-driven and scalable DLT based solutions.',
        },
        {
            icon: images.devOps,
            name: 'Word-class Product Team On-demand',
            describe:
                'Our team of hand-picked tech talent can design, build, launch and scale your idea into real-world blockchain-based applications. Our dedicated team model allows flexibility and transparency to the entire process.',
        },
        {
            icon: images.dedTeam,
            name: 'Agile and DevOps Tandem',
            describe:
                'Our culture boasts of using Agile to understand and deliver on the ever-evolving needs of our clients and with DevOps in tandem, we ship faster and better. Using only the best case practices of the industry, our team has your back to test your blockchain MVP or launch a whole suite of apps. ',
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
