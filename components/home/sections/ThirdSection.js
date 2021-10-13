import React from 'react'
import _ from 'lodash'
import { Container,
    Row,
    Card,
    Col,
    Button,
    Navbar,
    Nav,
    NavDropdown,
    CardGroup,
    Image,} from 'react-bootstrap';
  
const ThirdSection = () => {
    return (
        <section className="home-section-3 py-5">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="h2 light-text-color mb-5">
                Our BlockChain Solutions
              </h2>
            </Col>

            <Col md={4}>
              <Card className="custom-card">
                <Card.Img variant="top" src="/images/solution-1.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h3 className="h3"> Obortech Smart Hub </h3>
                  </Card.Title>
                  <Card.Text>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt.
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <a href="" className="link-primary">
                    BLOCKCHAIN
                  </a>

                  <a href="">
                    <Image src="/icons/card-arrow.svg" alt="" />
                  </a>
                </Card.Footer>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="custom-card">
                <Card.Img variant="top" src="/images/solution-2.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h3 className="h3"> GDPR Compliance </h3>
                  </Card.Title>
                  <Card.Text>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt.
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <a href="" className="link-primary">
                    BLOCKCHAIN
                  </a>

                  <a href="">
                    <Image src="/icons/card-arrow.svg" alt="" />
                  </a>
                </Card.Footer>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="custom-card">
                <Card.Img variant="top" src="/images/solution-3.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h3 className="h3"> Live Ledger </h3>
                  </Card.Title>
                  <Card.Text>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt.
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <a href="" className="link-primary">
                    BLOCKCHAIN
                  </a>

                  <a href="">
                    <Image src="/icons/card-arrow.svg" alt="" />
                  </a>
                </Card.Footer>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="custom-card">
                <Card.Img variant="top" src="/images/solution-4.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h3 className="h3">True Title </h3>
                  </Card.Title>
                  <Card.Text>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt.
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <a href="" className="link-primary">
                    BLOCKCHAIN
                  </a>

                  <a href="">
                    <Image src="/icons/card-arrow.svg" alt="" />
                  </a>
                </Card.Footer>
              </Card>
            </Col>

            <Col md={8}>
              <Card className="custom-card">
                <Card.Img variant="top" src="/images/solution-5.jpg" />
                <Card.Body>
                  <Card.Title>
                    <h3 className="h3">Instasure</h3>
                  </Card.Title>
                  <Card.Text>
                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                    ullamco cillum dolor. Voluptate exercitation incididunt.
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between">
                  <a href="" className="link-primary">
                    BLOCKCHAIN
                  </a>

                  <a href="">
                    <Image src="/icons/card-arrow.svg" alt="" />
                  </a>
                </Card.Footer>
              </Card>
            </Col>

            <Col md={12} className="text-center my-5">
              <Button variant="primary" className="red-btn min-size-btn">
                View More
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

    )
}

export default ThirdSection