import * as React from "react";

function SvgEllipseLight(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 222 223"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g filter="url(#ellipse-light_svg__filter0_d)">
                <ellipse
                    rx={82.08}
                    ry={81.65}
                    transform="scale(-1 1) rotate(-83.338 1.482 113.455)"
                    fill="url(#ellipse-light_svg__paint0_linear)"
                />
            </g>
            <defs>
                <linearGradient
                    id="ellipse-light_svg__paint0_linear"
                    x1={130.644}
                    y1={151.733}
                    x2={70.337}
                    y2={-24.69}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#7C63FF" stopOpacity={0.3} />
                    <stop offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
                <filter
                    id="ellipse-light_svg__filter0_d"
                    x={0.757}
                    y={0.766}
                    width={221.243}
                    height={221.997}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy={10} />
                    <feGaussianBlur stdDeviation={10} />
                    <feColorMatrix values="0 0 0 0 0.384314 0 0 0 0 0.588235 0 0 0 0 1 0 0 0 0.2 0" />
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

export default SvgEllipseLight;
