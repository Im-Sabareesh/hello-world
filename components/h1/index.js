import PropTypes from 'prop-types';

const H1 = ({ children, className }) => {
    return (
        <h1 className={`h1 ${className}`}>
            {children}
            <style jsx>{`
                h1 {
                    margin-top: 0px;
                    font-weight: 700;
                    color: #404852;
                }
                .h1 {
                    font-size: 56px;
                    line-height: 74px;
                    color: #404852;
                    margin-top: 0px;
                    font-weight: 700;
                    letter-spacing: -1px;
                }

                .light-text-color {
                    color: #ffffff;
                }

                .secondary-text-color {
                    color: #6f75ff;
                }
                .career-name {
                    letter-spacing: -2px;
                }
                .dark-text-color {
                    color: #121212;
                }

                .dark-secondary-text-color {
                    color: #404852;
                }
            `}</style>
        </h1>
    );
};

export default H1;

H1.propTypes = {
    className: PropTypes.string,
};

H1.defaultProps = {
    className: '',
};
