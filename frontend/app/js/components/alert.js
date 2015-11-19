import React from 'react';

export default class Alert extends React.Component {
    hasContent() {
        return !!this.props.message;
    }
    render() {
        return this.hasContent() && (
            <div className={`alert alert-${this.props.type}`} role="alert">
                {this.props.message}
            </div>
        );
    }
}

