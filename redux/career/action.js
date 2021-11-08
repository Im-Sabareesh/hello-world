import { api } from '@libs';

const careerAction = {
    fetchItems: 'FetchItems.CareerList',
    selectedItem: 'Selected.Career',
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
    selectedCareer: (item) => (dispatch) => {
        dispatch({ type: careerAction.selectedItem, payload: item });
    },
};

export default careerAction;
