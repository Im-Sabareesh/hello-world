import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import styles from '../style.module.scss';

const ButtonComponent = ({children, className, onClick, type, size, btnVarient}) => {
    return (
        <Button variant="primary" type={type} size={size} className={`${styles[btnVarient]} ${btnVarient} ${className}`} onClick={(e) => onClick(e)}>
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

export default ButtonComponent;

ButtonComponent.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.string,
    btnVarient: PropTypes.string,
};

ButtonComponent.defaultProps = {
    type: 'button',
    onClick: ()=>{},
    className: '',
    size: '',
    btnVarient:''
};