import { Button, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from '../style.module.scss';

export default function ButtonComponent({
    children,
    className,
    onClick,
    type,
    size,
    btnVarient,
    disabled
}) {
    return (
        <Button
            variant="primary"
            type={type}
            size={size}
            className={`${styles[btnVarient]} ${btnVarient} ${className}`}
            disabled={disabled}
            onClick={(e) => onClick(e)}
        >
            { disabled && <Spinner animation="border" role="status" className={`${btnVarient}`}/> }
            {children}

            <style jsx>{`
                .min-size-btn {
                    min-width: 175px !important;
                }
                .career-apply-btn {
                    width: 280px;
                }
                .btn-lg {
                    width: 205px;
                    height: 56px;
                }
            `}</style>
        </Button>
    );
}

ButtonComponent.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.string,
    btnVarient: PropTypes.string,
};

ButtonComponent.defaultProps = {
    type: 'button',
    onClick: () => {},
    className: '',
    size: '',
    btnVarient: '',
};
