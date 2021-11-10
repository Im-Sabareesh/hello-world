import actions from './action';

const initState = { list: [], selectedItem: {}, showApplyNow: false };

const changeApplyNow = (state, payload) => {
    return {
        ...state,
        showApplyNow: payload,
    };
};

const fetchList = (state, payload) => {
    return {
        ...state,
        list: payload,
    };
};

const selectItem = (state, payload) => {
    return {
        ...state,
        selectedItem: payload,
    };
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case actions.fetchItems: {
            return fetchList(state, action.payload);
        }
        case actions.selectedItem: {
            return selectItem(state, action.payload);
        }
        case actions.applyNowModalStatus: {
            return changeApplyNow(state, action.payload);
        }
        default: {
            return state;
        }
    }
}
