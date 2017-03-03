import React from 'react';
import { mount, shallow } from 'enzyme';
import Home from '../../app/js/components/home';

describe('Home Component', () => {
  it('dispatches an action to get the list of projects', () => {
    let getProjectsSpy = jasmine.createSpy('getProjects');
    const props = {
      getProjects: getProjectsSpy,
      projects: [{ id: 1, name: 'first project' }, { id: 2, name: 'second project' }]
    }
    let home = mount(<Home {...props} />);

    expect(getProjectsSpy).toHaveBeenCalled();
  });

  it('displays the list of projects returned by getProjects', () => {
    const props = {
      getProjects: () => {},
      projects: [ { id: 1, name: 'first project' }, { id: 2, name: 'second project' } ]
    }

    let home = shallow(<Home {...props} />);
    expect(home.find('.projects')).toIncludeText('first project');
    expect(home.find('.projects')).toIncludeText('second project');
  });
});