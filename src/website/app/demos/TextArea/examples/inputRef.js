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
import { Component } from 'react';
import TextArea from '../../../../../TextArea';
import Button from '../../../../../Button';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'input-ref',
  title: 'Input ref',
  description:
    'The following example demonstrates how to get a reference to the underlying `input` element.',
  scope: { Button, Component, DemoLayout, TextArea },
  source: `
  () => {
    class MyForm extends Component {
      constructor() {
        super();

        this.focus = this.focus.bind(this);
      }

      focus() {
        this.input.focus();
      }

      render() {
        return (
          <DemoLayout>
            <TextArea inputRef={ref => { this.input = ref; }} />
            <Button onClick={ this.focus }>Focus the input</Button>
          </DemoLayout>
        )
      }
    }

    return <MyForm />;
  }`
};
