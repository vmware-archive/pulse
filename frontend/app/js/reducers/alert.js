import { CREATE_PROJECT_SUCCESS } from '../actions';

export default function alert(state={}, action={}) {
    switch(action.type) {
        case CREATE_PROJECT_SUCCESS:
            return {message: `${action.payload.name} was created`};
        default:
            return state;
    }
}
