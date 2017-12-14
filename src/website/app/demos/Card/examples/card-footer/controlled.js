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
import { createStyledComponent } from '../../../../../../styles';
import Button from '../../../../../../Button';
import Card, { CardBlock, CardFooter } from '../../../../../../Card';
import _DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

const DemoLayout = createStyledComponent(_DemoLayout, {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',

  '&[class]::before,&[class]::after': {
    display: 'none'
  },

  '& > [class]': {
    float: 'none',
    margin: 0
  },

  '& > [class]:last-child': {
    width: 'auto'
  }
});

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `CardFooter controls its own state by default,
and can optionally be managed by the application as a controlled component through the \`isOpen\` attribute.
Callbacks for \`onOpen\` and \`onClose\` are also provided.`,
  scope: {
    Button,
    Card,
    CardBlock,
    CardFooter,
    Component,
    loremIpsum,
    DemoLayout,
    findDOMNode
  },
  source: `
    class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.toggle = this.toggle.bind(this);
      }

      onOpen(event) {
        this.setState({ isOpen: true });
      }

      onClose(event) {
        this.setState({ isOpen: false });
      }

      toggle(event) {
        if (this.state.isOpen) {
          this.onClose(event);
        } else {
          this.onOpen(event);
        }
      }

      render() {
        const label = this.state.isOpen ? 'Collapse CardFooter' : 'Expand CardFooter';
        return (
          <DemoLayout ref={node => { this.demoLayout = node }}>
            <Card>
              <CardBlock>{loremIpsum}</CardBlock>
              <CardFooter
                expandable
                isOpen={this.state.isOpen}
                onOpen={this.onOpen}
                onClose={this.onClose}
                title="Footer Title">
                <CardBlock>{loremIpsum}</CardBlock>
              </CardFooter>
            </Card>
            <Button onClick={this.toggle}>{label}</Button>
          </DemoLayout>
        );
      }
    }`
};
