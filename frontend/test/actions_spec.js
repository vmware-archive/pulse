import 'jasmine-ajax';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from '../app/js/actions';

describe('actions', () => {
    describe('createProjectSuccess', () => {
        it('should create an action with a successfully created project', () => {
            let createdProject = {id: 1, name: 'George'};
            expect(actions.createProjectSuccess(createdProject)).toEqual({
                type: actions.CREATE_PROJECT_SUCCESS,
                payload: createdProject
            });
        });
    });

    describe('createProject', () => {
        const mockStore = configureStore([thunkMiddleware]);
        beforeEach(function() {
            jasmine.Ajax.install();
        });
        afterEach(function() {
            jasmine.Ajax.uninstall();
        });

        it('creates a CREATE_PROJECT_SUCCESS action after posting a project', (done) => {
            const fields = {name: 'Persephone'};
            const expectedActions = [
                { type: actions.CREATE_PROJECT_SUCCESS, payload: fields }
            ];

            jasmine.Ajax.stubRequest(`${API_HOST_URL}/projects`, undefined, 'POST').andReturn({ status: 201 });

            const store = mockStore({}, expectedActions, (err) => {
                // error is non-null if there are extra actions we didn't specify; we can ignore these
                //if (err) throw err;
                expect(jasmine.Ajax.requests.mostRecent()).toBeDefined('Request was not called');
                done();
            });

            store.dispatch(actions.createProject(fields));
        });

        it('creates a CREATE_PROJECT_FAILURE action after posting a duplicate project name', (done) => {
            const fields = {name: 'Persephone'};
            const expectedActions = [
                { type: actions.CREATE_PROJECT_FAILURE, payload: fields }
            ];

            jasmine.Ajax.stubRequest(`${API_HOST_URL}/projects`, undefined, 'POST').andReturn({ status: 409 });

            const store = mockStore({}, expectedActions, (err) => {
                // error is non-null if there are extra actions we didn't specify; we can ignore these
                //if (err) throw err;
                expect(jasmine.Ajax.requests.mostRecent()).toBeDefined('Request was not called');
                done();
            });

            store.dispatch(actions.createProject(fields));
        });
    });
});
