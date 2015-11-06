import React from 'react';
import { createStore } from 'redux';
import App from '../../app/js/containers/app';
import AppComponent from '../../app/js/components/app';
import sd from 'skin-deep';

describe('App Container', () => {
    it('passes ui props to child component', () => {
        let initialState = {
            ui: {stuff: 'things'}
        };
        let store = createStore((state) => state, initialState);
        let rendered = sd.shallowRender(<App store={store} />).getRenderOutput();
        expect(rendered.props.ui).toEqual({stuff: 'things'});
    });
});
