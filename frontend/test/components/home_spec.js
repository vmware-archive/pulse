import React from 'react';
import { mount, shallow } from 'enzyme';
import Home from '../../app/js/components/home';

describe('Home Component', () => {
  it('displays the list of projects returned by getProjects', () => {
    let getProjectsSpy = jasmine.createSpy('getProjects');
    const props = {
      getProjects: getProjectsSpy,
      projects: [ { name: 'first project' }, { name: 'second project' } ]
    }

    let home = shallow(<Home {...props} />);
    expect(home.find('.projects')).toIncludeText('first project');
    expect(home.find('.projects')).toIncludeText('second project');
  });
});