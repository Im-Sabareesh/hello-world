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
                        name: `${t('enterpriseBlockChainConsulting')}`,
                        route: `/${props.language}/services/blockchain-consulting`,
                    },
                    {
                        name: `${t('hdfDevelopment')}`,
                        route: `/${props.language}/services/hyperledger-fabric-development`,
                    },
                    {
                        name: `${t('nftDevelopement')}`,
                        route: `/${props.language}/services/nft-development`,
                    },
                    {
                        name: `${t('defiDevelopment')}`,
                        route: `/${props.language}/services/defi-development`,
                    },
                    {
                        name: t('home.gdprCompliance'),
                        route: `/${props.language}/services/gdpr-compliance`,
                    },
                    {
                        name: t('rpaService.uiPathConsulting'),
                        route: `/${props.language}/services/uipath-consulting`,
                    },
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
                        name: t('home.obortechHub'),
                        route: 'https://www.obortech.io/',
                    },
                    {
                        name: t('home.gdprCompliance'),
                        route: `/${props.language}/#${((t('home.gdprCompliance')).replace(/ /g,'')).toLowerCase()}`,
                    },
                    {
                        name: t('liveLedger'),
                        route: `/${props.language}/#${((t('liveLedger')).replace(/ /g,'')).toLowerCase()}`,
                    },
                    {
                        name: t('home.landRecordBlockChain'),
                        route: `/${props.language}/#${((t('home.landRecordBlockChain')).replace(/ /g,'')).toLowerCase()}`,
                    },
                    {
                        name: t('home.ehrBlockchain'),
                        route: `/${props.language}/#${((t('home.ehrBlockchain')).replace(/ /g,'')).toLowerCase()}`,
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
                        xs={12}
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
                            {_.map(socialMediaIcons, (item, i) => (
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        if (item.link) {
                                            window.open(item.link, '_blank');
                                        }
                                    }}
                                    className="mx-md-3 mx-1" key={i}
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
                            xs={12}
                            className="mb-xl-0 mb-md-4 mb-sm-3 mb-4"
                        >
                            <h3 className="h3 light-text-color mb-3">
                                {item.title}
                            </h3>
                            <ul className="lh-lg">
                                {_.map(item.list, (listItem) => (
                                    <li key={_.uniqueId()} className="mb-2">
                                        {listItem.route !== '#' && listItem.route.search('https') === -1 ? (
                                            <Link href={listItem.route}>
                                                <a className="light-text-color">
                                                    {listItem.name}
                                                </a>
                                            </Link>
                                        ) : (
                                            <a
                                                className="light-text-color"
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    if (listItem.route && listItem.route.search('https') !== -1) {
                                                        window.open(listItem.route, '_blank');
                                                    }
                                                }}
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
                <div className="copyrights-section d-md-flex justify-content-center align-items-center text-md-left text-center pb-3">
                    <span className="light-text-color">
                        {t('footer.copyRightsReserved')}
                    </span>                    
                    {/* <ul className="list-inline position-relative footer-after-line">
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
                    </ul> */}
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
