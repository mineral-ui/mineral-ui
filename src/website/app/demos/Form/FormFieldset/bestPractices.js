/* @flow */
import React from 'react';
import { FormField, FormFieldset } from '../../../../../library/Form';
import TextInput from '../../../../../library/TextInput/';
import DemoLayout from '../../common/DemoLayout';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'do',
    description: `Wrap multiple, related inputs in a FormFieldset and provide
a brief, descriptive \`legend\`. Note that the labels for the individual fields
are provided, but [hidden](/components/form-field#hide-label) to reduce noise.`,
    example: (
      <FormFieldset legend="Address">
        <DemoLayout>
          <FormField
            input={TextInput}
            label="Street Address, Line 1"
            placeholder="1234 Main St"
            hideLabel
          />
          <FormField
            input={TextInput}
            label="Street Address, Line 2"
            placeholder="Apt 101"
            hideLabel
          />
          <FormField
            input={TextInput}
            label="City"
            placeholder="Anytown"
            hideLabel
          />
          <FormField
            input={TextInput}
            label="State"
            placeholder="CA"
            hideLabel
          />
          <FormField
            input={TextInput}
            label="Postal Code"
            placeholder="12345"
            hideLabel
          />
        </DemoLayout>
      </FormFieldset>
    )
  }
];

export default bestPractices;
