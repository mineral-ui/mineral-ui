/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { createStyledComponent } from '../../../../../styles';
import Button from '../../../../../Button';
import Dropdown from '../../../../../Dropdown';
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
