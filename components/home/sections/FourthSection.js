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

const FourthSection = () => {
    return (

      <section className="home-section-4 py-5">
      <Container>
        <div className="cta-banner cta-banner1 d-flex align-items-center">
          <div className="cta-txt">
            <h2 className="h2">Ready to Get Started?</h2>
            <Button variant="primary" className="red-btn min-size-btn">
              Get a quote
            </Button>
          </div>

          <div>
            <Image src="/icons/Arrow.svg" alt="" />
          </div>
        </div>
      </Container>
    </section>
    )
}

export default FourthSection