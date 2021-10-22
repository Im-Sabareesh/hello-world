import React from 'react';
import Link from 'next/link';
import _ from 'lodash';

import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import footerImages from '@components/images';

const RadiusFooter = (props) => {
    const footerLinkList = [
        {
            title: 'Our Services',
            lgStyle: 3,
            list: [
                {
                    name: 'Decentralized Finance',
                    route: '/services/DefiServices',
                },
                {
                    name: 'Non Fungible Tokens',
                    route: '/services/DefiServices',
                },
                {
                    name: 'Binance Smart Chain',
                    route: '#',
                },
                {
                    name: 'App Development',
                    route: '#',
                },
                {
                    name: 'Web Development',
                    route: '#',
                },
            ],
        },
        {
            title: 'Expert Solutions',
            lgStyle: 2,
            list: [
                {
                    name: 'Live Ledger',
                    route: '#',
                },
                {
                    name: 'True Title',
                    route: '#',
                },
                {
                    name: 'Instasure',
                    route: '#',
                },
            ],
        },
        {
            title: 'Connect With Us',
            lgStyle: { span: 2, offset: 1 },
            list: [
                {
                    name: 'Contact Us',
                    route: '/contact',
                },
                {
                    name: 'Career',
                    route: '/careers',
                },
                {
                    name: 'More About Us',
                    route: '/about',
                },
                {
                    name: 'Blog',
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
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="brand-logo"
                        >
                            <Image
                                src={footerImages.ccWhiteLogo}
                                className="mb-4"
                                alt="..."
                                width={219}
                                height={140}
                            />
                        </a>
                        <p className="light-text-color text-shadow">
                            Follow Us
                        </p>
                        <div className="social-icons">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-3"
                            >
                                <Image
                                    src={footerImages.fbSVG}
                                    alt="..."
                                    width={11}
                                    height={19}
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-3"
                            >
                                <Image
                                    src={footerImages.instaSVG}
                                    alt="..."
                                    width={20}
                                    height={19}
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-3"
                            >
                                <Image
                                    src={footerImages.twitterSVG}
                                    alt="..."
                                    width={25}
                                    height={19}
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-3"
                            >
                                <Image
                                    src={footerImages.uTubeSVG}
                                    alt="..."
                                    width={27}
                                    height={19}
                                />
                            </a>
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="mx-3"
                            >
                                <Image
                                    src={footerImages.wpSVG}
                                    alt="..."
                                    width={19}
                                    height={19}
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
                            <p className="h3 light-text-color mb-3">
                                {item.title}
                            </p>
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
                                        src={footerImages.upArrow}
                                        alt=" "
                                        width={52}
                                        height={51}
                                    />
                                </div>
                                Back to top
                            </a>
                        </div>
                    )}
                </Row>
                <div className="d-flex justify-content-between align-items-center pt-5 pb-3 copyrights">
                    <span className="light-text-color">
                        ©ChainCode PTY LTD 2021. All rights reserved
                    </span>
                    <ul className="list-inline position-relative footer-after-line">
                        <li className="list-inline-item px-2">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="light-text-color"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="light-text-color"
                            >
                                Terms of Service & Rules
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default RadiusFooter;
