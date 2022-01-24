import _ from 'lodash';

export const careerListSelector = (state) => {
    return state.Career.list;
};

export const careerModalStatus = (state) => {
    return state.Career.showApplyNow;
};

export const careerDetailsSelector = (state, slug) => {
    const list = state.Career.list;
    const details = _.find(list, (l) => l.slug === slug);
    return details || {};
};
