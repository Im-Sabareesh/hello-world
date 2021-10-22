import _ from 'lodash';

export const careerListSelector = (state) => {
    return state.Career.list;
};

export const careerDetailsSelector = (state, id) => {
    const list = state.Career.list;
    const details = _.find(list, (l) => l.id == id);
    return details || {};
};