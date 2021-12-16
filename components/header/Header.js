import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import { MyImage } from '@components';
import images from '@components/images';
import HeaderContent from './HeaderContent';

const Header = (props) => {
    const router = useRouter(),
        t = i18next.t.bind(i18next),
        socialMediaIcons = [
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
                link: '#',
                icon: images.uTubeSVG
            }, {
                link: 'https://in.linkedin.com/company/chaincode-consulting-llp',
                icon: images.linkedInSVG
            }
        ];

    return (
        <header className={`fixed-top `}>
            {router.pathname === '/[lang]' && (
                <div className="header-top py-2">
                    <Container fluid>
                        <Row className="justify-content-between">
                            <Col md={9} className="topheader-text">
                                {t('header.headerInfo')}
                            </Col>
                            <Col
                                md={12}
                                lg={3}
                                className="text-center text-xs-center text-sm-center text-md-center text-lg-end"
                            >
                                <ul className="social-links pt-1">
                                    {_.map(socialMediaIcons, (item) => (
                                        <li key={_.uniqueId()}>
                                            <a
                                                href={item.link}
                                                onClick={(e) => item.link === '#' && e.preventDefault()}
                                            >
                                                <MyImage
                                                    {...item.icon}
                                                    height={18}
                                                    width={21}
                                                />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
            <HeaderContent {...props} />
        </header>
    );
};

export default Header;

Header.propTypes = { language: PropTypes.string };

Header.defaultProps = {
    language: '',
};
