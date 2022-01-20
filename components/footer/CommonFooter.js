import React from 'react';
import Link from 'next/link';
import _ from 'lodash';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';

import { Paragraph, MyImage } from '@components';
import images from '@components/images';

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
const RadiusFooter = (props) => {
    const t = i18next.t.bind(i18next),
        footerLinkList = [
            {
                title: t('footer.ourServices'),
                lgStyle: 3,
                list: [
                    {
                        name: `${t('enterpriseBlockChainConsulting')}`,
                        route: '/services/blockchain-consulting',
                    },
                    {
                        name: `${t('hdfDevelopment')}`,
                        route: '/services/hyperledger-fabric-development',
                    },
                    {
                        name: `${t('nftDevelopement')}`,
                        route: '/services/nft-development',
                    },
                    {
                        name: `${t('defiDevelopment')}`,
                        route: '/services/defi-development',
                    },
                    {
                        name: t('home.gdprCompliance'),
                        route: '/services/gdpr-compliance',
                    },
                    {
                        name: t('rpaDevelopment'),
                        route: '/services/rpa-development',
                    },
                ],
            },
            {
                title: t('footer.expertSolutions'),
                lgStyle: 2,
                list: [
                    {
                        name: t('home.obortechHub'),
                        route: 'https://www.obortech.io/',
                    },
                    {
                        name: t('home.gdprCompliance'),
                        route: `/#${((t('home.gdprCompliance')).replace(/ /g,'')).toLowerCase()}`,
                    },
                    {
                        name: t('liveLedger'),
                        route: `/#${((t('liveLedger')).replace(/ /g,'')).toLowerCase()}`,
                    },
                    {
                        name: t('trueTitle'),
                        route: '#',
                    },
                    {
                        name: t('home.blockChainEHR'),
                        route: '#',
                    },
                ],
            },
            {
                title: t('connectWithUs'),
                lgStyle: { span: 2, offset: 1 },
                list: [
                    {
                        name: t('contactUs'),
                        route: `/contact`,
                    },
                    {
                        name: t('career'),
                        route: `/careers`,
                    },
                    {
                        name: t('footer.moreAboutUs'),
                        route: `/about`,
                    }
                ],
            },
        ];

    return (
        <footer className={`${props.radius && 'home-footer'} ${props.whitebg ? 'white-footer-section' : 'footer-section'}`}>
            <Container>
                <Row className="py-5 pb-1">
                    {/* align center added for home page  */}
                    <Col
                        xs={6}
                        sm={6}
                        md={12}
                        lg={4}
                        className={`${
                            !props.radius
                                ? 'text-md-center'
                                : 'home-footer-logo text-md-center'
                        } mb-5 mb-md-5 mb-sm-3 mb-xs-3`}
                    >
                        <Link href={`/${props.language}/`}>
                            <a
                                // onClick={(e) => e.preventDefault()}
                                className="brand-logo"
                            >
                                 {props.whitebg ? 
                                    <MyImage
                                        src={images.logo}
                                        alt="..."
                                        width={120}
                                        height={120}
                                        className="whitefooter-logo"
                                    /> :
                                    <MyImage
                                        src={images.ccWhiteLogo}
                                        alt="..."
                                        width={219}
                                        height={140}
                                    />
                                }
                            </a>
                        </Link>
                        <Paragraph className="light-text-color text-shadow mt-2">
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
                                    <li key={_.uniqueId()} className="mb-2 cursor-pointer">
                                        {listItem.route !== '#' && listItem.route.search('https') === -1 ? (
                                            <Link
                                                href={`/${props.language}${listItem.route}`}
                                            >
                                                <a className="light-text-color">
                                                    {listItem.name}
                                                </a>
                                            </Link>
                                        ) : (
                                            <a
                                                className="light-text-color"
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

                    {props.radius && (
                        <div className="backtotop">
                            <a
                                href="#"
                                className="text-uppercase"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.body.scrollTop =
                                        document.documentElement.scrollTop = 0;
                                }}
                            >
                                <div className="arrow-bg">
                                    <MyImage
                                        src={images.upArrow}
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
                        {t('footer.copyRightsReserved')}
                    </span>
                </div>
            </Container>
        </footer>
    );
};

export default RadiusFooter;

RadiusFooter.propTypes = {
    radius: PropTypes.bool,
    language: PropTypes.string,
};

RadiusFooter.defaultProps = {
    radius: false,
    language: '',
};
