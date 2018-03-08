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
import Select from '../../../../../Select';
import Button from '../../../../../Button';
import DemoLayout from '../components/DemoLayout';
import { basicData as data } from '../components/selectData';

export default {
  id: 'trigger-ref',
  title: 'Trigger ref',
  description: `The following example demonstrates how to get a reference to the
Select trigger element.`,
  scope: { Button, Component, data, DemoLayout, Select },
  source: `
  () => {
    class MyForm extends Component {
      constructor() {
        super();

        this.focus = this.focus.bind(this);
      }

      focus() {
        this.trigger.focus();
      }

      render() {
        return (
          <DemoLayout>
            <Select data={data} triggerRef={ref => { this.trigger = ref; }} />
            <Button onClick={ this.focus }>Focus the control</Button>
          </DemoLayout>
        )
      }
    }

    return <MyForm />;
  }`
};
