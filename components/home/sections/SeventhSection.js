import React from 'react'
import _ from 'lodash'
import {
    Container,
    Row,
    Card,
    Col,
    Button,
    Navbar,
    Nav,
    NavDropdown,
    CardGroup,
    Image
} from "react-bootstrap";
const SeventhSection = () => {
    return (

        <section className="home-section-7 my-5">

            <Container>

                <Row className="align-items-center">

                    <Col md={12}
                        className="text-center">

                        <h2 className="h2 my-4">
                            We Work with
                        </h2>

                    </Col>

                    <Col md={4}
                        className="workwithus-txt mt-3">

                        <h1 className="h1 secondary-text-color mb-3">
                            121,000+
                        </h1>
                        <p>
                            customers in over 120 countries growing their businesses with Blockchain Consulting
                        </p>

                    </Col>


                    <Col md={8}
                        className="workwithus-txt  mt-3">

                        <Image src="/images/we-work.png"/>

                    </Col>

                </Row>


            </Container>


        </section>


    )
}

export default SeventhSection
