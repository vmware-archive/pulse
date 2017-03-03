import projectsReducer from '../../app/js/reducers/projects';
import { CREATE_PROJECT_SUCCESS, GET_PROJECTS } from '../../app/js/actions';

describe('projects reducer', () => {
    it('initializes to a default state', () => {
        expect(projectsReducer(undefined, {})).toEqual([]);
    });

    it('creates a new project upon receiving a CREATE_PROJECT_SUCCESS action', () => {
        expect(projectsReducer([], {
            type: CREATE_PROJECT_SUCCESS,
            payload: {name: 'George', id: 12345}
        })).toEqual([{name: 'George', id: 12345}]);
        expect(projectsReducer([{id:1, name: 'Pete'}], {
            type: CREATE_PROJECT_SUCCESS,
            payload: {name: 'George', id: 12345}
        })).toEqual([{id:1, name:'Pete'}, {name: 'George', id: 12345}]);
    });

    it('sets the projects with all project information upon receiving a GET_PROJECTS action', () => {
        const initialState = { projects: [] };
        const getProjectsAction = {
            type: GET_PROJECTS,
            payload: [
                { name: 'Paul', id: 1 },
                { name: 'John', id: 3 }
            ]
        };

        const nextState = projectsReducer(initialState, getProjectsAction);
        expect(nextState).toEqual(
             [
                { name: 'Paul', id: 1 },
                { name: 'John', id: 3 }
            ]);
    });
});
