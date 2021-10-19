import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
    Container,
    Row,
    Col,
    Image,
} from 'react-bootstrap';

export default function SectionOne({data}) {

    return (
        <section className="home-section1 py-5">
            <Container>
                <Row>
                    <Col md={12} lg={6} className="mt-5">
                        <h2 className="dark-text-color mb-4 h2">
                            How Blockchain Enhances Your Business
                        </h2>

                        <p>
                            Blockchain for business uses a shared and
                            immutable ledger that can only be accessed by
                            members with permission. Network members control
                            what information each organization or member may
                            see, and what actions each can take. Blockchain
                            is sometimes called a trustless network not
                            because business partners don’t trust each
                            other, but because they don’t have to.
                        </p>
                    </Col>

                    <Col
                        md={12}
                        lg={6}
                        className="mt-5 text-end text-lg-end text-md-center"
                    >
                        <Image
                            src="/assets/images/home-section1-img.png"
                            alt=""
                        />
                    </Col>

                    <div className="mt-5 mb-3">
                        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-1 justify-content-center mt-2">
                            {_.map(data, (item) => (
                                <Col
                                    key={_.uniqueId()}
                                    className="home-section-icons d-flex align-items-center justify-content-center text-center"
                                >
                                    <div>
                                        <p>
                                            <Image src={item.icon} alt="" />
                                        </p>
                                        <h3 className="h3 dark-text-color mb-0">
                                            {item.name}
                                        </h3>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Row>
            </Container>
        </section>
    )
}