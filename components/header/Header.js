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
        socialMedisIcons = [
            images.fbSVG,
            images.instaSVG,
            images.twitterSVG,
            images.uTubeSVG,
            images.wpSVG,
            images.linkedInSVG,
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
                                    {_.map(socialMedisIcons, (icon) => (
                                        <li key={_.uniqueId()}>
                                            <a
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <MyImage
                                                    {...icon}
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
