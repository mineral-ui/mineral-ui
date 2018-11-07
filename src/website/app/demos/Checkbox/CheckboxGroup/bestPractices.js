/* @flow */
import React from 'react';
import DemoForm from '../common/DemoForm';
import { FormField } from '../../../../../library/Form';
import Checkbox from '../../../../../library/Checkbox';
import { CheckboxGroup } from '../../../../../library/Checkbox';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'do',
    description: `Use when the number of choices is relatively small.`,
    example: (
      <DemoForm>
        <FormField
          input={CheckboxGroup}
          name="wants"
          label="What do you want in a component library?"
          data={[
            { label: 'Simplicity', value: 'simplicity' },
            { label: 'Quality', value: 'quality' },
            { label: 'Speed', value: 'speed' }
          ]}
        />
      </DemoForm>
    )
  },
  {
    type: 'do',
    description: `For simple boolean questions, use a single checkbox.`,
    example: (
      <DemoForm>
        <Checkbox name="terms" label="I agree to the terms of service" />
      </DemoForm>
    )
  },
  {
    type: 'dont',
    description: `Don't use when the user should only select a single option.
Use a [Radio](/components/radio) instead.`,
    example: (
      <DemoForm>
        <FormField
          input={CheckboxGroup}
          name="contact"
          label="Choose your preferred contact method."
          data={[
            { label: 'Email', value: 'email' },
            { label: 'Telephone', value: 'telephone' },
            { label: 'Text message', value: 'text' },
            { label: 'None', value: 'none' }
          ]}
        />
      </DemoForm>
    )
  }
];

export default bestPractices;
