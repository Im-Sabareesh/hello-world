import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }

    return applyMiddleware(...middleware);
};

export const store = createStore(rootReducer, bindMiddleware([thunk]));
