import { post } from 'axios';
import { pushState } from 'redux-router';
import 'es6-promise';

export const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
export const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';


export function createProjectSuccess(payload) {
    return {type: CREATE_PROJECT_SUCCESS, payload};
}

export function createProjectFailure(payload) {
    return {type: CREATE_PROJECT_FAILURE, payload};
}

export function createProject(payload) {
    return (dispatch) => {
        return post(`${API_HOST_URL}/projects`, payload)
            .then(() => dispatch(createProjectSuccess(payload)))
            .then(() => dispatch(pushState(null, '/')))
            .catch(function (response) {
                if (response instanceof Error) {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', response.message);
                } else {
                    // The request was made, but the server responded with a status code
                    // that falls out of the range of 2xx
                    let message = "An unknown error occurred";
                    if (response.status === 409) {
                        message = "Project name already exists";
                    }
                    dispatch(createProjectFailure({...payload, data: message}));
                }
            });
    };
}
