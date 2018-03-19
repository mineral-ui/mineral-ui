/* @flow */
import { Component } from 'react';
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';

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
