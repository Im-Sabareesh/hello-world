import React from 'react';
import Link from 'next/link';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';

import { Container, Row, Col, Image } from 'react-bootstrap';
import { Paragraph } from '@components';

const RadiusFooter = (props) => {
    const { t } = useTranslation('common'),
        footerLinkList = [
            {
                title: t('footer.ourServices'),
                lgStyle: 3,
                list: [
                    {
                        name: t('footer.decentralizedFinance'),
                        route: '/services/DefiServices',
                    },
                    {
                        name: t('footer.nonFungibleTokens'),
                        route: '/services/NFTServices',
                    },
                    {
                        name: t('footer.binanceSmartChain'),
                        route: '#',
                    },
                    {
                        name: t('footer.appDevelopment'),
                        route: '#',
                    },
                    {
                        name: t('footer.webDevelopment'),
                        route: '#',
                    },
                ],
            },
            {
                title: t('footer.expertSolutions'),
                lgStyle: 2,
                list: [
                    {
                        name: t('footer.liveLedger'),
                        route: '#',
                    },
                    {
                        name: t('footer.trueTitle'),
                        route: '#',
                    },
                    {
                        name: t('footer.instasure'),
                        route: '#',
                    },
                ],
            },
            {
                title: t('footer.connectWithUs'),
                lgStyle: { span: 2, offset: 1 },
                list: [
                    {
                        name: t('contactUs'),
                        route: '/contact',
                    },
                    {
                        name: t('career'),
                        route: '/careers',
                    },
                    {
                        name: t('footer.moreAboutUs'),
                        route: '/about',
                    },
                    {
                        name: t('footer.blog'),
                        route: '#',
                    },
                ],
            },
        ];

    return (
        <footer className={`${props.radius && 'home-footer'} footer-section`}>
            <Container>
                <Row className="py-5 pb-1">
                    <Col
                        xs={6}
                        sm={6}
                        md={12}
                        lg={4}
                        className={`${
                            !props.radius
                                ? 'text-md-center'
                                : 'home-footer-logo'
                        } mb-5 mb-md-5 mb-sm-3 mb-xs-3`}
                    >
                        <Link href="/">
                            <a
                                // onClick={(e) => e.preventDefault()}
                                className="brand-logo"
                            >
                                <Image
                                    src="/assets/icons/cc-white-logo.svg"
                                    className="mb-4"
                                    alt="..."
                                />
                            </a>
                        </Link>
                        <Paragraph className="light-text-color text-shadow">
                            {t('footer.followUs')}
                        </Paragraph>
                        <div className="social-icons">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-md-3 mx-1"
                            >
                                <Image
                                    src="/assets/icons/facebook.svg"
                                    alt="..."
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-md-3 mx-1"
                            >
                                <Image
                                    src="/assets/icons/instagram.svg"
                                    alt="..."
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-md-3 mx-1"
                            >
                                <Image
                                    src="/assets/icons/twitter.svg"
                                    alt="..."
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-md-3 mx-1"
                            >
                                <Image
                                    src="/assets/icons/youtube.svg"
                                    alt="..."
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-md-3 mx-1"
                            >
                                <Image
                                    src="/assets/icons/wordpress.svg"
                                    alt="..."
                                />
                            </a>
                        </div>
                    </Col>

                    {_.map(footerLinkList, (item) => (
                        <Col
                            key={_.uniqueId()}
                            xs={6}
                            sm={6}
                            md={4}
                            lg={item.lgStyle}
                            className="mb-xs-3 mb-sm-3 mb-4"
                        >
                            <h3 className="h3 light-text-color mb-3">
                                {item.title}
                            </h3>
                            <ul className="lh-lg">
                                {_.map(item.list, (listItem) => (
                                    <li key={_.uniqueId()} className="mb-2">
                                        {listItem.route !== '#' ? (
                                            <Link href={listItem.route}>
                                                <a className="light-text-color">
                                                    {listItem.name}
                                                </a>
                                            </Link>
                                        ) : (
                                            <a
                                                className="light-text-color"
                                                href="#"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                {listItem.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    ))}

                    {props.radius && (
                        <div className="backtotop" id="backtotop">
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.body.scrollTop =
                                        document.documentElement.scrollTop = 0;
                                }}
                            >
                                <div className="arrow-bg">
                                    <Image
                                        src="/assets/images/uparrow.png"
                                        alt=" "
                                    />
                                </div>
                                Back to top
                            </a>
                        </div>
                    )}
                </Row>
                <div className="d-flex justify-content-between align-items-center pt-5 pb-3 copyrights">
                    <span className="light-text-color">
                        {t('footer.copyRightsReserved')}
                    </span>
                    <ul className="list-inline position-relative footer-after-line">
                        <li className="list-inline-item px-2">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="light-text-color"
                            >
                                {t('privacyPolicy')}
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="light-text-color"
                            >
                                {t('termsOfService')}
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default RadiusFooter;
