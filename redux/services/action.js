import { axios } from '@libs';

const servicesAction = {
    fetchItems: 'FetchItems.ServicesList',
    //
    //fetch services list action
    //
    fetchList: () => (dispatch) => {
        axios
            .get('/assets/data/services.json')
            .then((response) => {
                dispatch({
                    type: servicesAction.fetchItems,
                    payload: response,
                });
            })
            .catch((err) => console.log(err));
    },
};

export default servicesAction;
