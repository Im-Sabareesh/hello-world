import React from 'react';
import _ from 'lodash';
import Link from 'next/link';

import {Container, Row, Col, Image } from 'react-bootstrap';

const TopLogoFooter  = () => {

    const footerLinkList = [
        {
            title: 'Our Services' ,
            style:{
                xl: { span: 3, offset: 2 },
                lg: { span: 3, offset: 2 }
            },
            list: [{
                    name: 'Decentralized Finance',
                    route: '/services/DefiServices'
                }, {
                    name: 'Non Fungible Tokens',
                    route: '/services/DefiServices'
                }, {
                    name: 'Binance Smart Chain',
                    route: '#'
                }, {
                    name: 'App Development',
                    route: '#'
                }, {
                    name: 'Web Development',
                    route: '#'
                }
            ]
        },
        {
            title: 'Expert Solutions' ,
            style:{
                xl: 3,
                lg: 3
            },
            list: [{
                    name: 'Live Ledger',
                    route: '#'
                }, {
                    name: 'True Title',
                    route: '#'
                }, {
                    name: 'Instasure',
                    route: '#'
                }
            ]
        },
        {
            title: 'Connect With Us' ,
            style:{
                xl: 3,
                lg: 3
            },
            list: [
                {
                    name: 'Contact Us',
                    route: '/contact'
                }, {
                    name: 'Career',
                    route: '/careers'
                }, {
                    name: 'More About Us',
                    route: '/about'
                }, {
                    name: 'Blog',
                    route: '#'
                }
            ]
        },
    ];

    return (
        <footer className="footer-section nft-page-footer">
        <Container>
            <Row className="py-md-5 py-4">
                <Col xl={12} lg={12} md={12} sm={6} xs={12} className="text-md-center mb-xl-5 pb-xl-5 mb-md-4 mb-3 pb-md-3 ">
                    <a href="#" onClick={e => e.preventDefault()} className="brand-logo">
                        <Image src="/icons/cc-white-logo.svg" className="mb-md-4 mb-sm-3 mb-4" alt=" "/>
                    </a>
                    <p className="light-text-color text-shadow mb-md-3 mb-2">Follow Us</p>
                    <div className="social-icons">
                        <a href="#" onClick={e => e.preventDefault()} className="mx-3"><Image src="/icons/facebook.svg"  alt=" "/></a>
                        <a href="#" onClick={e => e.preventDefault()} className="mx-3"><Image src="/icons/instagram.svg"  alt=" "/></a>
                        <a href="#" onClick={e => e.preventDefault()} className="mx-3"><Image src="/icons/twitter.svg"  alt=" "/></a>
                        <a href="#" onClick={e => e.preventDefault()} className="mx-3"><Image src="/icons/youtube.svg" alt=" " /></a>
                        <a href="#" onClick={e => e.preventDefault()} className="mx-3"><Image src="/icons/wordpress.svg" alt=" "/></a>
                    </div>
                </Col>

                {_.map(footerLinkList, (item) => (
                    <Col key={_.uniqueId()} xl={item.style.xl} lg={item.style.lg} md={4} sm={6} xs={12} className="mb-xl-0 mb-md-4 mb-sm-3 mb-4">
                        <p className="h3 light-text-color mb-3">{item.title}</p>
                        <ul className="lh-lg">
                            {_.map(item.list, (listItem) => (
                                <li key={_.uniqueId()} className="mb-2">
                                    { listItem.route !== '#' ?
                                        <Link href={listItem.route}>
                                            <a className="light-text-color">
                                                {listItem.name}
                                            </a>
                                        </Link> :
                                        <a className="light-text-color" href="#" onClick={e => e.preventDefault()}>
                                            {listItem.name}
                                        </a>
                                    }
                                </li>
                            ))}
                        </ul>
                    </Col>
                ))}
            </Row>
            <div className="copyrights-section d-md-flex justify-content-between align-items-center text-md-left text-center pb-3">
                <span className="light-text-color">©ChainCode PTY LTD 2021. All rights reserved</span>
                <ul className="list-inline position-relative footer-after-line">
                    <li className="list-inline-item px-2"><a href="#" onClick={e => e.preventDefault()} className="light-text-color">Privacy Policy</a></li>
                    <li className="list-inline-item"><a href="#" onClick={e => e.preventDefault()} className="light-text-color">Terms of Service & Rules</a></li>
                </ul>
            </div>
        </Container>
      </footer>
    )
}


export default TopLogoFooter