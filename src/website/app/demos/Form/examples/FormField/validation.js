/* @flow */
import { Component } from 'react';
import DemoLayout from '../../components/DemoLayout';
import Button from '../../../../../../library/Button';
import TextInput from '../../../../../../library/TextInput';
import FormField from '../../../../../../library/Form/FormField';

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
          input: TextInput,
          inputRef: ref => { this.input = ref; },
          invalid: validated ? !valid : undefined,
          label: 'Example',
          onChange: this.handleTextInputChange,
          caption,
          required: true,
          value,
          variant
        };

        return (
          <DemoLayout>
            <FormField {...formFieldProps} />
            <Button onClick={this.validate}>Validate</Button>
          </DemoLayout>
        );
      }
    }

    return <MyForm />;
  }`
};
