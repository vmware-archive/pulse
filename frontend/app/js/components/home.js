import React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component {
    constructor() {
        super();
        this.renderProjectList = this.renderProjectList.bind(this);
    }

    componentDidMount(){
        this.props.getProjects();
    }

    renderProjectList() {
        return (
            this.props.projects.map((project, index) => (
                <p key={index} >
                    {project.name}
                </p>
            ))
        )
    }
    render() {
        return (
            <div>
                <div className="projects">
                    { this.renderProjectList() }
                </div>
                <Link to="/projects/new">Add New Project</Link>
            </div>
        );
    }
}
