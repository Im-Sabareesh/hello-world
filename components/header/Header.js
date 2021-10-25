import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Button } from '@components';
import images from '@components/images';

const Header = () => {
    const router = useRouter(),
        { t } = useTranslation('common'),
        whiteLayout = ['about', 'contact'],
        [state, setState] = React.useState(''),
        socialMedisIcons = [
            '/assets/icons/facebook.svg',
            '/assets/icons/instagram.svg',
            '/assets/icons/twitter.svg',
            '/assets/icons/youtube.svg',
            '/assets/icons/wordpress.svg',
        ];

    const listenScrollEvent = (e) => {
        if (window.scrollY > 50) {
            setState('sticky');
        } else {
            setState('');
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
    }, []);

    return (
        <header className={`fixed-top ${state}`}>
            {router.pathname === '/' && (
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
                                        <li key={icon}>
                                            <a
                                                href="#"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <Image
                                                    src={icon}
                                                    alt=""
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

            <div
                className={`main-header py-3 ${
                    _.some(whiteLayout, (lay) => router.pathname.includes(lay))
                        ? 'inner-page-header'
                        : ''
                }`}
            >
                <Container>
                    <Row>
                        <Col sm={4} md={3} lg={2}>
                            <Link href="/">
                                <a>
                                    <Image
                                        src={images.logo}
                                        alt=""
                                        className={
                                            !state &&
                                            _.some(whiteLayout, (lay) =>
                                                router.pathname.includes(lay)
                                            )
                                                ? 'white-logo'
                                                : ''
                                        }
                                        width={120}
                                        height={72}
                                        loading="lazy"
                                    />
                                </a>
                            </Link>
                        </Col>

                        <Col sm={4} md={5} lg={8}>
                            <Navbar expand="lg" className="main-menu">
                                <Container fluid className="p-0">
                                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav className="me-auto">
                                            <Link href="/about">
                                                <a className="nav-link">
                                                    {t('header.aboutUS')}
                                                </a>
                                            </Link>
                                            {/* <Link href='/about'> */}
                                            <a
                                                href="#"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="nav-link"
                                            >
                                                {t('header.blockchainSolution')}
                                            </a>
                                            {/* </Link> */}
                                            {/* <Link href='/about'> */}
                                            <a
                                                href="#"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                className="nav-link"
                                            >
                                                {t('header.caseStudies')}
                                            </a>
                                            {/* </Link> */}
                                            <NavDropdown
                                                title="Services"
                                                id="basic-nav-dropdown"
                                            >
                                                <NavDropdown.Item>
                                                    <Link href="/services/NFTServices">
                                                        {t('nftDevelopement')}
                                                    </Link>
                                                </NavDropdown.Item>
                                                <NavDropdown.Item>
                                                    <Link href="/services/DefiServices">
                                                        {t('defiDevelopment')}
                                                    </Link>
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>

                        <Col
                            sm={4}
                            md={4}
                            lg={2}
                            className="text-end text-md-start d-sm-flex letstalk-btn mt-2"
                        >
                           <div>
                           <Button
                                btnVarient="red-btn"
                                onClick={() => {
                                    router.push('/contact');
                                }}
                            >
                                {t('letsTalk')}
                            </Button>
                           </div>
                           <div className="search-margin">
                           <a
                                href="#"
                                className="ms-2 header-search pt-1"
                                onClick={(e) => e.preventDefault()}
                            >
                                <Image
                                    src={images.searchIcon}
                                    alt=""
                                    className={
                                        !state &&
                                        _.some(whiteLayout, (lay) =>
                                            router.pathname.includes(lay)
                                        )
                                            ? 'white-logo'
                                            : ''
                                    }
                                    width={17}
                                    height={17}
                                />
                            </a>
                           </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </header>
    );
};

export default Header;

Header.propTypes = {};

Header.defaultProps = {};
