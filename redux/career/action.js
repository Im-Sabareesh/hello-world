import { axios } from '@libs';

const careerAction = {
    fetchItems: 'FetchItems.CareerList',
    //
    //fetch career list action
    //
    careerList: () => (dispatch) => {
        axios
            .get('/assets/data/careers.json')
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
