/* @flow */
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { createStyledComponent } from '../../../../../../library/styles';
import Button from '../../../../../../library/Button';
import Card, { CardBlock, CardFooter } from '../../../../../../library/Card';
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
