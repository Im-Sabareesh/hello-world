import * as React from "react";

function SvgArrow(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 176 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M160 34.502s-.232 35.956-24.796 50.074c-17.331 9.962-40.742 5.611-40.79-6.61-.026-6.465 7.657-8.049 12.478-5.79 8.715 4.08 4.588 23.62-4.341 32.548-30.964 30.965-93.883 12.168-93.883 12.168"
                stroke="#121212"
                strokeWidth={2}
                strokeLinecap="round"
            />
            <path
                d="M13.727 125.196l-5.906-8.185 9.662-6.286"
                stroke="#121212"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgArrow;
