import React from 'react'
import _ from 'lodash'
import {Container, Row, Col, Image} from 'react-bootstrap';

 const SecondSection = () => {
     const services = [
        { 
            icon: "/icons/service-icon1.png",
            title: "Decentraized Finance",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        },
        { 
            icon: "/icons/service-icon2.png",
            title: "Non Fungible Tokens",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        },
        { 
            icon: "/icons/service-icon3.png",
            title: "Binance Smart Chain",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        },
        { 
            icon: "/icons/service-icon2.png",
            title: "Website Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        },
        { 
            icon: "/icons/service-icon3.png",
            title: "Mobile App Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        },
        { 
            icon: "/icons/service-icon6.png",
            title: "AI Technology",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum."
        },
    ]
     return (
        <section className="home-section-2 py-5">
        <Container>
          <Row>
            <Col md={8} className="mx-auto text-center mb-2">
              <h2 className="h2 dark-text-color"> Services We Offer </h2>

              <p>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum.
              </p>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
           {_.map(services, service=> (
            <Col key={service.title} md={4} className="service-thumb text-center mt-5">
              <p> <Image src={service.icon} alt="" /> </p>
              <h3 className="dark-text-color">{service.title}</h3>
              <p> {service.description} </p>
            </Col>
           )) }
          </Row>
        </Container>
      </section>
     )
 }

 export default SecondSection
