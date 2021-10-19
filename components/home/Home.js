import React from 'react';
import _ from 'lodash';

import { ImgPanelSection } from 'common-components';
import { FeaturedSection, BlockchainBusinessSection, ServiceOfferSection,
    BlockChainSolutionSection, ChooseUsSection, QuickStatsSection, WorkWithSection,
    ExploreProjectSection, CilentTestimonialSection, InsightWithFormSection } from './section';


const HomeComponent = () => {

    return (
        <>
            {/*--------------- home hero banner start---------- */}

            <FeaturedSection />

            {/*--------------- home hero banner end---------- */}

            {/*--------------- Home section 1 start---------- */}

            <BlockchainBusinessSection />

            {/*--------------- Home section 1 end---------- */}

            {/*--------------- Home section 2 start---------- */}

            <ServiceOfferSection/>

            {/*--------------- Home section 2 end---------- */}

            {/*--------------- Home section 3 start---------- */}

            <BlockChainSolutionSection />

            {/*--------------- Home section3 end---------- */}

            {/*--------------- Home section4 cta start---------- */}

            <ImgPanelSection secClass="home-section-4 py-5" className="cta-banner cta-banner1 d-flex align-items-center"
                title="Ready to Get Started?" link="/contact"
                btnName="Get a quote" image="/assets/icons/Arrow.svg"/>

            {/*--------------- Home section4 cta end---------- */}

            {/*--------------- Home section5 cta start---------- */}

            <ChooseUsSection />

            {/*--------------- Home section5 cta end---------- */}

            {/*--------------- Home section6 start---------- */}

            <QuickStatsSection />

            {/*--------------- Home section6 end---------- */}

            {/*--------------- Home section7 start---------- */}

            <WorkWithSection />

            {/*--------------- Home section7 end---------- */}

            {/*--------------- Home section8 start---------- */}

            <ExploreProjectSection/>

            {/*--------------- Home section8 end---------- */}

            {/*--------------- Home section9 testimonial start---------- */}

            <CilentTestimonialSection />

            {/*--------------- Home section9 testimonial start---------- */}

            {/*--------------- Home section10 insights start---------- */}
            
            <InsightWithFormSection/>

            {/*--------------- Home section10 insights end---------- */}
        </>
    );
};

export default HomeComponent;
