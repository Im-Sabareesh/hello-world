import servicesAction from './action';

const initState = { list: [] };

const fetchList = (state, payload) => {
    return {
        ...state,
        list: payload,
    };
};

export default function (state = initState, action) {
    switch (action.type) {
        case servicesAction.fetchItems: {
            return fetchList(state, action.payload);
        }
        default: {
            return state;
        }
    }
}
