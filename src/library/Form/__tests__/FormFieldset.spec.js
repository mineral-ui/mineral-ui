/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { formFieldsetTheme } from '../themes';
import FormFieldset from '../FormFieldset';
import examples from '../../../website/app/demos/Form/FormFieldset/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';

function shallowFormFieldset(props = {}) {
  const formFieldsetProps = {
    ...props
  };

  return shallow(<FormFieldset {...formFieldsetProps} />);
}

describe('FormFieldset', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const formFieldset = shallowFormFieldset();

      expect(formFieldset.exists()).toEqual(true);
    });
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <FormFieldset legend="test" />,
      getProcessedComponentThemeKeys(formFieldsetTheme)
    );
  });
});
