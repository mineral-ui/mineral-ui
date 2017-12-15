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
import { FormFieldset } from '../../../../../Form';
import TextArea from '../../../../../TextArea';
import { simulate } from 'glamor';

const FieldSetRoot = createStyledComponent(FormFieldset, {
  '& > *': {
    marginBottom: '0.5rem',
    marginRight: '0.5rem'
  }
});

function FieldSet(props: {
  legend: string,
  variant?: 'success' | 'warning' | 'danger'
}) {
  const { legend, variant } = props;
  const textAreaProps = {
    label: 'Example',
    variant
  };

  return (
    <FieldSetRoot>
      <legend>{legend}</legend>
      <TextArea defaultValue="Regular" {...textAreaProps} />
      <TextArea
        {...simulate('hover')}
        defaultValue="Hover"
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
    </FieldSetRoot>
  );
}

export default {
  id: 'states',
  title: 'States',
  hideFromProd: true,
  hideSource: true,
  scope: { DemoLayout, FieldSet },
  source: `
    <DemoLayout>
      <FieldSet legend="Regular" />
      <FieldSet legend="Success" variant="success" />
      <FieldSet legend="Warning" variant="warning" />
      <FieldSet legend="Danger" variant="danger" />
    </DemoLayout>
  `
};
