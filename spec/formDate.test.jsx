import * as React from 'react';
import { mount } from 'enzyme';
import FormDate from '../src/components/savingPlans/formDate/index';

describe('date updates', () => {
  it('should increase 01 month from now', () => {
    const wrapper = mount(<FormDate />);
    wrapper.find('.right-arrow').first().simulate('click');
    expect(wrapper.state().date.format('MMMM')).toEqual("January")
  });
  it('should increase 01 month from now, using arrow keys', () => {
    const wrapper = mount(<FormDate />);
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 39 });
    expect(wrapper.state().date.format('MMMM')).toEqual("January")
  });
  it('should increase 02 months from now, using arrow keys', () => {
    const wrapper = mount(<FormDate />);
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 39 });
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 39 });
    expect(wrapper.state().date.format('MMMM')).toEqual("February")
  });
  it('should not decrease 01 month from now, allow only future dates', () => {
    const wrapper = mount(<FormDate />);
    wrapper.find('.left-arrow').first().simulate('click');
    expect(wrapper.state().date.format('MMMM')).toEqual("December")
  });
  it('should not decrease 01 month from now, allow only future dates, using arrow keys', () => {
    const wrapper = mount(<FormDate />);
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 37 });
    expect(wrapper.state().date.format('MMMM')).toEqual("December")
  });  
  it('should not decrease 02 months from now, allow only future dates, using arrow keys', () => {
    const wrapper = mount(<FormDate />);
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 37 });
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 37 });
    expect(wrapper.state().date.format('MMMM')).toEqual("December")
  });  
});