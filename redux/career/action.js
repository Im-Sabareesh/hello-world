import { axios } from '@libs';

const careerAction = {
    fetchItems: 'FetchItems.CareerList',
    //
    //fetch career list action
    //
    careerList: () => (dispatch) => {
        axios
            .get('/api/v1/careers/fetch')
            .then((response) => {
                dispatch({
                    type: careerAction.fetchItems,
                    payload: response.careers,
                });
            })
            .catch((err) => console.log(err));
    },
};

export default careerAction;
