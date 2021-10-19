import * as React from 'react';

function SvgGradientBg(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 1440 804"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#gradient-bg_svg__clip0)">
                <path fill="#fff" d="M0 0h1440v804H0z" />
                <g opacity={0.2} filter="url(#gradient-bg_svg__filter0_f)">
                    <circle
                        r={223.329}
                        transform="matrix(-1 0 0 1 1373.33 444.544)"
                        fill="#74B4FF"
                    />
                </g>
                <g filter="url(#gradient-bg_svg__filter1_f)">
                    <circle
                        r={220.503}
                        transform="matrix(-1 0 0 1 -57.75 306.339)"
                        fill="#ECEEFF"
                    />
                </g>
            </g>
            <defs>
                <filter
                    id="gradient-bg_svg__filter0_f"
                    x={931.429}
                    y={2.644}
                    width={883.802}
                    height={883.802}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation={109.286}
                        result="effect1_foregroundBlur"
                    />
                </filter>
                <filter
                    id="gradient-bg_svg__filter1_f"
                    x={-428.254}
                    y={-64.164}
                    width={741.006}
                    height={741.006}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    />
                    <feGaussianBlur
                        stdDeviation={75}
                        result="effect1_foregroundBlur"
                    />
                </filter>
                <clipPath id="gradient-bg_svg__clip0">
                    <path fill="#fff" d="M0 0h1440v804H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default SvgGradientBg;
