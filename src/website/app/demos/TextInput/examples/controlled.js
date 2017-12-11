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
import DemoLayout from '../components/DemoLayout';
import TextInput from '../../../../../TextInput';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `In a controlled TextInput, the value is handled by a React
component.  Set the value with the \`value\` prop and provide an \`onChange\`
handler.`,
  scope: { Component, DemoLayout, TextInput },
  source: `
  () => {
    class MyForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
          value: this.props.value
        };

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
      }

      handleTextInputChange(event) {
        this.setState({
          value: event.target.value
        });

        if (this.props.onChange) {
          this.props.onChange(event);
        }
      }

      render() {
        const textInputProps = {
          ...this.props,
          onChange: this.handleTextInputChange,
          value: this.state.value || 'Hello World'
        };

        return (
          <TextInput { ...textInputProps } />
        );
      }
    }

    return <MyForm />;
  }
  `
};
