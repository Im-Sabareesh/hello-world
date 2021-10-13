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
  
const SixthSection = () => {
    return (

      <section className="home-section-6 py-5">
      <Container>
        <Row>
          <Col md={12} className="text-center mb-5">
            <h2 className="h2">Quick Stats</h2>
          </Col>

          <Col xs={6} md={2} className="counter-thumb text-center mt-3">
            <p className="mb-4">
              <Image src="/icons/industry-awards.svg" alt="..." />
            </p>

            <p className="mb-1">
              <span> 150+ </span>
            </p>

            <p>
              <strong> Industry Awards </strong>
            </p>
          </Col>

          <Col xs={6} md={2} className="counter-thumb text-center mt-3">
            <p className="mb-4">
              <Image src="/icons/projects.svg" alt="..." />
            </p>

            <p className="mb-1">
              <span> 150+ </span>
            </p>

            <p>
              <strong> Projects </strong>
            </p>
          </Col>

          <Col xs={6} md={2} className="counter-thumb text-center mt-3">
            <p className="mb-4">
              <Image src="/icons/offices.svg" alt="..." />
            </p>

            <p className="mb-1">
              <span> 4</span>
            </p>

            <p>
              <strong>Offices </strong>
            </p>
          </Col>

          <Col xs={6} md={2} className="counter-thumb text-center mt-3">
            <p className="mb-4">
              <Image src="/icons/happy-clients.svg" alt="..." />
            </p>

            <p className="mb-1">
              <span> 500 </span>
            </p>

            <p>
              <strong>Happy Clients</strong>
            </p>
          </Col>

          <Col xs={6} md={2} className="counter-thumb text-center mt-3">
            <p className="mb-4">
              <Image src="/icons/certified-pmp.svg" alt="..." />
            </p>

            <p className="mb-1">
              <span> 4</span>
            </p>

            <p>
              <strong>Certified PMP</strong>
            </p>
          </Col>

          <Col xs={6} md={2} className="counter-thumb text-center mt-3">
            <p className="mb-4">
              <Image src="/icons/mm-lines-of-code.svg" alt="..." />
            </p>

            <p className="mb-1">
              <span> 100</span>
            </p>

            <p>
              <strong>MM Lines of Code</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    )
}
export default SixthSection;