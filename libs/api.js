import * as axios from './axios.interceptor';

const config = {
    headers: { 'content-type': 'multipart/form-data' },
    onUploadProgress: (event) => {
        console.log(
            `Current progress:`,
            Math.round((event.loaded * 100) / event.total)
        );
    },
};

export const getCareerDetails = async (id) => {
    return await axios.get(`/careers/${id}`);
};

export const getCareerList = () => axios.get('/api/v1/careers/fetch');
export const careerFormSubmit = (formData) =>
    axios.post('/api/v1/careers/apply-now', formData, config);

export default {
    getCareerDetails,
    getCareerList,
    careerFormSubmit,
};
