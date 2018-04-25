/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import FormFieldset from '../FormFieldset';
import examples from '../../../website/app/demos/Form/examples/FormFieldset';
import testDemoExamples from '../../../../utils/testDemoExamples';

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
});
