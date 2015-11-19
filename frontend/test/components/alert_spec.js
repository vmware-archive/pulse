import React from 'react';
import {
    renderIntoDocument,
    findRenderedDOMComponentWithClass
} from 'react-addons-test-utils';
import { findDOMNode } from 'react-dom';

import Alert from '../../app/js/components/alert';

describe('Alert component', () => {
    function createAlert(props = {}) {
        return renderIntoDocument(<Alert {...props} />);
    }

    it('should render with a success alert', () => {
        let alert = createAlert({message: 'This is the message', type: 'info'});
        let domNode = findDOMNode(alert);
        expect(domNode.className).toMatch(/\balert-info\b/);
        expect(domNode.textContent).toMatch(/This is the message/);
    });

    it('should render with an error alert', () => {
        let alert = createAlert({message: 'This is an error message', type: 'danger'});
        let domNode = findDOMNode(alert);
        expect(domNode.className).toMatch(/\balert-danger\b/);
        expect(domNode.textContent).toMatch(/This is an error message/);
    });

    it('should not display if no message is defined', () => {
        let alert = createAlert();
        expect(alert.render()).toBe(false);
    });
});
