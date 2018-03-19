/* @flow */
import React from 'react';
import { componentTheme } from '../../../../library/TextInput/TextInput';
import bestPractices from './bestPractices';
import examples from './examples';

const doc = require('!!react-docgen-loader!../../../../library/TextInput/TextInput');

export default [
  {
    bestPractices,
    componentTheme,
    doc,
    examples,
    slug: 'text-input',
    title: 'TextInput',
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, TextInput applies undocumented properties to the{' '}
        <em>input</em>.
      </p>
    ),
    whenHowToUse: `Use a TextInput to accept brief, free-form input from a user.

TextInputs should always have an associated label for accessibility and so the
user knows what information to provide. See [FormField](/components/form-field).

Be specific when choosing the \`type\` for your TextInput. Mobile devices will
display different keyboards depending on the input type.

Provide [additional attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)
to aid frictionless interaction with your forms. E.g. \`autocorrect="off"\` on
an input accepting a user's name.`
  }
];
