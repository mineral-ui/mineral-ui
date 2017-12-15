/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { shallow } from 'enzyme';
import { mountInThemeProvider } from '../../../utils/enzymeUtils';
import TextArea from '../TextArea';
import examples from '../../website/app/demos/TextArea/examples';
import testDemoExamples from '../../../utils/testDemoExamples';

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
  it('renders', () => {
    const textArea = shallowTextArea();

    expect(textArea.exists()).toEqual(true);
  });

  it('calls onInput when input changes', () => {
    const [, textArea] = mountTextArea();

    textArea
      .find('textarea')
      .simulate('input', { target: { value: 'Hello World' } });

    expect(textArea.props().onInput).toHaveBeenCalled();
  });

  testDemoExamples(examples);
});
