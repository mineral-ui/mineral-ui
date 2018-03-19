/* @flow */
import { Component } from 'react';
import TextArea from '../../../../../library/TextArea';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `In a controlled TextArea, the value is handled by a React
component.  Set the value with the \`value\` prop and provide an \`onChange\`
handler.`,
  scope: { Component, TextArea },
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
          <TextArea
            value={this.state.value}
            onChange={this.handleChange} />
        );
      }
    }

    return <MyForm />;
  }
  `
};
