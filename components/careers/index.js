import React from 'react';
import _ from 'lodash';
import Link from 'next/link';

import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";

const CareersComponent = () => {

    const vacantListSec3 = [
        {
            designation: 'User Experience Designer',
            describe: 'As entrepreneurs ourselves, we’d',
            location: 'Pune, Maharashtra',
            posts: '2 months ago',
            link: '/careers/careerDetails'
        }, {
            designation: 'Affiliate Marketing Manager',
            describe: 'As entrepreneurs ourselves, we’d',
            location: 'Pune, Maharashtra',
            posts: '2 months ago',
            link: '/careers/careerDetails'
        }, {
            designation: 'Affiliate Marketing Manager',
            describe: 'As entrepreneurs ourselves, we’d',
            location: 'Pune, Maharashtra',
            posts: '2 months ago',
            link: '/careers/careerDetails'
        }, {
            designation: 'Affiliate Marketing Manager',
            describe: 'As entrepreneurs ourselves, we’d',
            location: 'Pune, Maharashtra',
            posts: '2 months ago',
            link: '/careers/careerDetails'
        }
    ];

  return (
    <>
      {/*--------------- Careers hero section start---------- */}

      <section className="career-hero-banner">
      <Container>
          <Row>
              <Col>
                  <div className="text-center w-50 mx-auto">
                      <h1 className="h1">Join our Team</h1>
                      <p>Help us on the quest of making good software even better.</p>
                      <div className="button-outer mx-auto mt-md-3 pt-md-3">
                          <Button variant="primary" className="red-btn">
                          See Current Openings
                          </Button>
                      </div>
                  </div>
              </Col>
          </Row>
      </Container>
      </section>

      {/*--------------- Careers hero section end ---------- */}

      {/*--------------- career-section1 start---------- */}

      <section className="career-section1  py-xl-5 py-4">
      <Container>
          <Row>
              <Col xl={5} md={12} sm={12} className="dark-secondary-text-color">
                  <h1 className="h1 mb-md-4 pb-md-3 mb-2 pb-2 ">Why Chaincode Consulting ?</h1>
                  <p className="h3 lh-base mb-3 fw-normal">We are always looking for driven, interesting, and capable individules to join our team. In addition to our agaency business, we have several in-house projects and companies.</p>
                  <p className="h3 lh-base mb-3 fw-normal">If you think you fit the bill, then we’d like to chat.</p>
                  <a href="#" className="h3 dark-secondary-text-color"><b>Check out the opportunities below.</b></a>
              </Col>
              <Col xl={{ span: 6, offset: 1 }} md={12} sm={12} className="my-auto">
                  <ul className="listing-div">
                      <li className="h3 fw-normal"><span className="h2 purple-gradient-text-color">01</span>Blockchain is changing the way the world lives and works.</li>
                      <li className="h3 fw-normal"><span className="h2 purple-gradient-text-color">02</span>Blockchain is changing the way the world lives and works.</li>
                      <li className="h3 fw-normal"><span className="h2 purple-gradient-text-color">03</span>Blockchain is changing the way the world lives and works.</li>
                      <li className="h3 fw-normal"><span className="h2 purple-gradient-text-color">04</span>Blockchain is changing the way the world lives and works.</li>
                      <li className="h3 fw-normal"><span className="h2 purple-gradient-text-color">05</span>Blockchain is changing the way the world lives and works.</li>
                  </ul>
              </Col>
          </Row>
      </Container>
      </section>

      {/*--------------- career-section1 end ---------- */}


      {/*--------------- career-section2 start---------- */}

      <section className="career-section2  py-xl-5 py-4">
      <Container>
          <h1 className="h2 mb-md-4 pb-md-3 mb-2 pb-2 dark-secondary-text-color text-center">Job Listings</h1>
          <Row>
              <Col sm={12}>
                  <div className="w-1k-block bg-light-primary mx-auto p-lg-4 p-3">
                  <Form className="d-flex flex-wrap justify-content-between p-3">
                      <Form.Group className="form-field search-field md-margin" controlId="formGroupsearch">
                          {/* <Form.Label>Email address</Form.Label> */}
                          <Form.Control type="text" placeholder="Search by Keyword" />
                      </Form.Group>
                      <Form.Group as={Col} className="form-field md-margin" controlId="formGridCategory">
                          {/* <Form.Label>State</Form.Label> */}
                          <Form.Select defaultValue="Category">
                          <option>Category</option>
                          <option>...</option>
                          </Form.Select>
                      </Form.Group>
                      <Form.Group as={Col} className="form-field" controlId="formGridJobType">
                          {/* <Form.Label>State</Form.Label> */}
                          <Form.Select defaultValue="Job Type">
                          <option>Job Type</option>
                          <option>...</option>
                          </Form.Select>
                      </Form.Group>
                      <Form.Group as={Col} className="form-field" controlId="formGridLocation">
                          {/* <Form.Label>State</Form.Label> */}
                          <Form.Select defaultValue="Location">
                          <option>Location</option>
                          <option>...</option>
                          </Form.Select>
                      </Form.Group>
                  </Form>
                  </div>
              </Col>
          </Row>
      </Container>
      </section>

      {/*--------------- career-section2 end ---------- */}

      {/*--------------- career-section3 start---------- */}

      <section className="career-section3">
      <Container>
          <Row>
                <Col sm={12}>
                    {_.map(vacantListSec3, (item) => (
                        <div key={_.uniqueId()} className="w-1k-block bg-light-primary mx-auto p-lg-4 p-3 mb-lg-4 mb-md-4 mb-3">
                            <div className="job-listing p-3  d-flex justify-content-between align-items-center flex-lg-nowrap flex-wrap">
                                <div className="job-position">
                                    <p className="h3">{item.designation}</p>
                                    <span>{item.describe}</span>
                                </div>
                                <div className="job-info d-flex justify-content-between align-items-center">
                                    <div className="job-location">
                                        <p className="h3">Location</p>
                                        <span>{item.location}</span>
                                    </div>
                                    <div className="job-posted">
                                        <p className="h3">Posted</p>
                                        <span>{item.posts}</span>
                                    </div>
                                    <Link href={item.link}>
                                        <Button variant="primary" className="gradient-btn">
                                            Read More
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Col>
          </Row>
      </Container>
      </section>

      {/*--------------- career-section3 end ---------- */}


      {/*--------------- footer section start ---------- */}

      {/* <footer className="footer-section bg-gradient-secondary">
      <Container>
          <Row className="py-md-5 py-4">
              <Col xl={4} lg={3} md={6} sm={6} xs={12} className="text-xl-center mb-xl-0 mb-md-4 mb-3">
                  <a href="#" className="brand-logo">
                      <Image src="icons/cc-white-logo.svg" className="mb-md-4 mb-sm-3 mb-4"/>
                  </a>
                  <p className="light-text-color text-shadow mb-md-3 mb-2">Follow Us</p>
                  <div className="social-icons">
                      <a href="#" className="mx-2"><Image src="icons/facebook.svg" /></a>
                      <a href="#" className="mx-2"><Image src="icons/instagram.svg" /></a>
                      <a href="#" className="mx-2"><Image src="icons/twitter.svg" /></a>
                      <a href="#" className="mx-2"><Image src="icons/youtube.svg" /></a>
                  </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={6} xs={12} className="mb-xl-0 mb-md-4 mb-sm-3 mb-4">
              <p className="h3 light-text-color mb-3">Our Services</p>
                  <ul className="lh-lg">
                      <li className="mb-2"><a href="#" className="light-text-color">Decentralized Finance</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">Non Fungible Tokens</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">Binance Smart Chain</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">App Development</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">Web Development</a></li>
                  </ul>
              </Col>
              <Col xl={2} lg={3} md={6} sm={6} xs={12} className="mb-xl-0 mb-md-4 mb-sm-3 mb-4">
              <p className="h3 light-text-color mb-3">Expert Solutions</p>
                  <ul className="lh-lg">
                      <li className="mb-2"><a href="#" className="light-text-color">Live Ledger</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">True Title</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">Instasure</a></li>
                  </ul>
              </Col>
              <Col xl={{ span: 2, offset: 1 }} lg={3} md={6} sm={6} xs={12} className="mb-xl-0 mb-md-4 mb-sm-3 mb-4">
              <p className="h3 light-text-color mb-3">Connect With Us</p>
                  <ul className="lh-lg">
                      <li className="mb-2"><a href="#" className="light-text-color">Contact Us</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">Career</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">More About Us</a></li>
                      <li className="mb-2"><a href="#" className="light-text-color">Blog</a></li>
                  </ul>
              </Col>
          </Row>
          <div className="copyrights-section d-md-flex justify-content-between align-items-center text-md-left text-center pt-xl-5 pt-lg-3 pb-3">
              <span className="light-text-color">©ChainCode PTY LTD 2021. All rights reserved</span>
              <ul className="list-inline position-relative footer-after-line">
                  <li className="list-inline-item px-2"><a href="#" className="light-text-color">Privacy Policy</a></li>
                  <li className="list-inline-item"><a href="#" className="light-text-color">Terms of Service & Rules</a></li>
              </ul>
          </div>
      </Container>
      </footer> */}

      {/*--------------- footer section end ---------- */}
    </>
  )
}

export default CareersComponent