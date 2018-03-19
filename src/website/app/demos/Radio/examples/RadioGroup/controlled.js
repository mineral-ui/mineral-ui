/* @flow */
import { Component } from 'react';
import { RadioGroup } from '../../../../../../library/Radio';
import DemoForm from '../../components/DemoForm';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `Provide the \`checked\` prop and an \`onChange\` handler to
create a controlled component.`,
  scope: { Component, DemoForm, RadioGroup },
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
            <RadioGroup
              name="mineral"
              onChange={this.handleChange}
              checked={this.state.value}
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
