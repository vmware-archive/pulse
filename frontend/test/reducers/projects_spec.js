import reducer from '../../app/js/reducers/projects';
import { CREATE_PROJECT_SUCCESS } from '../../app/js/actions';

describe('projects reducer', () => {
    it('initializes to a default state', () => {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it('creates a new project upon receiving a CREATE_PROJECT_SUCCESS action', () => {
        expect(reducer([], {
            type: CREATE_PROJECT_SUCCESS,
            payload: {name: 'George', id: 12345}
        })).toEqual([{name: 'George', id: 12345}]);
        expect(reducer([{id:1, name: 'Pete'}], {
            type: CREATE_PROJECT_SUCCESS,
            payload: {name: 'George', id: 12345}
        })).toEqual([{id:1, name:'Pete'}, {name: 'George', id: 12345}]);
    });
});