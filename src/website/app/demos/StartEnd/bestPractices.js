/* @flow */
import React from 'react';
import StartEnd from '../../../../StartEnd';
import Button from '../../../../Button';

export default [
  {
    type: 'do',
    description:
      'Use StartEnd to align content to the left and right of a container.',
    example: (
      <StartEnd>
        <Button minimal>Back</Button>
        <Button primary variant="success">
          Continue
        </Button>
      </StartEnd>
    )
  }
];
