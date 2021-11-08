import axios from 'axios';
import _ from 'lodash';
import { toaster } from '@components';

const AxiosInstance = axios.create({
    baseURL: `${process.env.API_URL}/`,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

AxiosInstance.interceptors.request.use(async (conf) => {
    const token = null;
    if (token) {
        conf.headers.Authorization = `Bearer ${Auth.token}`;
    }
    return conf;
});

AxiosInstance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response.data);
    },
    (error) => {
        if (_.get(error, 'response.status')) {
            ErrorValidation(error);
        }
        return Promise.reject(error);
    }
);

const getError = (err) => {
    return err.data.message;
};

const ErrorValidation = (error) => {
    switch (error.response.status) {
        case 401: {
            Logout();
            setTimeout(() => {
                toaster('Login token expired', 'error');
            }, 200);
            break;
        }
        case 403:
            toaster('You dont have enough permissions!', 'error');
            break;

        case 422:
            // Toast({ description: getError(error.response), type: 'danger' });
            toaster(getError(error.response), 'error');
            break;

        default: {
            toaster('Error!', 'error');
            break;
        }
    }
};

export const get = (url, config) => {
    return AxiosInstance.get(url, config);
};
export const remove = (url, config) => {
    return AxiosInstance.delete(url, config);
};
export const post = (url, data, config) => {
    return AxiosInstance.post(url, data, config);
};
export const put = (url, data, config) => {
    return AxiosInstance.put(url, data, config);
};

export default {
    get,
    remove,
    post,
    put,
};
