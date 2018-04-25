/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CheckboxGroup from '../CheckboxGroup';
import examples from '../../../website/app/demos/Checkbox/examples/CheckboxGroup';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowCheckboxGroup() {
  return shallow(<CheckboxGroup name="example" />);
}

describe('CheckboxGroup', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const checkboxGroup = shallowCheckboxGroup();

    expect(checkboxGroup.exists()).toEqual(true);
  });
});
