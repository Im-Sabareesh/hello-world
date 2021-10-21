import { combineReducers } from 'redux';
import App from './app/reducer';
import Career from './career/reducer';

export default combineReducers({
    App,
    Career,
});
