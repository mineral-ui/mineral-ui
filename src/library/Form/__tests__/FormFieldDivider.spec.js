/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import FormFieldDivider, { componentTheme } from '../FormFieldDivider';
import examples from '../../../website/app/demos/Form/examples/FormFieldDivider';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowFormFieldDivider(props = {}) {
  const formFieldDividerProps = {
    ...props
  };

  return shallow(<FormFieldDivider {...formFieldDividerProps} />);
}

describe('FormFieldDivider', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const formFieldDivider = shallowFormFieldDivider();

      expect(formFieldDivider.exists()).toEqual(true);
    });
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <FormFieldDivider />,
      getProcessedComponentThemeKeys(componentTheme)
    );
  });
});
