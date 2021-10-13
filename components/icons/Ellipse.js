import * as React from "react";

function SvgEllipse(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 136 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#ellipse_svg__filter0_d)">
                <circle
                    r={62.573}
                    transform="matrix(-1 0 0 1 67.978 66.51)"
                    fill="url(#ellipse_svg__paint0_linear)"
                />
            </g>
            <defs>
                <linearGradient
                    id="ellipse_svg__paint0_linear"
                    x1={99.596}
                    y1={116.282}
                    x2={53.187}
                    y2={-18.772}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6E7FFF" />
                    <stop offset={1} stopColor="#668FFF" stopOpacity={0} />
                </linearGradient>
                <filter
                    id="ellipse_svg__filter0_d"
                    x={0.404}
                    y={0.936}
                    width={135.147}
                    height={135.147}
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

export default SvgEllipse;
