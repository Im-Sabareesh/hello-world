import * as React from 'react';

function SvgFooterBg(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 1440 647"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M0 88.7C0 40.1 39.399.7 88 .7h1264c48.6 0 88 39.4 88 88V647H0V88.7z"
                fill="url(#footer-bg_svg__paint0_linear)"
            />
            <defs>
                <linearGradient
                    id="footer-bg_svg__paint0_linear"
                    x1={0}
                    y1={323.85}
                    x2={1440}
                    y2={323.85}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F74FF" />
                    <stop offset={1} stopColor="#5E9DFF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SvgFooterBg;
