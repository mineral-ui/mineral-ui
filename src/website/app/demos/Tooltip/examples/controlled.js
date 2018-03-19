/* @flow */
import { Component } from 'react';
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import Tooltip from '../../../../../library/Tooltip';

const DemoLayout = createStyledComponent('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
});

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `Tooltip controls its own state by default,
and can optionally be managed by the application as a controlled component
through the \`isOpen\` prop. Callbacks for \`onOpen\` and \`onClose\` are also
provided.`,
  scope: { Button, Component, DemoLayout, Tooltip },
  source: `
    class App extends Component {
      constructor(props) {
        super(props);
        this.state = {isOpen: true};
        this.toggleTooltip = this.toggleTooltip.bind(this);
      }

      toggleTooltip() {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
      }

      render() {
        const label = this.state.isOpen ? 'Close Tooltip' : 'Open Tooltip';
        return (
          <DemoLayout>
            <Tooltip
              content="This tooltip is controlled"
              isOpen={this.state.isOpen}
              placement="top">
              <Button>Button</Button>
            </Tooltip>
            <Button onClick={this.toggleTooltip}>{label}</Button>
          </DemoLayout>
        );
      }
    }`
};
