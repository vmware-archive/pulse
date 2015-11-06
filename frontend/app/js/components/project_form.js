import React from 'react';

export default class ProjectForm extends React.Component {
    render() {
        const {fields: {name}, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" className="form-control" {...name}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
            </form>
        );
    }
}
