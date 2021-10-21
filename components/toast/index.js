import { toast } from 'react-toastify';

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
