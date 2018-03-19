/* @flow */
import React from 'react';
import FormField from '../../../../library/Form/FormField';
import TextArea from '../../../../library/TextArea';

export default [
  {
    type: 'do',
    description: `Wrap TextArea in a [FormField](/components/form-field) and provide a
brief, descriptive label.`,
    example: <FormField input={TextArea} label="Name" />
  },
  {
    type: 'do',
    description: `Use a placeholder to hint at the expected content.`,
    example: (
      <FormField
        input={TextArea}
        label="Comments"
        placeholder="Leave a comment"
      />
    )
  },
  {
    type: 'dont',
    description: `Don't use a \`placeholder\` as a field label. This is not
accessible and a poor experience.`,
    example: <TextArea placeholder="Comments" />
  }
];
