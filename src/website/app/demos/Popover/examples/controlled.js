/* @flow */
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import DemoContent from '../components/DemoContent';
import Popover from '../../../../../library/Popover';

const DemoLayout = createStyledComponent('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
});

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `Popover controls its own state by default,
and can optionally be managed by the application as a controlled component through the \`isOpen\` attribute.
Callbacks for \`onOpen\` and \`onClose\` are also provided.`,
  scope: { Button, Component, DemoContent, DemoLayout, findDOMNode, Popover },
  source: `
    class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.togglePopover = this.togglePopover.bind(this);
      }

      onOpen(event) {
        this.setState({ isOpen: true });
      }

      onClose(event) {
        // Prevent extra call to togglePopover when clicking the controlling button.
        // Also avoid interactions with other popovers.
        const demoLayoutNode = findDOMNode(this.demoLayout);
        if (
          !event.nativeEvent &&
          demoLayoutNode &&
          demoLayoutNode.contains(event.target)
        ) {
          event.stopImmediatePropagation();
        }

        this.setState({ isOpen: false });
      }

      togglePopover(event) {
        if (this.state.isOpen) {
          this.onClose(event);
        } else {
          this.onOpen(event);
        }
      }

      render() {
        const label = this.state.isOpen ? 'Close Popover' : 'Open Popover';
        return (
          <DemoLayout ref={node => { this.demoLayout = node }}>
            <Popover
              content={<DemoContent />}
              isOpen={this.state.isOpen}
              onOpen={this.onOpen}
              onClose={this.onClose}>
              <Button>{label}</Button>
            </Popover>
            <Button onClick={this.togglePopover}>{label}</Button>
          </DemoLayout>
        );
      }
    }`
};
