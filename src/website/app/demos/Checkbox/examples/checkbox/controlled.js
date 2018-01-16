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
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../Checkbox';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `In a controlled Checkbox, the checked state is handled by a React
component. Set the checked state with the \`checked\` prop and provide an
\`onChange\` handler.`,
  scope: { Component, DemoForm, Checkbox },
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
            <Checkbox
              name="minerals"
              label="Flourite"
              value="flourite"
              checked={this.state.values.indexOf('flourite') !== -1}
              onChange={this.handleChange} />
            <Checkbox
              name="minerals"
              label="Quartz"
              value="quartz"
              checked={this.state.values.indexOf('quartz') !== -1}
              onChange={this.handleChange} />
            <Checkbox
              name="minerals"
              label="Magnetite"
              value="magnetite"
              checked={this.state.values.indexOf('magnetite') !== -1}
              onChange={this.handleChange} />
          </DemoForm>
        );
      }
    }

    return <MyForm />;
  }
  `
};
