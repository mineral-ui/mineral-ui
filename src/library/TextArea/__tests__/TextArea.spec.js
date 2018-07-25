/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../../utils/enzymeUtils';
import TextArea from '../TextArea';
import examples from '../../../website/app/demos/TextArea/examples';
import testDemoExamples from '../../../../utils/testDemoExamples';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

function shallowTextArea(props = {}) {
  const textAreaProps = {
    ...props
  };
  return shallow(<TextArea {...textAreaProps} />);
}

function mountTextArea(props = {}) {
  const textAreaProps = {
    onInput: jest.fn(),
    ...props
  };

  return mountInThemeProvider(<TextArea {...textAreaProps} />);
}

describe('TextArea', () => {
  testDemoExamples(examples, {
    exclude: ['states']
  });

  it('renders', () => {
    const textArea = shallowTextArea();

    expect(textArea.exists()).toEqual(true);
  });

  describe('theme overrides', () => {
    testThemeOverrides(<TextArea />, ['TextArea_backgroundColor']);
  });

  it('calls onInput when input changes', () => {
    const [, textArea] = mountTextArea();

    textArea
      .find('textarea')
      .simulate('input', { target: { value: 'Hello World' } });

    expect(textArea.props().onInput).toHaveBeenCalled();
  });
});
