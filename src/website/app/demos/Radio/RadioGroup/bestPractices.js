/* @flow */
import React from 'react';
import DemoForm from '../common/DemoForm';
import { FormField } from '../../../../../library/Form';
import { RadioGroup } from '../../../../../library/Radio';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'do',
    description: `Use when the number of choices is relatively small.`,
    example: (
      <DemoForm>
        <FormField
          input={RadioGroup}
          name="contact"
          label="Contact Method"
          defaultChecked="none"
          data={[
            { label: 'Email', value: 'email' },
            { label: 'Telephone', value: 'telephone' },
            { label: 'Text message', value: 'text' },
            { label: 'None', value: 'none' }
          ]}
        />
      </DemoForm>
    )
  },
  {
    type: 'dont',
    description: `Use caution when determining a default selection.  Don't
make assumptions about your users choices.`,
    example: (
      <DemoForm>
        <FormField
          input={RadioGroup}
          name="contact"
          label="Contact Method"
          defaultChecked="telephone"
          data={[
            { label: 'Email', value: 'email' },
            { label: 'Telephone', value: 'telephone' },
            { label: 'Text message', value: 'text' }
          ]}
        />
      </DemoForm>
    )
  },
  {
    type: 'do',
    description: `Use caution when determining a default selection.  Provide
a neutral option.`,
    example: (
      <DemoForm>
        <FormField
          input={RadioGroup}
          name="contact"
          label="Contact Method"
          defaultChecked="none"
          data={[
            { label: 'Email', value: 'email' },
            { label: 'Telephone', value: 'telephone' },
            { label: 'Text message', value: 'text' },
            { label: 'None', value: 'none' }
          ]}
        />
      </DemoForm>
    )
  },
  {
    type: 'dont',
    description: `Don't use when the user should be able to select multiple
options. Use a [Checkbox](/components/checkbox) instead.`,
    example: (
      <DemoForm>
        <FormField
          input={RadioGroup}
          name="wants"
          label="What do you want in a component library?"
          defaultChecked="none"
          data={[
            { label: 'Simplicity', value: 'simplicity' },
            { label: 'Quality', value: 'quality' },
            { label: 'Speed', value: 'speed' }
          ]}
        />
      </DemoForm>
    )
  }
];

export default bestPractices;
