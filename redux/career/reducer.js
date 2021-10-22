import careerAction from './action';

const initState = { list: [] };

const fetchList = (state, payload) => {
    return {
        ...state,
        list: payload,
    };
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case careerAction.fetchItems: {
            return fetchList(state, action.payload);
        }
        default: {
            return state;
        }
    }
}
