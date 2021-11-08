import * as axios from './axios.interceptor';

export const getCareerDetails = async (id) => {
    return await axios.get(`/careers/${id}`);
};

export const getCareerList = () => axios.get('/api/v1/careers/fetch');

export default {
    getCareerDetails,
    getCareerList,
};
