/* @flow */
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { createStyledComponent } from '../../../../../library/styles';
import Button from '../../../../../library/Button';
import Dropdown from '../../../../../library/Dropdown';
import data from '../../Menu/components/menuData';

const DemoLayout = createStyledComponent('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
});

export default {
  id: 'controlled',
  description: `Dropdown controls its own state by default,
and can optionally be managed by the application as a controlled component through the \`isOpen\` prop.
Callbacks for \`onOpen\` and \`onClose\` are also provided.`,
  title: 'Controlled',
  scope: { Button, Component, data, DemoLayout, Dropdown, findDOMNode },
  source: `
    class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
      }

      onOpen(event) {
        this.setState({ isOpen: true });
      }

      onClose(event) {
        // Prevent extra call to toggleDropdown when clicking the controlling button.
        // Also avoid interactions with other dropdowns.
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


      toggleDropdown(event) {
        if (this.state.isOpen) {
          this.onClose(event);
        } else {
          this.onOpen(event);
        }
      }

      render() {
        const label = this.state.isOpen ? 'Close Dropdown' : 'Open Dropdown';
        return (
          <DemoLayout ref={node => { this.demoLayout = node }}>
            <Dropdown
              data={data}
              isOpen={this.state.isOpen}
              onOpen={this.onOpen}
              onClose={this.onClose}>
              <Button>{label}</Button>
            </Dropdown>
            <Button onClick={this.toggleDropdown}>{label}</Button>
          </DemoLayout>
        );
      }
    }`
};
