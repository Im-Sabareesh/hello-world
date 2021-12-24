import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import images from '@components/images';
import { Paragraph, MyImage } from '@components';

const socialMediaIcons = [
    {
        link: 'https://www.facebook.com/enterpriseblockchain/',
        icon: images.fbSVG
    }, {
        link: 'https://www.instagram.com/chaincodeconsulting/',
        icon: images.instaSVG
    }, {
        link: 'https://twitter.com/chaincodellp',
        icon: images.twitterSVG
    }, {
        link: 'https://www.youtube.com/channel/UC1jhY2UizDbEv7Pi4STg9DA',
        icon: images.uTubeSVG
    }, {
        link: 'https://in.linkedin.com/company/chaincode-consulting-llp',
        icon: images.linkedInSVG
    }
];

const TopLogoFooter = (props) => {
    const t = i18next.t.bind(i18next),
        footerLinkList = [
            {
                title: t('footer.ourServices'),
                style: {
                    xl: { span: 3, offset: 2 },
                    lg: { span: 3, offset: 2 },
                },
                list: [
                    {
                        name: t('footer.decentralizedFinance'),
                        route: `/${props.language}/services/defi-development`,
                    },
                    {
                        name: t('footer.nonFungibleTokens'),
                        route: `/${props.language}/services/nft-development`,
                    }
                ],
            },
            {
                title: t('footer.expertSolutions'),
                style: {
                    xl: 3,
                    lg: 3,
                },
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
                title: t('connectWithUs'),
                style: {
                    xl: 3,
                    lg: 3,
                },
                list: [
                    {
                        name: t('contactUs'),
                        route: `/${props.language}/contact`,
                    },
                    {
                        name: t('career'),
                        route: `/${props.language}/careers`,
                    },
                    {
                        name: t('footer.moreAboutUs'),
                        route: `/${props.language}/about`,
                    }
                ],
            },
        ];

    return (
        <footer className="footer-section nft-page-footer">
            <Container>
                <Row className="py-md-5 py-4">
                    <Col
                        xl={12}
                        lg={12}
                        md={12}
                        sm={6}
                        xs={6}
                        className="text-md-center mb-xl-5 pb-xl-5 mb-md-4 mb-3 pb-md-3 "
                    >
                        <Link href={`/${props.language}/`}>
                            <a className="brand-logo">
                                <MyImage
                                    src={images.ccWhiteLogo}
                                    // className="mb-md-4 mb-sm-3 mb-4"
                                    alt=" "
                                    width={219}
                                    height={140}
                                />
                            </a>
                        </Link>
                        <Paragraph className="light-text-color text-shadow mb-md-3 mb-2 mt-2">
                            {t('footer.followUs')}
                        </Paragraph>
                        <div className="social-icons">
                            {_.map(socialMediaIcons, (item) => (
                                <a
                                    href={item.link}
                                    onClick={(e) => item.link === '#' && e.preventDefault()}
                                    className="mx-md-3 mx-1"
                                >
                                    <MyImage {...item.icon} height={18} width={21} />
                                </a>
                            ))}
                        </div>
                    </Col>

                    {_.map(footerLinkList, (item) => (
                        <Col
                            key={_.uniqueId()}
                            xl={item.style.xl}
                            lg={item.style.lg}
                            md={4}
                            sm={6}
                            xs={6}
                            className="mb-xl-0 mb-md-4 mb-sm-3 mb-4"
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
                </Row>
                <div className="copyrights-section d-md-flex justify-content-between align-items-center text-md-left text-center pb-3">
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

export default TopLogoFooter;

TopLogoFooter.propTypes = {
    language: PropTypes.string,
};

TopLogoFooter.defaultProps = {
    language: '',
};
