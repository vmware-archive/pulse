import reducer from '../../app/js/reducers/alert';
import { CREATE_PROJECT_SUCCESS, CREATE_PROJECT_FAILURE } from '../../app/js/actions';


describe('alert reducer', () => {
    it('initializes to a default state', () => {
        expect(reducer(undefined, {})).toEqual({});
    });

    it('creates a new alert upon receiving a CREATE_PROJECT_SUCCESS action', () => {
        expect(reducer({}, {
            type: CREATE_PROJECT_SUCCESS,
            payload: {name: 'George', id: 12345}
        })).toEqual({type: 'info', message: 'George was created'});
    });

    it('creates a new alert upon receiving a CREATE_PROJECT_FAILURE action', () => {
        expect(reducer({}, {
            type: CREATE_PROJECT_FAILURE,
            payload: {name: 'George', data: "db error"}
        })).toEqual({type: 'danger', message: 'There was a problem creating George: db error'});
    });
});
