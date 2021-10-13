import React from "react";
import _ from 'lodash'
import {Container, Row, Col, Image} from "react-bootstrap";

const FifthSection = () => {
    const choseses = [
        {
            icon: "/icons/whychoose-icon1.svg",
            title: "Focus on Innovation",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }, {
            icon: "/icons/whychoose-icon2.svg",
            title: "True Partners",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }, {
            icon: "/icons/whychoose-icon3.svg",
            title: "DevOps",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }, {
            icon: "/icons/whychoose-icon4.svg",
            title: "Dedicated Teams",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
    ]

    return (
        <section className="home-section-5 py-5">
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src="/images/blockchain-business.png"/>
                    </Col>

                    <Col md={6}>
                        <h2 className="h2 mb-4">
                            Why Choose Us
                        </h2>

                        <p>
                            It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The
                            point of using Lorem Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using &apos;Content here,
                            content here&apos;, making it look like readable English.
                        </p>

                        <p>
                            Many desktop publishing packages and web page editors now use
                            Lorem Ipsum as their default model text, and a search for
                            &apos;lorem ipsum&apos; will uncover many web sites still in their
                            infancy.
                        </p>
                    </Col>

                    {
                    _.map(choseses, choose => (
                        <Col key={_.uniqueId()} md={6}
                            className="mt-4">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <Image src={
                                            choose.icon
                                        }
                                        alt="..."/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h3 className="h3 mb-3">
                                        {
                                        choose.title
                                    } </h3>
                                    <p> {
                                        choose.description
                                    } </p>
                                </div>
                            </div>
                        </Col>
                    ))
                } </Row>
            </Container>
        </section>
    );
};

export default FifthSection;
