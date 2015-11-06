import { CREATE_PROJECT_SUCCESS } from '../actions';

export default function projects(state=[], action={}) {
    switch(action.type) {
        case CREATE_PROJECT_SUCCESS:
            return [...state, action.payload];
        default:
            return state;
    }
}
