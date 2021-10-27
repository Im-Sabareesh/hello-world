import React from 'react';
import { useRouter } from 'next/router';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { EmptyFooter, CommonFooter, TopLogoFooter } from './';

const Footer = (props) => {
    const router = useRouter();

    const whiteLayout = [
        { name: '/about', footer: 'left', component: () => <CommonFooter /> },
        {
            name: '/contact',
            footer: undefined,
            component: () => <EmptyFooter />,
        },
        // {
        //     name: '/',
        //     footer: 'left',
        //     component: () => <CommonFooter radius={true} />,
        // },
        {
            name: '/careers',
            footer: 'left',
            component: () => <CommonFooter language={props.language} />,
        },
        {
            name: '/careers/careerDetails',
            footer: 'left',
            component: () => <CommonFooter language={props.language} />,
        },
        {
            name: '/services/NFTServices',
            footer: 'top',
            component: () => <TopLogoFooter language={props.language} />,
        },
        {
            name: '/services/DefiServices',
            footer: 'top',
            component: () => <TopLogoFooter language={props.language} />,
        },
    ];

    const footer = _.find(whiteLayout, (l) => router.pathname.includes(l.name));

    return (
        <>
            {!!footer
                ? footer.component()
                : router.pathname == '/[lang]/' && (
                      <CommonFooter radius={true} language={props.language} />
                  )}
        </>
    );
};

export default Footer;

Footer.propTypes = {
    language: PropTypes.string,
};

Footer.defaultProps = {
    language: '',
};
