import React from 'react';

import Alert from './alert';

export default class App extends React.Component {
    render() {
        let { alert } = this.props.ui;
        return (
            <div>
                <Alert {...alert} />
                {this.props.children}
            </div>
        );
    }
}
