import * as React from 'react';
import { mount } from 'enzyme';
import FormAmount from '../src/components/savingPlans/formAmount/index'

describe('numeric result', () => {
  it('should be numeric', () => {
    const result = mount(<FormAmount />);
    result.find('.dollar-input').first().simulate('change', {target: {value: 'abcdefghijk'}});
    const input = result.find('.dollar-input')
    expect(input.first().prop('value')).toEqual("0.00");
  })
  it('should display formatted as money', () => {
    const result = mount(<FormAmount />);
    result.find('.dollar-input').first().simulate('change', {target: {value: '876543'}});
    const input = result.find('.dollar-input')
    expect(input.first().prop('value')).toEqual("8,765.43");
  })
})