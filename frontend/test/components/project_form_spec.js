import React from 'react';
import {
    findRenderedDOMComponentWithTag,
    renderIntoDocument,
    Simulate } from 'react-addons-test-utils';

import ProjectForm from '../../app/js/components/project_form';

describe('ProjectForm', () => {
    function createProjectForm(props = {}) {
        props.handleSubmit || (props.handleSubmit = function() {
            console.error('Provide your OWN handleSubmit, fool!'); });
        props.fields = Object.assign({name: ''}, props.fields);
        return renderIntoDocument(<ProjectForm {...props} />);
    }
    it('should call handleSubmit on a submit event', () => {
        let handleSubmitSpy = jasmine.createSpy('handleSubmit');
        let newForm = createProjectForm({ handleSubmit: handleSubmitSpy });

        let form = findRenderedDOMComponentWithTag(newForm, 'form');
        Simulate.submit(form);

        expect(handleSubmitSpy).toHaveBeenCalled();
        // TODO test that this works with an actual button click
    });
});