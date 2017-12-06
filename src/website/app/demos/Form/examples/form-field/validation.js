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
import DemoLayout from '../../components/DemoLayout';
import Button from '../../../../../../Button';
import TextInput from '../../../../../../TextInput';
import FormField from '../../../../../../Form/FormField';

export default {
  id: 'validation',
  title: 'Validation',
  description: `This example demonstrates simple required field validation.  An empty input will fail validation while a non-empty input will pass.`,
  scope: { Button, Component, DemoLayout, FormField, TextInput },
  source: `
  () => {
    class MyForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
          caption: undefined,
          valid: false,
          validated: false,
          value: '',
          variant: undefined
        };

        this.handleTextInputChange = this.handleTextInputChange.bind(this);
        this.validate = this.validate.bind(this);
      }

      handleTextInputChange(event) {
        this.setState({
          value: event.target.value
        });
      }

      validate(event) {
        if (this.state.value) {
          this.setState({
            caption: 'Success, the value is valid.',
            valid: true,
            validated: true,
            variant: 'success'
          });
        } else {
          this.setState({
            caption: 'Oops, the value is invalid.',
            valid: false,
            validated: true,
            variant: 'danger'
          });
        }

        this.input.focus();
      }

      render() {
        const { caption, valid, validated, variant, value } = this.state;
        const formFieldProps = {
          label: 'Example',
          caption,
          required: true,
          variant
        };
        const inputProps = {
          invalid: validated ? !valid : undefined,
          onChange: this.handleTextInputChange,
          inputRef: ref => { this.input = ref; },
          value
        };

        return (
          <DemoLayout>
            <FormField {...formFieldProps}>
              <TextInput {...inputProps} />
            </FormField>

            <Button onClick={this.validate}>Validate</Button>
          </DemoLayout>
        );
      }
    }

    return <MyForm />;
  }`
};
