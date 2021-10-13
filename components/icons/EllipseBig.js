import * as React from "react";

function SvgEllipseBig(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 266 405"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#ellipse-big_svg__filter0_d)">
                <circle
                    r={197.334}
                    transform="matrix(-1 0 0 1 202.839 200.334)"
                    fill="url(#ellipse-big_svg__paint0_linear)"
                />
            </g>
            <defs>
                <linearGradient
                    id="ellipse-big_svg__paint0_linear"
                    x1={314.09}
                    y1={366.712}
                    x2={167.734}
                    y2={-59.2}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6E7FFF" />
                    <stop offset={1} stopColor="#668FFF" stopOpacity={0} />
                </linearGradient>
                <filter
                    id="ellipse-big_svg__filter0_d"
                    x={0.505}
                    y={0}
                    width={404.668}
                    height={404.668}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation={2.5} />
                    <feColorMatrix values="0 0 0 0 0.368627 0 0 0 0 0.615686 0 0 0 0 1 0 0 0 0.2 0" />
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow"
                    />
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    );
}

export default SvgEllipseBig;
