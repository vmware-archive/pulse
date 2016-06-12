import React from 'react';
import { createStore } from 'redux';
import App from '../../app/js/containers/app';
import AppComponent from '../../app/js/components/app';
import { shallow } from 'enzyme';

describe('App Container', () => {
    it('passes ui props to child component', () => {
        const initialState = {
            ui: {stuff: 'things'}
        };
        const store = createStore((state) => state, initialState);
        const rendered = shallow(<App store={store} />);
        expect(rendered).toHaveProp('ui', {stuff: 'things'});
    });
});
