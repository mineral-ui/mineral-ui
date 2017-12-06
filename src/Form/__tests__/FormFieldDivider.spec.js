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
import FormFieldDivider from '../FormFieldDivider';
import examples from '../../website/app/demos/Form/examples/form-field-divider';
import testDemoExamples from '../../../utils/testDemoExamples';

function shallowFormFieldDivider(props = {}) {
  const formFieldDividerProps = {
    ...props
  };

  return shallow(<FormFieldDivider {...formFieldDividerProps} />);
}

describe('FormFieldDivider', () => {
  describe('renders', () => {
    it('root', () => {
      const formFieldDivider = shallowFormFieldDivider();

      expect(formFieldDivider.exists()).toEqual(true);
    });
  });

  testDemoExamples(examples);
});
