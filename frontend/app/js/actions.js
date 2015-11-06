import { post } from 'axios';
import { pushState } from 'redux-router';
import 'es6-promise';

export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';

export function createProjectSuccess(payload) {
    return {type: CREATE_PROJECT_SUCCESS, payload};
}

export function createProject(payload) {
    return (dispatch) => {
        return post(`${API_HOST_URL}/projects`, payload)
            .then(() => dispatch(createProjectSuccess(payload)))
            .then(() => dispatch(pushState(null, '/')));
    };
}
