import React from 'react';
import _ from 'lodash';

import {
    Container,
    Row,
    Col,
    Button,
    Image,
    Form,
  } from "react-bootstrap";
  
const ContactComponent = () => {

  const branchList = [
      {
          location: 'India',
          address: {
            building: 'Sco 362, Top Floor',
            town: '',
            city: 'Sector 44D, Chandigarh'
          },
          phone: '+91-9646579412',
          mailID: 'info@chaincodeconsulting.com'
      }, {
          location: 'USA',
          address: {
            building: '1495 Lake Ave',
            town: '',
            city: 'Rochester, New York – 14615'
          },
          phone: '+1-585-633-7642',
          mailID: 'iinfo@chaincodeconsulting.com'
      }, {
          location: 'Canada',
          address: {
            building: '226 Acadie Avenue',
            town: 'Dieppe',
            city: 'E1A 1G5 New Brunswick'
          },
          phone: '+1-506-500-5950',
          mailID: 'info@chaincodeconsulting.com'
      }
  ];

  return (
    <>
        {/*--------------- Contactus banner start ---------- */}

        <section className="contactus-banner">
        <Container>
            <div className="contactus-inner-banner">
            <Row>
                <Col>
                <div className="light-text-color text-center w-50 mx-auto">
                    <h1 className="h1 light-text-color">Contact us</h1>
                    <p>
                    lets start something great togeather. Connect with one of the experts from the team today !
                    </p>
                </div>
                </Col>
            </Row>
            </div>
        </Container>
        </section>

        {/*--------------- Contactus banner end ---------- */}

        {/*--------------- Contactus container start---------- */}

        <div className="contactus-container mt-5 pt-5">
        <section className="contactform py-5">
            <Container>
            <Row>
                <Col md={6} lg={6}>
                <p className="contact-img mb-5">
                    <Image src="/images/contactus.svg" alt=" " />
                </p>

                <div className="contact-small-section pt-4">
                    <h3 className="h3">About Us</h3>
                    <p className="mb-0">
                    Chaincode consulting is an Enterprise Blockchain development
                    and consulting firm. We are a team of highly experienced
                    developers.
                    <a href="#"> Read more</a>
                    </p>
                </div>

                <div className="contact-small-section contact-small-section-contact pt-4">
                    <h3 className="h3">Contact Us</h3>
                    <p>
                    <Image src="/icons/contact-phone.svg" alt=" " className="me-2" />
                    <a href="tel:+91-9646579412">+91-9646579412</a>
                    </p>

                    <p>
                    <Image src="/icons/contact-email.svg" alt=" " className="me-2" />
                    <a href="mailto:info@chaincodeconsulting.com">
                        info@chaincodeconsulting.com
                    </a>
                    </p>
                </div>

                <div className="contact-small-section pt-4">
                    <h3 className="h3">Follow Us </h3>
                    <p className="contactus-sociallinks">
                    <a href="#">
                        <Image src="/images/fb-p.png" alt="" />
                    </a>
                    <a href="#">
                        <Image src="/images/insta-p.png" alt="" />
                    </a>
                    <a href="#">
                        <Image src="/images/twitter-p.png" alt="" />
                    </a>
                    <a href="#">
                        <Image src="/images/youtube-p.png" alt="" />
                    </a>
                    <a href="#">
                        <Image src="/images/wp-p.png" alt="" />
                    </a>
                    </p>
                </div>
                </Col>

                <Col md={6} lg={6}>
                <h2 className="h2"> Get In Touch </h2>

                <p className="getintouch-txt mb-1">
                    To request a quote, contact us directly or fill out the form
                    and we will get back to you within 24 hours. We will keep your
                    information confidential.
                </p>

                <div className="getintouch-form mt-5">
                    <Form>
                    <Form.Group className="form-group" controlId="">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group className="form-group" controlId="">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>

                    <Form.Group
                        className="form-group select-field"
                        controlId=""
                    >
                        <Form.Label>Service you are interested in </Form.Label>
                        <Form.Select
                        aria-label="Default select example"
                        className="form-control select"
                        >
                        <option>Select service</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control
                        as="textarea"
                        className="msg-field"
                        rows={3}
                        />
                    </Form.Group>

                    <Form.Group className="button-outer">
                        <Button
                        variant="primary"
                        className="red-btn red-btn-shadow btn-lg"
                        type="submit"
                        >
                        Send Message
                        </Button>
                    </Form.Group>
                    </Form>
                </div>
                </Col>
            </Row>
            </Container>
        </section>

        <section className="ouroffice-container py-5">
          <Container>
            <Row>
              <Col className="text-center">
                <h2 className="h2 mb-5"> Our Offices </h2>

                <div className="ouroffice-banner">
                    <Image src="/images/contactus.jpg" alt="" />
                </div>
              </Col>

              {_.map(branchList, (item) => (                  
                <Col md={4} lg={4} key={_.uniqueId()} className="d-flex mt-5">
                  <div className=" mt-1 me-3 flex-shrink-0">
                      <Image src="/icons/mappin.svg" alt=" " />
                  </div>
                  <div className="address-cont ml-2 flex-shrink-0">
                      <h2 className="h2 mb-3"> {item.location} </h2>
                      <p className="address-txt">
                        {item.address.building}
                        {item.address.town !== '' && <> <br /> {item.address.town}</>}
                        <br />
                        {item.address.city}
                      </p>
                      <div className="contact-small-section contact-small-section-contact pt-3">
                        <p>
                            <Image src="/icons/contact-phone.svg" alt=" " className="me-2"  />
                            <a href="tel:+91-9646579412">{item.phone}</a>
                        </p>

                        <p>
                            <Image src="/icons/contact-email.svg" alt=" " className="me-2"  />
                            <a href="mailto:info@chaincodeconsulting.com">{item.mailID}</a>
                        </p>
                      </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        </div>

        {/*--------------- Contactus container end---------- */}
    </>
  )
}

export default ContactComponent