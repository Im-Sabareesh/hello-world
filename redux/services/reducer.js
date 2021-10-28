import servicesAction from './action';

const initState = {
    list: {
        defi: {
            headerSection: {
                title: '',
                description: ''
            },
            smallParaSection: [],
            cardSection: []
        },
        nft: {
            headerSection: {
                title: '',
                description: ''
            },
            smallParaSection: [],
            cardSection: []
        },
        hlfd: {
            headerSection: {
                title: '',
                description: ''
            },
            smallParaSection: [],
            cardSection: []
        },

} };

const fetchList = (state, payload) => {
    return {
        ...state,
        list: payload,
    };
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case servicesAction.fetchItems: {
            return fetchList(state, action.payload);
        }
        default: {
            return state;
        }
    }
}
