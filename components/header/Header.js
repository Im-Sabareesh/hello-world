import React from 'react';
import _ from 'lodash';
import {useRouter} from 'next/router';
import Link from 'next/link';

import {
    Container,
    Row,
    Col,
    Button,
    Navbar,
    Nav,
    NavDropdown,
    Image

} from 'react-bootstrap';

const Header = () => {

  const router = useRouter();
  const whiteLayout = ["about", "contact"];
  const [state, setState] = React.useState("");
  const socialMedisIcons = [
      "/icons/facebook.svg",
      "/icons/instagram.svg",
      "/icons/twitter.svg",
      "/icons/youtube.svg",
      "/icons/wordpress.svg",
  ];
    
  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setState("sticky");
    } else {
      setState("");
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  },[]);

  return (
    <header className={`fixed-top ${state}`}>
      {router.pathname === '/' && <div className="header-top py-2">
        <Container fluid>
          <Row className="justify-content-between">
            <Col md={9} className="topheader-text">
              Want to know how Blockchain can make a difference in your
              Business? Get Expert Advice from our Team now!
            </Col>
            <Col
              md={12}
              lg={3}
              className="text-center text-xs-center text-sm-center text-md-center text-lg-end"
            >
              <ul className="social-links">
                  {_.map(socialMedisIcons, (icon) => (
                      <li key={icon}>
                      <a href="#" onClick={e => e.preventDefault()}>
                          <Image src={icon} alt=""   />
                      </a>
                      </li>
                  ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>}

      <div className={`main-header py-3 ${_.some(whiteLayout,lay=>router.pathname.includes(lay)) && "inner-page-header"}`} >
        <Container>
          <Row>
            <Col sm={4} md={3} lg={2}>
              <Link href="/">
                <a >
                  <Image src="/icons/logo.svg" alt="" className={!state && _.some(whiteLayout,lay=>router.pathname.includes(lay)) &&"white-logo"}/>
                </a>
              </Link>
            </Col>

            <Col sm={4} md={5} lg={8}>
              <Navbar expand="lg" className="main-menu">
                <Container fluid className="p-0">
                  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                        <Link href='/about'>
                          <a className="nav-link">About Us</a>
                        </Link>
                        {/* <Link href='/about'> */}
                          <a href="#" onClick={e => e.preventDefault()} className="nav-link">Blockchain Solution</a>
                        {/* </Link> */}
                        {/* <Link href='/about'> */}
                          <a href="#" onClick={e => e.preventDefault()} className="nav-link">Case Studies</a>
                        {/* </Link> */}
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                          <NavDropdown.Item >
                            <Link href='/services/NFTServices'>
                              <span className="dropdown-item">NFT Development</span>
                            </Link>
                          </NavDropdown.Item>
                          <NavDropdown.Item >
                            <Link href='/services/DefiServices'>
                              <span className="dropdown-item">Defi development</span>
                            </Link>
                          </NavDropdown.Item>
                        </NavDropdown>
                       </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              </Col>

              <Col
                sm={4}
                md={4}
                lg={2}
                className="text-end text-md-start mt-2 letstalk-btn"
              >
                <Button variant="primary" className="red-btn" onClick={()=>{router.push('/contact')}}>
                  Let&apos;s Talk
                </Button>

                <a href="#" className="ms-2 header-search" onClick={e => e.preventDefault()}>
                  <Image src="/icons/icon-search.svg" alt="" className={!state && _.some(whiteLayout,lay=>router.pathname.includes(lay)) &&"white-logo"} />
                </a>
            </Col>
          </Row>
        </Container>
      </div>
  </header>
  )
}

export default Header
