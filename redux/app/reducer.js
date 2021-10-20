import actions from './actions';

const initState = {
    viewerCount: 0,
};

export default function appReducer(state = initState, action) {
    switch (action.type) {
        case actions.VIEWER_COUNT:
            return {
                ...state,
                viewerCount: action.payload,
            };
        default:
            return state;
    }
}
