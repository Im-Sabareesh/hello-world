import { combineReducers } from 'redux';
import App from './app/reducer';
import Career from './career/reducer';
import Services from './services/reducer';

export default combineReducers({
    App,
    Career,
    Services,
});
