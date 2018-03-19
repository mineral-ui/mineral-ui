/* @flow */
import React from 'react';
import { componentTheme } from '../../../../library/TextArea/TextArea';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/TextArea/TextArea');

export default [
  {
    bestPractices,
    componentTheme,
    doc,
    examples,
    slug: 'text-area',
    title: 'TextArea',
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, TextArea applies undocumented properties to the{' '}
        <em>textarea</em>.
      </p>
    ),
    whenHowToUse: `Use a TextArea to accept potentially lengthy, free-form input
from a user.

TextAreas should always have an associated label for accessibility and so the
user knows what information to provide. See [FormField](/components/form-field).`
  }
];
