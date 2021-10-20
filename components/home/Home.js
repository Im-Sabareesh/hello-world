import React from 'react';
import _ from 'lodash';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Image,
    Form,
} from 'react-bootstrap';

const HomeComponent = () => {
    const router = useRouter();
    const [validated, setValidated] = React.useState(false);
    console.log(process.env.DB_HOST);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const featuresHeroBanner = [
            {
                title: 'Hyperledger Development',
                link: '#',
            },
            {
                title: 'DeFi Development',
                link: '/services/DefiServices/',
            },
            {
                title: 'NFT Development',
                link: '/services/NFTServices/',
            },
            {
                title: 'Obortech Smart Hub',
                link: '#',
            },
            {
                title: 'GDPR Compliance',
                link: '#',
            },
        ],
        blockChainUsageSec1 = [
            {
                name: 'Enhanced security',
                icon: '/assets/icons/enhanced-security.svg',
            },
            {
                name: 'Greater transparency',
                icon: '/assets/icons/greater-transparancy.svg',
            },
            {
                name: 'Instant traceability',
                icon: '/assets/icons/instant-tracibility.svg',
            },
            {
                name: 'Increased efficiency',
                icon: '/assets/icons/increased-efficiency.svg',
            },
            {
                name: 'Decentralized Governance',
                icon: '/assets/icons/decentralized-governance.svg',
            },
        ],
        serviceListSec2 = [
            {
                name: 'Decentraized Finance',
                icon: '/assets/icons/service-icon1.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'Non Fungible Tokens',
                icon: '/assets/icons/service-icon2.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'Binance Smart Chain',
                icon: '/assets/icons/service-icon3.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'Website Development',
                icon: '/assets/icons/service-icon2.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'Mobile App Development',
                icon: '/assets/icons/service-icon3.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
            {
                name: 'AI Technology',
                icon: '/assets/icons/service-icon6.png',
                describe:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.',
            },
        ],
        blockChainSolutionSec3 = [
            {
                name: 'Obortech Smart Hub',
                image: '/assets/images/solution-1.jpg',
                describe:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
                link: 'BLOCKCHAIN',
            },
            {
                name: 'GDPR Compliance',
                image: '/assets/images/solution-2.jpg',
                describe:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
                link: 'BLOCKCHAIN',
            },
            {
                name: 'Live Ledger',
                image: '/assets/images/solution-3.jpg',
                describe:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
                link: 'BLOCKCHAIN',
            },
            {
                name: 'True Title',
                image: '/assets/images/solution-4.jpg',
                describe:
                    'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
                link: 'BLOCKCHAIN',
            },
        ],
        chooseUSSec5 = [
            {
                icon: '/assets/icons/whychoose-icon1.svg',
                name: 'Focus on Innovation',
                describe:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
            {
                icon: '/assets/icons/whychoose-icon2.svg',
                name: 'True Partners',
                describe:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
            {
                icon: '/assets/icons/whychoose-icon3.svg',
                name: 'DevOps',
                describe:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
            {
                icon: '/assets/icons/whychoose-icon4.svg',
                name: 'Dedicated Teams',
                describe:
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
            },
        ],
        quickStatSec6 = [
            {
                icon: '/assets/icons/industry-awards.svg',
                counts: '150+',
                title: 'Industry Awards',
            },
            {
                icon: '/assets/icons/projects.svg',
                counts: '150+',
                title: 'Projects',
            },
            {
                icon: '/assets/icons/offices.svg',
                counts: '4',
                title: 'Offices',
            },
            {
                icon: '/assets/icons/happy-clients.svg',
                counts: '500',
                title: 'Happy Clients',
            },
            {
                icon: '/assets/icons/certified-pmp.svg',
                counts: '4',
                title: 'Certified PMP',
            },
            {
                icon: '/assets/icons/mm-lines-of-code.svg',
                counts: '100',
                title: 'MM Lines of Code',
            },
        ],
        exploreProjSec7 = [
            {
                title: 'Blockchain Consulting',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                link: '',
            },
            {
                title: 'Development and Deployment',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                link: '',
            },
            {
                title: 'Public Blockchains Development Services',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                link: '',
            },
            {
                title: 'Non Fungible Tokens',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                link: '',
            },
            {
                title: 'Decentralized Finance',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                link: '',
            },
            {
                title: 'Binanace Smart Chain',
                describe:
                    'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
                link: '',
            },
        ],
        testimonialSec9 = [
            {
                name: 'Chuan Allen',
                company: 'Reporter in CNN TV',
                describe:
                    "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
                image: '/assets/images/user-1.jpg',
            },
            {
                name: 'Chuan Allen',
                company: 'Reporter in CNN TV',
                describe:
                    "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
                image: '/assets/images/user-1.jpg',
            },
            {
                name: 'Chuan Allen',
                company: 'Reporter in CNN TV',
                describe:
                    "Alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem.",
                image: '/assets/images/user-1.jpg',
            },
        ],
        insightsListSec10 = [
            {
                title: 'Financial Inclusion, Advanced by Digital Currencies',
                by_date: 'Jane Cooper | 14 March 2021',
                image: '/assets/images/insight-img1.jpg',
                link: '',
            },
            {
                title: 'Financial Inclusion, Advanced by Digital Currencies',
                by_date: 'Jane Cooper | 14 March 2021',
                image: '/assets/images/insight-img2.jpg',
                link: '',
            },
            {
                title: 'Financial Inclusion, Advanced by Digital Currencies',
                by_date: 'Jane Cooper | 14 March 2021',
                image: '/assets/images/insight-img3.jpg',
                link: '',
            },
        ];

    return (
        <>
            {/*--------------- home hero banner start---------- */}

            <section className="hero-banner-container">
                <Container>
                    <Row>
                        <Col md={10} lg={8} xl={7} xxl={6}>
                            <div className="d-flex align-items-center">
                                <h3 className="h3 secondary-text-color">
                                    Blockchain Technology
                                </h3>
                                <div className="heading-line"> </div>
                            </div>

                            <h3 className="h1">
                                We provide enterprise blockchain consulting
                            </h3>

                            <p>
                                Unleash full business potential with our cutting
                                edge blockchain solutions. We innovate, build
                                and integrate real-world blockchain
                                applications.
                            </p>

                            <div className="button-outer">
                                <Button
                                    variant="primary"
                                    className="red-btn"
                                    size="lg"
                                    onClick={() => {
                                        router.push('/contact');
                                    }}
                                >
                                    Consult for Free
                                </Button>
                            </div>
                        </Col>

                        <Col md={12} className="text-center mt-4">
                            <h2 className="h2 secondary-text-color">
                                {' '}
                                Featured{' '}
                            </h2>
                        </Col>

                        <div className="mt-4">
                            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 justify-content-center">
                                {_.map(featuresHeroBanner, (item) => (
                                    <Col key={_.uniqueId()}>
                                        {item.link !== '#' ? (
                                            <Link href={item.link}>
                                                <div className="featured-box-container btn d-flex align-items-center justify-content-center text-center">
                                                    <span> {item.title} </span>
                                                </div>
                                            </Link>
                                        ) : (
                                            <div className="featured-box-container btn d-flex align-items-center justify-content-center text-center">
                                                <span> {item.title} </span>
                                            </div>
                                        )}
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </Row>
                </Container>
            </section>

            {/*--------------- home hero banner end---------- */}

            {/*--------------- Home section 1 start---------- */}

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
                                {_.map(blockChainUsageSec1, (item) => (
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

            {/*--------------- Home section 1 end---------- */}

            {/*--------------- Home section 2 start---------- */}

            <section className="home-section-2 py-5">
                <Container>
                    <Row>
                        <Col md={8} className="mx-auto text-center mb-2">
                            <h2 className="h2 dark-text-color mb-4">
                                {' '}
                                Services We Offer{' '}
                            </h2>

                            <p>
                                Nulla Lorem mollit cupidatat irure. Laborum
                                magna nulla duis ullamco cillum dolor. Voluptate
                                exercitation incididunt aliquip deserunt
                                reprehenderit elit laborum.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        {_.map(serviceListSec2, (item) => (
                            <Col
                                key={_.uniqueId()}
                                md={6}
                                lg={4}
                                className="service-thumb text-center mt-5"
                            >
                                <p>
                                    <Image src={item.icon} alt="" />
                                </p>

                                <h3 className="h3 dark-text-color">
                                    {item.name}
                                </h3>

                                <p> {item.describe} </p>
                            </Col>
                        ))}

                        <Col md={12} className="text-center mt-5">
                            <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                                className="h3 dark-text-color link-primary"
                            >
                                And a lot more for you
                            </a>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- Home section 2 end---------- */}

            {/*--------------- Home section 3 start---------- */}

            <section className="home-section-3 py-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2 className="h2 light-text-color mb-5">
                                Our BlockChain Solutions
                            </h2>
                        </Col>

                        {_.map(blockChainSolutionSec3, (item) => (
                            <Col key={_.uniqueId()} md={6} lg={4}>
                                <Card className="custom-card">
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h3 className="h3">
                                                {' '}
                                                {item.name}{' '}
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>{item.describe}</Card.Text>
                                    </Card.Body>

                                    <Card.Footer className="d-flex justify-content-between">
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="link-primary"
                                        >
                                            {item.link}
                                        </a>

                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                        >
                                            <Image
                                                src="/assets/icons/card-arrow.svg"
                                                alt=""
                                            />
                                        </a>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}

                        <Col md={12} lg={8}>
                            <Card className="custom-card">
                                <Card.Img
                                    variant="top"
                                    src="/assets/images/solution-5.jpg"
                                />
                                <Card.Body>
                                    <Card.Title>
                                        <h3 className="h3">Instasure</h3>
                                    </Card.Title>
                                    <Card.Text>
                                        Nulla Lorem mollit cupidatat irure.
                                        Laborum magna nulla duis ullamco cillum
                                        dolor. Voluptate exercitation
                                        incididunt. Alteration in some form, by
                                        injected humour, or randomised words
                                        which don&apos;t look even slightly
                                        believable. If you are going to use a
                                        passage of Lorem Ipsum. Nulla Lorem
                                        mollit cupidatat irure. Laborum magna
                                        nulla duis ullamco cillum dolor.
                                        Voluptate exercitation incididunt.
                                        Alteration in some form, by injected
                                        humour, or randomised words which
                                        don&apos;t look even slightly
                                        believable. If you are going to use a
                                        passage of Lorem Ipsum.
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer className="d-flex justify-content-between">
                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                        className="link-primary"
                                    >
                                        BLOCKCHAIN
                                    </a>

                                    <a
                                        href="#"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <Image
                                            src="/assets/icons/card-arrow.svg"
                                            alt=""
                                        />
                                    </a>
                                </Card.Footer>
                            </Card>
                        </Col>

                        <Col md={12} className="text-center my-5">
                            <Button
                                variant="primary"
                                className="red-btn min-size-btn"
                            >
                                View More
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- Home section3 end---------- */}

            {/*--------------- Home section4 cta start---------- */}

            <section className="home-section-4 py-5">
                <Container>
                    <div className="cta-banner cta-banner1 d-flex align-items-center">
                        <div className="cta-txt">
                            <h2 className="h2">Ready to Get Started?</h2>
                            <Button
                                variant="primary"
                                className="red-btn min-size-btn"
                                onClick={() => {
                                    router.push('/contact');
                                }}
                            >
                                Get a quote
                            </Button>
                        </div>

                        <div>
                            <Image src="/assets/icons/Arrow.svg" alt="" />
                        </div>
                    </div>
                </Container>
            </section>

            {/*--------------- Home section4 cta end---------- */}

            {/*--------------- Home section5 cta start---------- */}

            <section className="home-section-5 py-5">
                <Container>
                    <Row>
                        <Col md={{ span: 12, order: 0 }} lg={6}>
                            <Image
                                src="/assets/images/blockchain-business.png"
                                alt=" "
                            />
                        </Col>

                        <Col md={12} lg={6}>
                            <h2 className="h2 mb-4"> Why Choose Us </h2>

                            <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                &apos;Content here, content here&apos;, making
                                it look like readable English.
                            </p>

                            <p>
                                Many desktop publishing packages and web page
                                editors now use Lorem Ipsum as their default
                                model text, and a search for &apos;lorem
                                ipsum&apos; will uncover many web sites still in
                                their infancy.
                            </p>
                        </Col>
                        {_.map(chooseUSSec5, (item) => (
                            <Col key={_.uniqueId()} md={6} className="mt-4">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <Image src={item.icon} alt=" " />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h3 className="h3 mb-3">
                                            {' '}
                                            {item.name}{' '}
                                        </h3>
                                        <p>{item.describe}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/*--------------- Home section5 cta end---------- */}

            {/*--------------- Home section6 start---------- */}

            <section className="home-section-6 py-5">
                <Container>
                    <Row>
                        <Col md={12} className="text-center mb-5">
                            <h2 className="h2">Quick Stats</h2>
                        </Col>
                        {_.map(quickStatSec6, (item) => (
                            <Col
                                key={_.uniqueId()}
                                xs={6}
                                md={4}
                                lg={2}
                                className="counter-thumb text-center mt-3"
                            >
                                <p className="mb-4">
                                    <Image src={item.icon} alt=" " />
                                </p>

                                <p className="mb-1">
                                    <span> {item.counts} </span>
                                </p>

                                <p>
                                    <strong> {item.title} </strong>
                                </p>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/*--------------- Home section6 end---------- */}

            {/*--------------- Home section7 start---------- */}

            <section className="home-section-7 my-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} className="text-center">
                            <h2 className="h2 my-4"> We Work with </h2>
                        </Col>

                        <Col md={4} className="workwithus-txt mt-3">
                            <h1 className="h1 secondary-text-color mb-3">
                                {' '}
                                121,000+{' '}
                            </h1>
                            <p>
                                customers in over 120 countries growing their
                                businesses with Blockchain Consulting
                            </p>
                        </Col>

                        <Col md={8} className="workwithus-txt  mt-3">
                            <Image src="/assets/images/we-work.png" alt=" " />
                        </Col>

                        <Col md={12} className="mt-5 mb-5">
                            <div className="cta-banner cta-banner2 d-flex align-items-center justify-content-end">
                                <div className="cta-txt">
                                    <h2 className="h2">
                                        Still Have some Questions in Mind?
                                        Don&apos;t Worry. <br />
                                        Get FREE Consultation from our Experts
                                    </h2>
                                    <Button
                                        variant="primary"
                                        className="red-btn min-size-btn"
                                        onClick={() => {
                                            router.push('/contact');
                                        }}
                                    >
                                        Let’s Talk
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- Home section7 end---------- */}

            {/*--------------- Home section8 start---------- */}

            <section className="home-section-8 py-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} className="text-center mt-5">
                            <h2 className="h2 my-4">
                                Explore Projects Delivered by ChainCode
                            </h2>
                        </Col>
                        {_.map(exploreProjSec7, (item) => (
                            <Col key={_.uniqueId()} md={6} lg={4}>
                                <Card className="custom-card custom-card2 text-center">
                                    <Card.Body>
                                        <Card.Title>
                                            <h3 className="h3">
                                                {' '}
                                                {item.title}
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>{item.describe}</Card.Text>
                                    </Card.Body>

                                    <Card.Footer className="">
                                        <Button
                                            variant="primary"
                                            className="red-btn min-size-btn"
                                        >
                                            Know More
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/*--------------- Home section8 end---------- */}

            {/*--------------- Home section9 testimonial start---------- */}

            <section className="home-section-9 py-5">
                <Container>
                    <Row>
                        <Col>
                            <div className="testimonial-bg py-5">
                                <Row>
                                    <Col lg={12} className="text-center">
                                        <small> Testimonial </small>

                                        <h2 className="h2 mt-4 mb-5">
                                            Let Our Clients do the Talking
                                        </h2>
                                    </Col>

                                    <Col className="mt-4">
                                        <Row className=" justify-content-center row-cols-1 row-cols-md-2  row-cols-lg-3">
                                            {_.map(testimonialSec9, (item) => (
                                                <Col
                                                    key={_.uniqueId()}
                                                    className=""
                                                >
                                                    <div className="testimonial-cont">
                                                        <div className="testimonial-user-cont d-flex align-items-center">
                                                            <div className="user-thumb">
                                                                <Image
                                                                    src={
                                                                        item.image
                                                                    }
                                                                    roundedCircle
                                                                    className="shadow"
                                                                    alt=" "
                                                                />
                                                            </div>
                                                            <div className="user-name">
                                                                <h3 className="h3 mb-0">
                                                                    {item.name}{' '}
                                                                </h3>
                                                                <span>
                                                                    {' '}
                                                                    {
                                                                        item.company
                                                                    }{' '}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="testimonials-txt mt-3">
                                                            {item.describe}
                                                        </div>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*--------------- Home section9 testimonial start---------- */}

            {/*--------------- Home section10 insights start---------- */}

            <section className="home-section-10 py-5">
                <Container>
                    <Row>
                        <Col lg={12} className="text-center mb-5">
                            <h2 className="h2"> Our Latest Insights </h2>
                        </Col>

                        {_.map(insightsListSec10, (item) => (
                            <Col md={6} lg={4} key={_.uniqueId()}>
                                <Card className="insight-card mt-3">
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <Card.Title>
                                            <h3 className="h3 mb-3">
                                                {item.title}
                                            </h3>
                                        </Card.Title>
                                        <Card.Text>{item.by_date}</Card.Text>
                                        <a
                                            href="#"
                                            onClick={(e) => e.preventDefault()}
                                            className="link-primary"
                                        >
                                            Learn More{' '}
                                            <Image
                                                src="/assets/icons/purple-arrow.svg"
                                                alt=" "
                                            />{' '}
                                        </a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        <Col md={12} className="text-center my-5">
                            <Button
                                variant="primary"
                                className="red-btn min-size-btn"
                            >
                                View More
                            </Button>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <div className="home-section-11">
                        <Row>
                            <Col lg={{ span: 10, offset: 1 }}>
                                <div className="home-contact-card">
                                    <Row>
                                        <Col md={12} lg={6}>
                                            <h2 className="h2 mb-2">
                                                {' '}
                                                Ready to Get Started?{' '}
                                            </h2>
                                            <p>
                                                Have an idea? Let’s discuss it!
                                            </p>

                                            <div className="home-contact-form mt-4">
                                                <Form
                                                    noValidate
                                                    validated={validated}
                                                    onSubmit={handleSubmit}
                                                >
                                                    <Row className="">
                                                        <Form.Group
                                                            as={Col}
                                                            md="12"
                                                            controlId="validationCustom01"
                                                        >
                                                            <Form.Label>
                                                                FIRST NAME*
                                                            </Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder=""
                                                                defaultValue=""
                                                            />
                                                            <Form.Control.Feedback>
                                                                Looks good!
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group
                                                            as={Col}
                                                            md="6"
                                                            controlId="validationCustom02"
                                                        >
                                                            <Form.Label>
                                                                EMAIL*
                                                            </Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder=""
                                                                defaultValue=""
                                                            />
                                                            <Form.Control.Feedback>
                                                                Looks good!
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                        <Form.Group
                                                            as={Col}
                                                            md="6"
                                                            controlId="validationCustomUsername"
                                                        >
                                                            <Form.Label>
                                                                PHONE*
                                                            </Form.Label>
                                                            <Form.Control
                                                                required
                                                                type="text"
                                                                placeholder=""
                                                                defaultValue=""
                                                            />
                                                        </Form.Group>
                                                    </Row>
                                                    <Row className="">
                                                        <Form.Group
                                                            as={Col}
                                                            md="12"
                                                            controlId="validationCustom03"
                                                        >
                                                            <Form.Label>
                                                                HOW CAN WE HELP
                                                                YOU?
                                                            </Form.Label>
                                                            <Form.Control
                                                                as="textarea"
                                                                rows={2}
                                                            />
                                                            <Form.Control.Feedback type="invalid">
                                                                Please provide a
                                                                valid city.
                                                            </Form.Control.Feedback>
                                                        </Form.Group>
                                                    </Row>

                                                    <Row className="mt-3">
                                                        <Form.Group
                                                            as={Col}
                                                            md="7"
                                                            className="mt-2"
                                                        >
                                                            {['checkbox'].map(
                                                                (type) => (
                                                                    <div
                                                                        key={
                                                                            type
                                                                        }
                                                                        className="mb-3"
                                                                    >
                                                                        <Form.Check
                                                                            type={
                                                                                type
                                                                            }
                                                                            id={`check-api-${type}`}
                                                                            className="d-flex"
                                                                        >
                                                                            <Form.Check.Input
                                                                                type={
                                                                                    type
                                                                                }
                                                                                className="flex-shrink-0 mr-3"
                                                                            />
                                                                            <Form.Check.Label>
                                                                                *As
                                                                                a
                                                                                result
                                                                                of
                                                                                submitting
                                                                                completed
                                                                                “Contact
                                                                                Us”
                                                                                form,
                                                                                your
                                                                                personal
                                                                                data
                                                                                will
                                                                                be
                                                                                processed
                                                                                by
                                                                                ChainCode.
                                                                                We
                                                                                are
                                                                                committed
                                                                                to
                                                                                respecting
                                                                                your
                                                                                privacy.
                                                                                Read
                                                                                our{' '}
                                                                                <a
                                                                                    href="#"
                                                                                    onClick={(
                                                                                        e
                                                                                    ) =>
                                                                                        e.preventDefault()
                                                                                    }
                                                                                >
                                                                                    {' '}
                                                                                    Privacy
                                                                                    Policy
                                                                                </a>

                                                                                .
                                                                            </Form.Check.Label>
                                                                        </Form.Check>
                                                                    </div>
                                                                )
                                                            )}
                                                        </Form.Group>

                                                        <Form.Group
                                                            as={Col}
                                                            md="5"
                                                            controlId="validationCustomUsername"
                                                        >
                                                            <Button
                                                                type="submit"
                                                                className="red-btn btn-lg"
                                                            >
                                                                Send Request
                                                            </Button>
                                                        </Form.Group>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </Col>

                                        <Col
                                            md={12}
                                            lg={6}
                                            className="contact-right-form"
                                        >
                                            <Image
                                                src="/assets/images/contact-form-img.png"
                                                alt=" "
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default HomeComponent;
