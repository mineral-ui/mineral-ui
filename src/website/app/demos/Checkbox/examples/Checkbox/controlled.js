/* @flow */
import { Component } from 'react';
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';

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
              label="Fluorite"
              value="fluorite"
              checked={this.state.values.indexOf('fluorite') !== -1}
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
