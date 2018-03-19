/* @flow */
import React from 'react';
import { componentTheme as radioComponentTheme } from '../../../../library/Radio/Radio';
import { componentTheme as radioGroupComponentTheme } from '../../../../library/Radio/RadioGroup';
import radioExamples from './examples/Radio';
import radioGroupExamples from './examples/RadioGroup';
import bestPractices from './bestPractices';

const radioDoc = require('!!react-docgen-loader!../../../../library/Radio/Radio');
const radioGroupDoc = require('!!react-docgen-loader!../../../../library/Radio/RadioGroup');

export default [
  {
    bestPractices: bestPractices.radio,
    componentTheme: radioComponentTheme,
    doc: radioDoc,
    examples: radioExamples,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, Radio applies undocumented properties to the{' '}
        <em>input</em>.
      </p>
    ),
    slug: 'radio',
    title: 'Radio',
    whenHowToUse: `Use Radios to change settings rather than initiate actions.

Radios are usually created in [groups](/components/radio-group) or two or more.`
  },
  {
    bestPractices: bestPractices.radioGroup,
    componentTheme: radioGroupComponentTheme,
    doc: radioGroupDoc,
    examples: radioGroupExamples,
    propsComment: (
      <p>
        Unlike most other components, which apply undocumented properties to the
        root element, RadioGroup applies undocumented properties to the{' '}
        <em>Radio</em> component.
      </p>
    ),
    slug: 'radio-group',
    title: 'RadioGroup',
    whenHowToUse: `RadioGroup is used to provide a simpler API for creating a
group of [Radios](/components/radio).  It also provides proper row spacing and an
inline layout option.

Use a RadioGroup to allow users to select a single option from a list.

Use Radios when the number of choices is fairly small.  If the number of
choices is large, consider an alternate form control, such as a select, which
has a more compact layout.

Use Radios to change settings rather than initiate actions.

Use caution when determining a default selection for a group of Radios.
* If a default is provided, ensure that it does not make assumptions about your
users choices.
* If a default is not provided, be aware that 'no selection' is a state that
users cannot return to once a selection is made.
* Both of these case can generally be addressed by providing a neutral option.
If this is insufficient, consider an alternate form control.

RadioGroups should be wrapped in a [FormField](/components/form-field) to provide an
accessible label and other features.  See the [FormField example](#form-field)
for details.`
  }
];
