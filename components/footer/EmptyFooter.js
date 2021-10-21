import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const EmptyFooter = () => {
    return (
        <footer className="contactus-footer py-1">
            <Container>
                <div className="copyrights-section d-md-flex justify-content-between align-items-center text-md-left text-center pt-1">
                    <span className="light-text-color">
                        ©ChainCode PTY LTD 2021. All rights reserved
                    </span>
                    <ul className="list-inline position-relative footer-after-line">
                        <li className="list-inline-item px-2">
                            <a href="#" className="light-text-color">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#" className="light-text-color">
                                Terms of Service & Rules
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default EmptyFooter;
