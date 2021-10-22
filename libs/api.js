import * as axios from './axios.interceptor';

export const getCareerDetails = async (id) => {
    return await axios.get(`/careers/${id}`);
};

export default {
    getCareerDetails,
};
