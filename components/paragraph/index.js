import PropTypes from 'prop-types';

const Paragraph = ({ children, className }) => {
    return (
        <p className={className}>
            {children}
            <style jsx>{`
                .location-element {
                    font-size: 18px;
                    font-weight: 600;
                }
                .contact-img {
                    margin-top: 60px;
                }
                .contactus-sociallinks a {
                    margin-right: 15px;
                }
                .contactus-sociallinks a img {
                    height: 20px;
                }
                .getintouch-txt {
                    font-size: 20px;
                }
                .address-txt {
                    font-size: 20px;
                    font-weight: 600;
                }
                .light-text-color {
                    color: #ffffff;
                }
                .text-shadow {
                    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }
            `}</style>
        </p>
    );
};

export default Paragraph;

Paragraph.propTypes = {
    className: PropTypes.string,
};

Paragraph.defaultProps = {
    className: '',
};
