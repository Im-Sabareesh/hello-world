import { axios } from '@libs';

const careerAction = {
    fetchItems: 'FetchItems.CareerList',
    //fetch career list action
    careerList: () => (dispatch) => {
        axios
            .get('/careers')
            .then((response) => {
                dispatch({ type: careerAction.fetchItems, payload: response });
            })
            .catch((err) => console.log(err));
    },
};

export default careerAction;
