/* @flow */
import React from 'react';
import DemoForm from '../common/DemoForm';
import CheckboxGroup from '../../../../../library/Checkbox/CheckboxGroup';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'do',
    description: `Begin labels with a capital letter.`,
    example: (
      <DemoForm>
        <CheckboxGroup
          name="options"
          data={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
            { label: 'Option 3', value: '3' }
          ]}
        />
      </DemoForm>
    )
  },
  {
    type: 'dont',
    description: `Don't use punctuation at the end of each line if the label
is a single sentence, word, or fragment.`,
    example: (
      <DemoForm>
        <CheckboxGroup
          name="options"
          data={[
            { label: 'Option 1', value: '1' },
            { label: 'I strongly agree', value: 'agree' },
            { label: 'Apple', value: 'apple' }
          ]}
        />
      </DemoForm>
    )
  }
];

export default bestPractices;
