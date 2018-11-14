/* @flow */
import { Component } from 'react';
import Button from '../../../../../../library/Button';
import TextArea from '../../../../../../library/TextArea';
import DemoLayout from '../../../common/DemoLayout';

export default {
  id: 'input-ref',
  title: 'Input ref',
  description:
    'The following example demonstrates how to get a reference to the underlying `input` element.',
  scope: { Button, Component, DemoLayout, TextArea },
  source: `
  () => {
    class MyForm extends Component {
      constructor() {
        super();

        this.focus = this.focus.bind(this);
      }

      focus() {
        this.input.focus();
      }

      render() {
        return (
          <DemoLayout>
            <TextArea inputRef={ref => { this.input = ref; }} />
            <Button onClick={ this.focus }>Focus the input</Button>
          </DemoLayout>
        )
      }
    }

    return <MyForm />;
  }`
};
