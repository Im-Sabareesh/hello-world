import servicesAction from './action';

const initState = {
    list: {
        nft: {
            headerSection: {
                title: '',
                description: '',
            },
            smallParaSection: {},
            cardHeaderTitle: '',
            cardSection: [],
            imgPannelSection: {
                title: '',
            }
        },
        defi: {
            headerSection: {
                title: '',
                description: '',
            },
            smallParaSection: {},
            cardHeaderTitle: '',
            cardSection: [],
            imgPannelSection: {
                title: '',
            },
            lastParaSection: {},
        },
        hlfd: {
            headerSection: {
                title: '',
                description: '',
            },
            smallParaSection: {},
            cardHeaderTitle: '',
            cardSection: [],
        },
        blockchain: {
            headerSection: {
                title: '',
                description: '',
            },
            accordion: [],
            smallParaSection: {},
            cardHeaderTitle: '',
            cardSection: [],
            imgPannelSection: {
                title: '',
            }
        },
    },
};

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
