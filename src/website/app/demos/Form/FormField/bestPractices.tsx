/* @flow */
import React from 'react';
import { FormField } from '../../../../../library/Form';
import TextInput from '../../../../../library/TextInput/';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const forgotPassword = (
  <a
    href="/forgotPassword"
    onClick={(e) => {
      e.preventDefault();
    }}>
    Forgot Password?
  </a>
);
const longCaption = (
  <div>
    <p style={{ marginTop: 0 }}>
      Passwords must contain at least 4 of the following:
    </p>
    <ol>
      <li>8 or more characters</li>
      <li>less than 25 characters</li>
      <li>a letter</li>
      <li>a number</li>
      <li>a special character; not allowed: /\(),.</li>
    </ol>
  </div>
);

const bestPractices: BestPractices = [
  {
    type: 'do',
    description:
      'Wrap inputs in a FormField and provide a brief, descriptive label.',
    example: <FormField input={TextInput} label="Name" />
  },
  {
    type: 'do',
    description: `Use the [appropriate variant](/color#guidelines-variants)
to match your intent.`,
    example: (
      <FormField input={TextInput} label="Promo Code" variant="success" />
    )
  },
  {
    type: 'dont',
    description: `Don't use a variant that differs from intent, as this will
cause confusion.`,
    example: (
      <FormField input={TextInput} label="Account Name" variant="danger" />
    )
  },
  {
    type: 'do',
    description: `Provide useful \`secondaryText\`, when necessary.`,
    example: (
      <FormField
        input={TextInput}
        label="Password"
        secondaryText={forgotPassword}
      />
    )
  },
  {
    type: 'dont',
    description: `Don't put too much \`secondaryText\`.`,
    example: (
      <FormField
        input={TextInput}
        label="Password"
        secondaryText={longCaption}
      />
    )
  },
  {
    type: 'do',
    description: `Provide a brief, helpful \`caption\`, when necessary.`,
    example: (
      <FormField
        input={TextInput}
        label="Password"
        caption="Must be at least 8 characters, longer is better, any characters accepted."
      />
    )
  },
  {
    type: 'dont',
    description: `Don't put too much text in a \`caption\`.`,
    example: (
      <FormField input={TextInput} label="Password" caption={longCaption} />
    )
  },
  {
    type: 'do',
    description: `Use the \`hideLabel\` prop to hide the label in an
accessible manner when the design requires it.`,
    example: (
      <FormField
        input={TextInput}
        label="Search"
        placeholder="Search..."
        hideLabel
      />
    )
  }
];

export default bestPractices;
