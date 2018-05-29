/* @flow */
import { Component } from 'react';
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `Provide the \`checked\` prop and an \`onChange\` handler to
create a controlled component.`,
  scope: { Button, ButtonGroup, Component, DemoLayout },
  source: `
  () => {
    class MyForm extends Component {
      constructor(props) {
        super(props);

        this.state = {
          checked: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.resetDefaultSelected = this.resetDefaultSelected.bind(this);
      }

      handleChange(event) {
        this.setState({
          checked: parseInt(event.target.getAttribute('data-index'))
        });
      }

      resetDefaultSelected() {
        this.setState({
          checked: 0
        });
      }

      render() {
        return (
          <DemoLayout>
            <ButtonGroup
              aria-label="Align text"
              checked={this.state.checked}
              onChange={this.handleChange}
              mode="radio">
              <Button>Left</Button>
              <Button>Center</Button>
              <Button>Right</Button>
            </ButtonGroup>
            <Button minimal size="small" onClick={this.resetDefaultSelected}>Reset to Default Alignment</Button>
          </DemoLayout>
        );
      }
    }

    return <MyForm />;
  }
  `
};
