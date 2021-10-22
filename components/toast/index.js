import { toast } from 'react-toastify';
import PropTypes from 'prop-types';

export default function toaster(description, type) {
    toast(description, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        type: type,
    });
}

toaster.propTypes = {
    description: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

toaster.defaultProps = {};
