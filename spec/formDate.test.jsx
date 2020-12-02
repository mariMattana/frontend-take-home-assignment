import * as React from 'react';
import { mount } from 'enzyme';
import FormDate from '../src/components/savingPlans/formDate/index';

describe('date updates', () => {
  beforeEach(() => {
    jest
      .spyOn(Date, 'now')
      .mockImplementation(() => new Date('2020-12-01T11:01:58.135Z'))
  })
  afterEach(() => {
    jest.clearAllMocks();
  });
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
  it('should decrease 01 month', () => {
    const wrapper = mount(<FormDate />);
    wrapper.find('.right-arrow').first().simulate('click');
    wrapper.find('.right-arrow').first().simulate('click');
    wrapper.find('.left-arrow').first().simulate('click');
    expect(wrapper.state().date.format('MMMM')).toEqual("January")
  }); 
  it('should decrease 01 month, using arrow keys', () => {
    const wrapper = mount(<FormDate />);
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 39 });
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 39 });
    wrapper.find('.input-goal').first().simulate('keydown', { keyCode: 37 });
    expect(wrapper.state().date.format('MMMM')).toEqual("January")
  });  
});