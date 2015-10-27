import React from 'react';
import { render } from 'react-dom';
import { Router, Route } from 'react-router';

class App extends React.Component {
    render() {
        return (
            <div>
                <a href="#/projects/new">Add New Project</a>
            </div>
        );
    }
}

class NewProject extends React.Component {
    render() {
        return (
            <div>New Project</div>
        );
    }
}

render((
    <Router>
        <Route path="/" component={App}/>
        <Route path="projects/new" component={NewProject}/>
    </Router>
), document.getElementById("root"));
