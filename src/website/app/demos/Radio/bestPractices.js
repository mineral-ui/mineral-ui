/* @flow */
import React from 'react';
import DemoForm from './components/DemoForm';
import { FormField } from '../../../../library/Form';
import { RadioGroup } from '../../../../library/Radio';

export default {
  radio: [
    {
      type: 'do',
      description: `Begin labels with a capital letter.`,
      example: (
        <DemoForm>
          <RadioGroup
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
          <RadioGroup
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
  radioGroup: [
    {
      type: 'do',
      description: `Use when the number of choices is relatively small.`,
      example: (
        <DemoForm>
          <FormField
            input={RadioGroup}
            name="contact"
            label="Contact Method"
            defaultChecked="none"
            data={[
              { label: 'Email', value: 'email' },
              { label: 'Telephone', value: 'telephone' },
              { label: 'Text message', value: 'text' },
              { label: 'None', value: 'none' }
            ]}
          />
        </DemoForm>
      )
    },
    {
      type: 'dont',
      description: `Use caution when determining a default selection.  Don't
make assumptions about your users choices.`,
      example: (
        <DemoForm>
          <FormField
            input={RadioGroup}
            name="contact"
            label="Contact Method"
            defaultChecked="telephone"
            data={[
              { label: 'Email', value: 'email' },
              { label: 'Telephone', value: 'telephone' },
              { label: 'Text message', value: 'text' }
            ]}
          />
        </DemoForm>
      )
    },
    {
      type: 'do',
      description: `Use caution when determining a default selection.  Provide
a neutral option.`,
      example: (
        <DemoForm>
          <FormField
            input={RadioGroup}
            name="contact"
            label="Contact Method"
            defaultChecked="none"
            data={[
              { label: 'Email', value: 'email' },
              { label: 'Telephone', value: 'telephone' },
              { label: 'Text message', value: 'text' },
              { label: 'None', value: 'none' }
            ]}
          />
        </DemoForm>
      )
    },
    {
      type: 'dont',
      description: `Don't use when the user should be able to select multiple
options. Use a [Checkbox](/components/checkbox) instead.`,
      example: (
        <DemoForm>
          <FormField
            input={RadioGroup}
            name="wants"
            label="What do you want in a component library?"
            defaultChecked="none"
            data={[
              { label: 'Simplicity', value: 'simplicity' },
              { label: 'Quality', value: 'quality' },
              { label: 'Speed', value: 'speed' }
            ]}
          />
        </DemoForm>
      )
    }
  ]
};
