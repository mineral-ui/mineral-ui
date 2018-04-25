/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import FormFieldDivider from '../FormFieldDivider';
import examples from '../../../website/app/demos/Form/examples/FormFieldDivider';
import testDemoExamples from '../../../../utils/testDemoExamples';

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
});
