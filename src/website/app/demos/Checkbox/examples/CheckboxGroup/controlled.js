/* @flow */
import { Component } from 'react';
import { CheckboxGroup } from '../../../../../../library/Checkbox';
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
                { label: 'Fluorite', value: 'fluorite' },
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
