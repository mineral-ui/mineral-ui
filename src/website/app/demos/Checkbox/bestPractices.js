/* @flow */
import React from 'react';
import DemoForm from './components/DemoForm';
import { FormField } from '../../../../library/Form';
import Checkbox from '../../../../library/Checkbox';
import { CheckboxGroup } from '../../../../library/Checkbox';

export default {
  checkbox: [
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
  ],
  checkboxGroup: [
    {
      type: 'do',
      description: `Use when the number of choices is relatively small.`,
      example: (
        <DemoForm>
          <FormField
            input={CheckboxGroup}
            name="wants"
            label="What do you want in a component library?"
            data={[
              { label: 'Simplicity', value: 'simplicity' },
              { label: 'Quality', value: 'quality' },
              { label: 'Speed', value: 'speed' }
            ]}
          />
        </DemoForm>
      )
    },
    {
      type: 'do',
      description: `For simple boolean questions, use a single checkbox.`,
      example: (
        <DemoForm>
          <Checkbox name="terms" label="I agree to the terms of service" />
        </DemoForm>
      )
    },
    {
      type: 'dont',
      description: `Don't use when the user should only select a single option.
Use a [Radio](/components/radio) instead.`,
      example: (
        <DemoForm>
          <FormField
            input={CheckboxGroup}
            name="contact"
            label="Choose your preferred contact method."
            data={[
              { label: 'Email', value: 'email' },
              { label: 'Telephone', value: 'telephone' },
              { label: 'Text message', value: 'text' },
              { label: 'None', value: 'none' }
            ]}
          />
        </DemoForm>
      )
    }
  ]
};
