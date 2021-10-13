import * as React from "react";

function SvgCustomerFeedback(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g clipPath="url(#customer-feedback_svg__clip0)" fill="#fff">
                <path d="M20 16.667A8.333 8.333 0 1020 0a8.333 8.333 0 000 16.667zM17.763 33.618c-1.44-2.883-.583-6.8 1.959-8.919a6.524 6.524 0 014.181-1.49 8.938 8.938 0 014.43 1.299 9.656 9.656 0 013.333-1.216v-1.625a5.005 5.005 0 00-5-5H13.333a5.006 5.006 0 00-5 5V35A1.667 1.667 0 0010 36.667h10.208a11.226 11.226 0 01-2.445-3.049z" />
                <path d="M35.878 25.979c-.944-.789-3.522-2.257-7.545.496-4.025-2.754-6.601-1.284-7.545-.496-1.938 1.617-2.625 4.708-1.534 6.894 1.75 3.5 8.42 6.895 8.703 7.037a.833.833 0 00.75 0c.283-.142 6.954-3.537 8.704-7.037 1.093-2.185.405-5.277-1.533-6.894zm-2.545 5.688a1.667 1.667 0 110-3.334 1.667 1.667 0 010 3.334z" />
            </g>
            <defs>
                <clipPath id="customer-feedback_svg__clip0">
                    <path fill="#fff" d="M0 0h40v40H0z" />
                </clipPath>
            </defs>
        </svg>
    );
}

export default SvgCustomerFeedback;
