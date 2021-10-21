import * as React from 'react';

function SvgRectangleBg(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 1240 301"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <rect
                width={1240}
                height={302}
                rx={16}
                transform="matrix(-1 0 0 1 1240 -.48)"
                fill="url(#rectangle-bg_svg__paint0_linear)"
            />
            <defs>
                <linearGradient
                    id="rectangle-bg_svg__paint0_linear"
                    x1={0}
                    y1={151}
                    x2={1240}
                    y2={151}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F74FF" />
                    <stop offset={1} stopColor="#5E9DFF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SvgRectangleBg;
