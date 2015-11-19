import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE } from '../actions';

export default function alert(state={}, action={}) {
    switch(action.type) {
        case CREATE_PROJECT_SUCCESS:
            return {type: 'info', message: `${action.payload.name} was created`};
        case CREATE_PROJECT_FAILURE:
            return {
                type: 'danger',
                message: `There was a problem creating ${action.payload.name}: ${action.payload.data}`
            };
        default:
            return state;
    }
}
