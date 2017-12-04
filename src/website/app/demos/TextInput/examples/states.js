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
import React from 'react';
import { createStyledComponent } from '../../../../../styles';
import DemoLayout from '../components/DemoLayout';
import TextInput from '../../../../../TextInput';
import { simulate } from 'glamor';

const FieldSetRoot = createStyledComponent(
  'fieldset',
  {
    border: 'none',
    '& > *': {
      marginBottom: '0.5rem',
      marginRight: '0.5rem'
    }
  },
  { rootEl: 'fieldset' }
);

function FieldSet(props: {
  label: string,
  variant?: 'success' | 'warning' | 'danger'
}) {
  const { label, variant } = props;
  const variantProps = {
    variant
  };

  return (
    <FieldSetRoot>
      <legend>{label}</legend>
      <TextInput defaultValue="Regular" {...variantProps} />
      <TextInput
        {...simulate('hover')}
        defaultValue="Hover"
        {...variantProps}
      />
      <TextInput
        {...simulate('focus', 'hover')}
        defaultValue="Focus & Hover"
        {...variantProps}
      />
      <TextInput
        {...simulate('focus', 'active')}
        defaultValue="Focus & Active"
        {...variantProps}
      />
      <TextInput
        {...simulate('active')}
        defaultValue="Active"
        {...variantProps}
      />
      <TextInput readOnly defaultValue="Read Only" {...variantProps} />
      <TextInput disabled defaultValue="Disabled" {...variantProps} />
    </FieldSetRoot>
  );
}

export default {
  id: 'states',
  title: 'States',
  hideFromProd: true,
  hideSource: true,
  scope: { DemoLayout, FieldSet, TextInput },
  source: `
    <DemoLayout>
      <FieldSet label="Regular" />
      <FieldSet label="Success" variant="success" />
      <FieldSet label="Warning" variant="warning" />
      <FieldSet label="Danger" variant="danger" />
    </DemoLayout>
  `
};
