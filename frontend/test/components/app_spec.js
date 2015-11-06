import React from 'react';
import {
    renderIntoDocument,
    findRenderedComponentWithType
} from 'react-addons-test-utils';

import App from '../../app/js/components/app';
import Alert from '../../app/js/components/alert';

describe('App Component', () => {
    function createApp(props={}) {
        return renderIntoDocument(<App {...props} />);
    }
    it('should contain an Alert', () => {
        let app = createApp({ui: {alert: {message: 'Alert message'}}});

        let alert;
        expect(() => {
            alert = findRenderedComponentWithType(app, Alert);
        }).not.toThrow();
        expect(alert.props.message).toEqual('Alert message');
    });
});
