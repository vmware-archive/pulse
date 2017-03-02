import React from 'react';
import { createStore } from 'redux';
import Home from '../../app/js/containers/home';
import { shallow } from 'enzyme';
import * as actions from '../../app/js/actions';

describe('Home Container', () => {
  it('passes the list of projects to the Home component', () => {
    const initialState = {
      projects: [{ name: 'first project' }, { name: 'second project' }]
    };
    const store = createStore((state) => state, initialState);
    const rendered = shallow(<Home store={store} />);

    expect(rendered).toHaveProp('projects', [{ name: 'first project' },
      { name: 'second project' }]);
  });

  it('passes the getProjects action to the Home component', () => {
    spyOn(actions, 'getProjects').and.returnValue({ type: 'return value of getProjects' });
    const initialState = {
      projects: [{ name: 'first project' }, { name: 'second project' }]
    };
    const store = createStore((state) => state, initialState);
    spyOn(store, 'dispatch');
    const rendered = shallow(<Home store={store} />);
    rendered.props().getProjects();
    expect(actions.getProjects).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'return value of getProjects' });
  });
});
