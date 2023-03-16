import React from 'react';
import MyPracticeComponent from '../../src/MyPracticeComponent';

describe('MyPracticeComponent', () => {
  const defaultRender = <MyPracticeComponent />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  it('should use the default value when no value is given', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.find('.MyPracticeComponent').text()).toEqual('default');
  });

  // Structure Tests
  it('should have the class MyPracticeComponent', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper.prop('className')).toContain('MyPracticeComponent');
  });
});
