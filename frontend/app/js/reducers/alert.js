import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE } from '../actions';

export default function alert(state={}, action={}) {
    switch(action.type) {
        case CREATE_PROJECT_SUCCESS:
            return {message: `${action.payload.name} was created`};
        case CREATE_PROJECT_FAILURE:
            return {message: `There was a problem creating ${action.payload.name}: ${action.payload.data}`}
        default:
            return state;
    }
}
