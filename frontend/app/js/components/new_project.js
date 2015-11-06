import React from 'react';
import ProjectForm from '../containers/project_form';

export default class NewProject extends React.Component {
    render() {
        return (
            <div>
                <h1>New Project</h1>
                <ProjectForm onSubmit={this.props.createProject} />
            </div>
        );
    }
}
