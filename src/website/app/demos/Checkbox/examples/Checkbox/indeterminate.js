/* @flow */
import { Component } from 'react';
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';

export default {
  id: 'indeterminate',
  title: 'Indeterminate',
  description: `Checkbox supports an indeterminate or *partially-checked* state.`,
  scope: { DemoForm, Checkbox, Component },
  source: `() => {
    class MyForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
          indeterminate: true
        };

        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState((prevState) => ({
          indeterminate: !prevState.indeterminate
        }));
      }

      render() {
        return (
          <DemoForm>
            <Checkbox
              name="indeterminate"
              label="Indeterminate"
              value="indeterminate"
              indeterminate={this.state.indeterminate}
              onChange={this.handleChange} />
          </DemoForm>
        );
      }
    }

    return <MyForm />;
  }
  `
};
