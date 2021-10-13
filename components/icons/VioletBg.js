import * as React from "react";

function SvgVioletBg(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 1440 1486"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M0-.262h1440V1486s-103.16-96.37-661.554-96.37C220.051 1389.63 0 1340.46 0 1340.46V-.262z"
                fill="url(#violet-bg_svg__paint0_linear)"
            />
            <defs>
                <linearGradient
                    id="violet-bg_svg__paint0_linear"
                    x1={0}
                    y1={1034.18}
                    x2={1440}
                    y2={1034.18}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F75FF" />
                    <stop offset={0.505} stopColor="#999DFF" />
                    <stop offset={1} stopColor="#ADB1FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default SvgVioletBg;
