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
import Radio from '../../../../../../Radio';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `In a controlled Radio, the checked state is handled by a React
component. Set the checked state with the \`checked\` prop and provide an
\`onChange\` handler.`,
  scope: { Component, DemoForm, Radio },
  source: `
  () => {
    class MyForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
          value: 'quartz'
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({
          value: event.target.value
        });
      }

      render() {
        return (
          <DemoForm>
            <Radio
              name="mineral"
              label="Quartz"
              value="quartz"
              checked={this.state.value === 'quartz'}
              onChange={this.handleChange} />
            <Radio
              name="mineral"
              label="Magnetite"
              value="magnetite"
              checked={this.state.value === 'magnetite'}
              onChange={this.handleChange} />
          </DemoForm>
        );
      }
    }

    return <MyForm />;
  }
  `
};
