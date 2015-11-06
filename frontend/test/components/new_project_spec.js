import React from 'react';

import { createRenderer } from 'react-addons-test-utils';

import NewProject from '../../app/js/components/new_project';
import ProjectForm from '../../app/js/containers/project_form';

describe('NewProject', () => {
    function createNewProject(props = {}) {
        let renderer = createRenderer();
        props.createProject || (props.createProject = function() { console.error('Provide your OWN createProject, fool!'); });
        renderer.render(<NewProject createProject={props.createProject} />);
        return renderer.getRenderOutput();
    }
    it('should render a ProjectForm', () => {
        let newProject = createNewProject();
        expect(newProject.props.children).toContain(jasmine.objectContaining({type: ProjectForm}));
    });

    it('should pass the createProject action creator to the ProjectForm', () => {
        let createProjectStub = () => 'project created!';
        let newProject = createNewProject({createProject: createProjectStub});
        let projectForm = newProject.props.children.find(function(child) {
            return child.type === ProjectForm;
        });
        expect(projectForm.props.onSubmit).toEqual(createProjectStub);
    });
});
