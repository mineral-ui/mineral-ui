/* @flow */
import { Component } from 'react';
import Select from '../../../../../library/Select';
import Button from '../../../../../library/Button';
import DemoLayout from '../components/DemoLayout';
import { basicData as data } from '../components/selectData';

export default {
  id: 'trigger-ref',
  title: 'Trigger ref',
  description: `The following example demonstrates how to get a reference to the
Select trigger element.`,
  scope: { Button, Component, data, DemoLayout, Select },
  source: `
  () => {
    class MyForm extends Component {
      constructor() {
        super();

        this.focus = this.focus.bind(this);
      }

      focus() {
        this.trigger.focus();
      }

      render() {
        return (
          <DemoLayout>
            <Select data={data} triggerRef={ref => { this.trigger = ref; }} />
            <Button onClick={ this.focus }>Focus the control</Button>
          </DemoLayout>
        )
      }
    }

    return <MyForm />;
  }`
};
