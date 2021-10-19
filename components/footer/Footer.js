import React from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';

import { EmptyFooter, CommonFooter, TopLogoFooter } from './';

const Footer = () => {
    const router = useRouter();

    const whiteLayout = [
        { name: '/about', footer: 'left', component: () => <CommonFooter /> },
        {
            name: '/contact',
            footer: undefined,
            component: () => <EmptyFooter />,
        },
        {
            name: '/',
            footer: 'left',
            component: () => <CommonFooter radius={true} />,
        },
        { name: '/careers', footer: 'left', component: () => <CommonFooter /> },
        {
            name: '/careers/careerDetails',
            footer: 'left',
            component: () => <CommonFooter />,
        },
        {
            name: '/services/NFTServices',
            footer: 'top',
            component: () => <TopLogoFooter />,
        },
        {
            name: '/services/DefiServices',
            footer: 'top',
            component: () => <TopLogoFooter />,
        },
    ];

    const footer = _.find(whiteLayout, (l) => router.pathname === l.name);

    return <>{!!footer && footer.component()}</>;
};

export default Footer;
