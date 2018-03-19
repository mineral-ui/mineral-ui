/* @flow */
import React from 'react';
import Button from '../../../../library/Button';

export default [
  {
    type: 'do',
    description:
      'Use the [appropriate variant](/color#guidelines-variants) for your intent.',
    example: (
      <Button variant="success" primary>
        Proceed to Checkout
      </Button>
    )
  },
  {
    type: 'dont',
    description:
      "Don't use a variant that differs from intent, as this will cause confusion.",
    example: (
      <Button variant="danger" primary>
        Continue
      </Button>
    )
  },
  {
    type: 'do',
    description: `Clearly label button actions to be predictable for
frictionless interaction. Exceptions would include "Ok", "Cancel", etc. which
should be used sparingly. Labels should be structured: \`<verb> <noun>\`.`,
    example: <Button primary>Save Changes</Button>
  },
  {
    type: 'dont',
    description: `Don't use "click me" or other vague messaging. Users should know
exactly what will happen when they click a Button.`,
    example: <Button primary>Click Me</Button>
  }
];
