/* @flow */
import { Component } from 'react';
import TextInput from '../../../../../library/TextInput/';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `In a controlled TextInput, the value is handled by a React
component.  Set the value with the \`value\` prop and provide an \`onChange\`
handler.`,
  scope: { Component, TextInput },
  source: `
  () => {
    class MyForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
          value: 'Hello World'
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
          <TextInput
            value={this.state.value}
            onChange={this.handleChange} />
        );
      }
    }

    return <MyForm />;
  }
  `
};
