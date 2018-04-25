/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../TextInput';
import examples from '../../../website/app/demos/TextInput/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';

function shallowTextInput() {
  return shallow(<TextInput />);
}

describe('TextInput', () => {
  testDemoExamples(examples, {
    exclude: ['states']
  });

  it('renders', () => {
    const textInput = shallowTextInput();

    expect(textInput.exists()).toEqual(true);
  });
});
