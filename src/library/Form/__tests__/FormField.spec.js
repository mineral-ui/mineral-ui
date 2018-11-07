/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import FormField from '../FormField';
import examples from '../../../website/app/demos/Form/FormField/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowFormField(props = {}) {
  const formFieldProps = {
    label: 'Test',
    ...props
  };

  return shallow(<FormField {...formFieldProps} />);
}

describe('FormField', () => {
  testDemoExamples(examples);

  describe('renders', () => {
    it('root', () => {
      const formField = shallowFormField();

      expect(formField.exists()).toEqual(true);
    });
  });

  describe('theme overrides', () => {
    testThemeOverrides(
      <FormField id="test" label="Test" caption="test" secondaryText="test" />,
      [
        'FormFieldLabel_color',
        'FormFieldLabel_fontSize',
        'FormFieldLabel_fontWeight',
        'FormFieldLabel_marginBottom'
      ]
    );
  });
});
