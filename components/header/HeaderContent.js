import React from 'react';
import _ from 'lodash';
import { useRouter } from 'next/router';
import Link from 'next/link';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Button, MyImage } from '@components';
import images from '@components/images';

import HeaderSearchComponent from './HeaderSearchComponent';

const HeaderContent = (props) => {
    const [isToggled, setIsToggled] = React.useState(false);
    const [state, setState] = React.useState('');
    const [search, setSearch] = React.useState(false);
    const nodes = React.useRef();
    const router = useRouter(),
        t = i18next.t.bind(i18next),
        whiteLayout = ['about', 'contact'];
    const listenScrollEvent = (e) => {
        if (window.scrollY > 50) {
            setState('sticky');
        } else {
            setState('');
        }
    };

    const dropDownItems = [
        {
            name: `${t('enterpriseBlockChainConsulting')}`,
            navPath: `/${props.language}/services/blockchain-consulting`,
        },
        {
            name: `${t('hdfDevelopment')}`,
            navPath: `/${props.language}/services/hyperledger-fabric-development`,
        },
        {
            name: `${t('nftDevelopement')}`,
            navPath: `/${props.language}/services/nft-development`,
        },
        {
            name: `${t('defiDevelopment')}`,
            navPath: `/${props.language}/services/defi-development`,
        },
        {
            name: t('gdprDevelopement'),
            navPath: `/${props.language}/services/gdpr-development`,
        },
        {
            name: t('rpaDevelopment'),
            navPath: `/${props.language}/services/rpa-development`,
        },
    ];

    const onToggled = (e) => {
        setIsToggled(e);
    };

    const handleClick = (e) => {
        if (nodes.current.contains(e.target)) {
            // if clicked inside menu do something
        } else {
            // If clicked outside menu, close the navbar.
            setIsToggled(false);
        }
    };

    const closeMenu = () => {
        if (typeof window !== 'undefined' && window.innerWidth <= 990) {
            $('.btn-navbar').click(); //bootstrap 2.x
            $('.navbar-toggle').click(); //bootstrap 3.x by Richard
            $('.navbar-toggler').click(); //bootstrap 4.x
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', handleClick, false);
        window.addEventListener('scroll', listenScrollEvent);

        return () => {
            document.removeEventListener('click', handleClick, false);
        };
    }, []);
    return (
        <div className={`${state}`}>
            <div
                className={`main-header py-2 ${
                    _.some(whiteLayout, (lay) => router.pathname.includes(lay))
                        ? 'inner-page-header'
                        : ''
                }`}
            >
                <Container>
                    <Row>
                        <Col sm={4} md={3} lg={2}>
                            <Link href={`/${props.language}/`}>
                                <a>
                                    <MyImage
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

                        <Col sm={4} md={5} lg={5}>
                            <div ref={nodes}>
                                <Navbar
                                    expand="lg"
                                    id="header-navbar"
                                    className="main-menu"
                                    onToggle={(e) => {
                                        onToggled(e);
                                    }}
                                    expanded={isToggled}
                                >
                                    <Container fluid className="p-0">
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="me-auto">
                                                <NavDropdown
                                                    title="Services"
                                                    id="basic-nav-dropdown"
                                                >
                                                    {_.map(
                                                        dropDownItems,
                                                        (navItem, i) => {
                                                            return (
                                                                <NavDropdown.Item
                                                                    key={_.uniqueId()}
                                                                    className={
                                                                        router.asPath.includes(
                                                                            navItem.navPath
                                                                        )
                                                                            ? 'nav-active'
                                                                            : ''
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            navItem.navPath
                                                                        }
                                                                    >
                                                                        {
                                                                            navItem.name
                                                                        }
                                                                    </Link>
                                                                </NavDropdown.Item>
                                                            );
                                                        }
                                                    )}
                                                </NavDropdown>
                                                {/* <Link href='/about'> */}
                                                {/* <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        closeMenu();
                                                    }}
                                                    className="nav-link"
                                                >
                                                    {t(
                                                        'header.blockchainSolution'
                                                    )}
                                                </a> */}
                                                {/* </Link> */}
                                                {/* <Link href='/about'> */}
                                                {/* <a
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        closeMenu();
                                                    }}
                                                    className="nav-link"
                                                >
                                                    {t('header.caseStudies')}
                                                </a> */}
                                                {/* </Link> */}

                                                <Link
                                                    href={`/${props.language}/careers`}
                                                >
                                                    <a
                                                        className="nav-link"
                                                        onClick={(e) => {
                                                            // e.preventDefault();
                                                            closeMenu();
                                                        }}
                                                    >
                                                        {t('career')}
                                                    </a>
                                                </Link>

                                                <Link
                                                    href={`/${props.language}/about`}
                                                >
                                                    <a
                                                        className="nav-link"
                                                        onClick={(e) => {
                                                            // e.preventDefault();
                                                            closeMenu();
                                                        }}
                                                    >
                                                        {t('header.aboutUS')}
                                                    </a>
                                                </Link>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </div>
                        </Col>

                        <Col
                            sm={4}
                            md={4}
                            lg={5}
                            className="text-end text-md-end d-sm-flex justify-content-lg-end
                            letstalk-btn mt-2"
                        >
                            <HeaderSearchComponent state={state} language={props.language}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default HeaderContent;
