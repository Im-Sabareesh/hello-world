import React from 'react';
import _ from 'lodash';

import { ImgPanelSection } from 'common-components';
import HeroBanner from './section/HeroBanner';
import SectionOne from './section/SectionOne';
import SectionTwo from './section/SectionTwo';
import SectionThree from './section/SectionThree';
import SectionFive from './section/SectionFive';
import SectionSix from './section/SectionSix';
import SectionSeven from './section/SectionSeven';
import SectionEight from './section/SectionEight';
import SectionNine from './section/SectionNine';
import SectionTen from './section/SectionTen';

const HomeComponent = () => {

    const featuresList = [
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
    blockChainUsageList = [
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
    serviceList = [
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
    blockChainSolnList = [
        {
            title: 'Obortech Smart Hub',
            image: '/assets/images/solution-1.jpg',
            subtitle:
                'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            link: 'BLOCKCHAIN',
        },
        {
            title: 'GDPR Compliance',
            image: '/assets/images/solution-2.jpg',
            subtitle:
                'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            link: 'BLOCKCHAIN',
        },
        {
            title: 'Live Ledger',
            image: '/assets/images/solution-3.jpg',
            subtitle:
                'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            link: 'BLOCKCHAIN',
        },
        {
            title: 'True Title',
            image: '/assets/images/solution-4.jpg',
            subtitle:
                'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt.',
            link: 'BLOCKCHAIN',
        },
    ],
    chooseUSList = [
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
    quickStateList = [
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
    exploreProjectList = [
        {
            title: 'Blockchain Consulting',
            describe:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            title: 'Development and Deployment',
            describe:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            title: 'Public Blockchains Development Services',
            describe:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            title: 'Non Fungible Tokens',
            describe:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            title: 'Decentralized Finance',
            describe:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
        {
            title: 'Binanace Smart Chain',
            describe:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
        },
    ],
    testimonialList = [
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
    insightsList = [
        {
            title: 'Financial Inclusion, Advanced by Digital Currencies',
            subtitle: 'Jane Cooper | 14 March 2021',
            image: '/assets/images/insight-img1.jpg',
        },
        {
            title: 'Financial Inclusion, Advanced by Digital Currencies',
            subtitle: 'Jane Cooper | 14 March 2021',
            image: '/assets/images/insight-img2.jpg',
        },
        {
            title: 'Financial Inclusion, Advanced by Digital Currencies',
            subtitle: 'Jane Cooper | 14 March 2021',
            image: '/assets/images/insight-img3.jpg',
        },
    ];

    return (
        <>
            {/*--------------- home hero banner start---------- */}

            <HeroBanner data={featuresList} />

            {/*--------------- home hero banner end---------- */}

            {/*--------------- Home section 1 start---------- */}

            <SectionOne data={blockChainUsageList} />

            {/*--------------- Home section 1 end---------- */}

            {/*--------------- Home section 2 start---------- */}

            <SectionTwo data={serviceList}/>

            {/*--------------- Home section 2 end---------- */}

            {/*--------------- Home section 3 start---------- */}

            <SectionThree data={blockChainSolnList} />

            {/*--------------- Home section3 end---------- */}

            {/*--------------- Home section4 cta start---------- */}

            <ImgPanelSection secClass="home-section-4 py-5" className="cta-banner cta-banner1 d-flex align-items-center"
                title="Ready to Get Started?" link="/contact"
                btnName="Get a quote" image="/assets/icons/Arrow.svg"/>

            {/*--------------- Home section4 cta end---------- */}

            {/*--------------- Home section5 cta start---------- */}

            <SectionFive data={chooseUSList} />

            {/*--------------- Home section5 cta end---------- */}

            {/*--------------- Home section6 start---------- */}

            <SectionSix data={quickStateList} />

            {/*--------------- Home section6 end---------- */}

            {/*--------------- Home section7 start---------- */}

            <SectionSeven />

            {/*--------------- Home section7 end---------- */}

            {/*--------------- Home section8 start---------- */}

            <SectionEight data={exploreProjectList}/>

            {/*--------------- Home section8 end---------- */}

            {/*--------------- Home section9 testimonial start---------- */}

            <SectionNine data={testimonialList} />

            {/*--------------- Home section9 testimonial start---------- */}

            {/*--------------- Home section10 insights start---------- */}
            
            <SectionTen data={insightsList} />

            {/*--------------- Home section10 insights end---------- */}
        </>
    );
};

export default HomeComponent;
