/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../../library/styles';
import DemoLayout from '../components/DemoLayout';
import { FormFieldset as _FormFieldset } from '../../../../../library/Form';
import TextArea from '../../../../../library/TextArea';
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
  const textAreaProps = {
    label: 'Example',
    variant
  };

  return (
    <FormFieldset legend={legend}>
      <TextArea defaultValue="Regular" {...textAreaProps} />
      <TextArea
        {...simulate('hover')}
        defaultValue="Hover"
        {...textAreaProps}
      />
      <TextArea
        {...simulate('focus')}
        defaultValue="Focus"
        {...textAreaProps}
      />
      <TextArea
        {...simulate('focus', 'hover')}
        defaultValue="Focus & Hover"
        {...textAreaProps}
      />
      <TextArea
        {...simulate('focus', 'active')}
        defaultValue="Focus & Active"
        {...textAreaProps}
      />
      <TextArea
        {...simulate('active')}
        defaultValue="Active"
        {...textAreaProps}
      />
      <TextArea readOnly defaultValue="Read Only" {...textAreaProps} />
      <TextArea disabled defaultValue="Disabled" {...textAreaProps} />
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
