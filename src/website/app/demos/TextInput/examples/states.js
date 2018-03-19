/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../library/styles';
import DemoLayout from '../components/DemoLayout';
import { FormFieldset as _FormFieldset } from '../../../../../library/Form';
import TextInput from '../../../../../library/TextInput/';
import { simulate } from 'glamor';

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
  const textInputProps = {
    label: 'Example',
    variant
  };

  return (
    <FormFieldset legend={legend}>
      <TextInput defaultValue="Regular" {...textInputProps} />
      <TextInput
        {...simulate('hover')}
        defaultValue="Hover"
        {...textInputProps}
      />
      <TextInput
        {...simulate('focus')}
        defaultValue="Focus"
        {...textInputProps}
      />
      <TextInput
        {...simulate('focus', 'hover')}
        defaultValue="Focus & Hover"
        {...textInputProps}
      />
      <TextInput
        {...simulate('focus', 'active')}
        defaultValue="Focus & Active"
        {...textInputProps}
      />
      <TextInput
        {...simulate('active')}
        defaultValue="Active"
        {...textInputProps}
      />
      <TextInput readOnly defaultValue="Read Only" {...textInputProps} />
      <TextInput disabled defaultValue="Disabled" {...textInputProps} />
    </FormFieldset>
  );
};

export default {
  id: 'states',
  title: 'States',
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
