import 'jasmine-ajax';
import configureStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';
import * as actions from '../app/js/actions';

describe('actions', () => {
    let mockStore;
    beforeEach(() => {
        mockStore = configureStore([thunkMiddleware]);
    });

    describe('createProject', () => {
        beforeEach(function () {
            jasmine.Ajax.install();
        });
        afterEach(function () {
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

    describe('getProjects', () => {
        beforeEach(function () {
            jasmine.Ajax.install();
        });

        afterEach(function () {
            jasmine.Ajax.uninstall();
        });

        it('fetches the projects from the server', (done) => {
            let projectsResponse = [{ id: 1, name: 'George' }, { id: 2, name: 'Sam' }];
            const expectedActions = [
                { type: 'GET_PROJECTS', projects: projectsResponse }
            ];
            jasmine.Ajax.stubRequest(`${API_HOST_URL}/projects`, undefined, 'GET').andReturn({ data: projectsResponse });
            const store = mockStore({}, expectedActions, (err) => {
                expect(jasmine.Ajax.requests.mostRecent()).toBeDefined('Request was not called');
                done();
            });
            store.dispatch(actions.getProjects());
        });
    });
});
