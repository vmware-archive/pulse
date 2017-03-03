import { CREATE_PROJECT_SUCCESS, GET_PROJECTS } from '../actions';

export default function projects(state=[], action={}) {
    switch(action.type) {
        case CREATE_PROJECT_SUCCESS:
            console.info('inside CREATE_RPOJECT_SUCCESS. State: ', state)
            return [...state, action.payload];
        case GET_PROJECTS:
            console.info('inside GET_PROJECTS. State: ', state);
            return action.payload;
        default:
            return state;
    }
}
