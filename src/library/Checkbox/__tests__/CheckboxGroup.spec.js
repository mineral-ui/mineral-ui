/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import CheckboxGroup from '../CheckboxGroup';
import examples from '../../../website/app/demos/Checkbox/CheckboxGroup/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowCheckboxGroup() {
  return shallow(<CheckboxGroup name="test" />);
}

describe('CheckboxGroup', () => {
  testDemoExamples(examples);

  it('renders', () => {
    const checkboxGroup = shallowCheckboxGroup();

    expect(checkboxGroup.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<CheckboxGroup name="test" />, [
      'CheckboxGroupControl_marginVertical_stacked'
    ]);
  });
});
