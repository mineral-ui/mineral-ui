/* @flow */
import React from 'react';
import { FormField, FormFieldDivider } from '../../../../../library/Form';
import TextInput from '../../../../../library/TextInput/';
import DemoLayout from '../../common/DemoLayout';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'dont',
    description: `Don't separate every [FormField](/components/form-field) with a
FormFieldDivider.`,
    example: (
      <DemoLayout>
        <FormField input={TextInput} label="First Name" />
        <FormFieldDivider />
        <FormField input={TextInput} label="Last Name" />
        <FormFieldDivider />
        <FormField input={TextInput} label="Nickname" />
      </DemoLayout>
    )
  }
];

export default bestPractices;
