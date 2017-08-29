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
import Button from '../Button';
import examples from '../../website/app/demos/Button/examples';
import testDemoExamples from '../../../utils/testDemoExamples';

function shallowButton(props = {}) {
  const buttonProps = {
    children: 'Do Something',
    onClick: jest.fn(),
    ...props
  };
  return shallow(<Button {...buttonProps} />);
}

describe('Button', () => {
  it('renders', () => {
    const button = shallowButton();

    expect(button.exists()).toEqual(true);
  });

  it('calls onClick when clicked', () => {
    const button = shallowButton();

    button.simulate('click');

    expect(button.props().onClick).toHaveBeenCalled();
  });

  testDemoExamples(examples);
});
