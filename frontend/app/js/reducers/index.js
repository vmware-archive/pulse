import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerStateReducer } from 'redux-router';

import alert from './alert';
import projects from './projects';


let ui = combineReducers({
    alert
});

export default combineReducers({
    form: formReducer,
    router: routerStateReducer,
    ui,
    projects
});
