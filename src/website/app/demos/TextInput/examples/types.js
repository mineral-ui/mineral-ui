/* @flow */
import React from 'react';
import FormField from '../../../../../library/Form/FormField';
import TextInput from '../../../../../library/TextInput/';
import DemoLayout from '../../shared/DemoLayout';

const types = [
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week'
  /* Unsupported types
  'button',
  'checkbox',
  'color',
  'file',
  'hidden',
  'image',
  'radio',
  'range',
  'reset',
  'submit'
  */
];

const Demo = () => {
  return (
    <DemoLayout>
      {types.map((type, index) => (
        <FormField label={type} input={TextInput} type={type} key={index} />
      ))}
    </DemoLayout>
  );
};

export default {
  id: 'types',
  title: 'Input Types',
  description: `Various input types`,
  hideFromProd: true,
  hideSource: true,
  scope: { Demo },
  source: `<Demo />`
};
