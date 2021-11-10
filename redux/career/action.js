import { api } from '@libs';
import objectToFormData from 'object-to-formdata';
import { toaster } from '@components';
const careerAction = {
    fetchItems: 'FetchItems.CareerList',
    selectedItem: 'Selected.Career',
    applyNowModalStatus: 'ApplyNow.Modal.Status.Career',
    //
    //  Career page Apply now modal show and hide
    //
    applynowStatusChange: (status) => (dispatch) => {
        dispatch({ type: careerAction.applyNowModalStatus, payload: status });
    },
    //
    //fetch career list action
    //
    careerList: () => (dispatch) => {
        api.getCareerList()
            .then((response) => {
                dispatch({
                    type: careerAction.fetchItems,
                    payload: response.careers,
                });
            })
            .catch((err) => console.log(err));
    },
    //
    // Selected career action
    //
    selectedCareer: (item) => (dispatch) => {
        dispatch({ type: careerAction.selectedItem, payload: item });
    },

    //
    // Apply for a career
    //
    applynow: (data) => (dispatch) => {
        console.log('data-- > ', data);
        const req = {
            ...data,
            file: data.resume,
        };
        delete req.resume;
        const formData = objectToFormData.serialize(req);
        api.careerFormSubmit(formData).then((res) => {
            toaster('Applied Successfully .!', 'success');
            dispatch({
                type: careerAction.applyNowModalStatus,
                payload: false,
            });
        });
    },
};

export default careerAction;
