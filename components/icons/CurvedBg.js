import * as React from "react";

function SvgCurvedBg(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 1440 971"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M-240-26s584.914 71.007 960 71.007c375.09 0 958.27-71.007 958.27-71.007L1680 990s-584.91-58.328-960-58.328C344.914 931.672-240 990-240 990V-26z"
                fill="url(#curved-bg_svg__paint0_linear)"
            />
            <defs>
                <linearGradient
                    id="curved-bg_svg__paint0_linear"
                    x1={-240}
                    y1={482}
                    x2={1680}
                    y2={482}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F74FF" />
                    <stop offset={1} stopColor="#5E9DFF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SvgCurvedBg;
