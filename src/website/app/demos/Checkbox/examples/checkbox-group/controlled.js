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
import { CheckboxGroup } from '../../../../../../Checkbox';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `Provide the \`checked\` prop and an \`onChange\` handler to
create a controlled component.`,
  scope: { CheckboxGroup, Component, DemoForm },
  source: `
  () => {
    class MyForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
          values: ['magnetite', 'quartz']
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        const { checked, value } = event.target;

        this.setState(prevState => {
          const values = [...prevState.values];
          const index = values.indexOf(value);
          const hasValue = index !== -1;

          if (checked && !hasValue) {
            values.push(value);
          } else if (hasValue) {
            values.splice(index, 1);
          }

          return { values };
        });
      }

      render() {
        return (
          <DemoForm>
            <CheckboxGroup
              name="minerals"
              onChange={this.handleChange}
              checked={this.state.values}
              data={[
                { label: 'Flourite', value: 'flourite' },
                { label: 'Magnetite', value: 'magnetite' },
                { label: 'Quartz', value: 'quartz' }
              ]} />
          </DemoForm>
        );
      }
    }

    return <MyForm />;
  }
  `
};
