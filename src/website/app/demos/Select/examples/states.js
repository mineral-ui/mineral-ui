/* @flow */
import React from 'react';
import { simulate } from 'glamor';
import { createStyledComponent } from '../../../../../library/styles';
import DemoLayout from '../components/DemoLayout';
import { FormFieldset as _FormFieldset } from '../../../../../library/Form';
import Select from '../../../../../library/Select';
import { basicData as data } from '../components/selectData';

const FormFieldset = createStyledComponent(_FormFieldset, {
  '& > *': {
    marginBottom: '0.5rem',
    marginRight: '0.5rem'
  }
});

const Fieldset = (props: {
  legend: string,
  variant?: 'success' | 'warning' | 'danger'
}) => {
  const { legend, variant } = props;
  const selectProps = {
    data,
    variant
  };

  return (
    <FormFieldset legend={legend}>
      <Select placeholder="Regular" {...selectProps} />
      <Select {...simulate('hover')} placeholder="Hover" {...selectProps} />
      <Select {...simulate('focus')} placeholder="Focus" {...selectProps} />
      <Select
        {...simulate('focus', 'hover')}
        placeholder="Focus & Hover"
        {...selectProps}
      />
      <Select
        {...simulate('focus', 'active')}
        placeholder="Focus & Active"
        {...selectProps}
      />
      <Select {...simulate('active')} placeholder="Active" {...selectProps} />
      <Select readOnly placeholder="Read Only" {...selectProps} />
      <Select disabled placeholder="Disabled" {...selectProps} />
    </FormFieldset>
  );
};

export default {
  id: 'states',
  title: 'States',
  description: `<Callout title="Note">
  <p key={0}>
    Much of this example is currently broken, due to
    the <code key={0}>simulate()</code> prop not being passed down to the
    ultimate element with styles dependent on state. We hope the switch to
    render props will enable a fix.
  </p>
</Callout>`,
  hideFromProd: true,
  hideSource: true,
  scope: { DemoLayout, Fieldset },
  source: `
    <DemoLayout>
      <Fieldset legend="Regular" />
      <Fieldset legend="Success" variant="success" />
      <Fieldset legend="Warning" variant="warning" />
      <Fieldset legend="Danger" variant="danger" />
    </DemoLayout>
  `
};
