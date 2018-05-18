/* @flow */
import React from 'react';
import {
  FormField,
  FormFieldset,
  FormFieldDivider
} from '../../../../library/Form';
import TextInput from '../../../../library/TextInput/';
import DemoLayout from '../shared/DemoLayout';

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

export default {
  formField: [
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
  ],
  formFieldset: [
    {
      type: 'do',
      description: `Wrap multiple, related inputs in a FormFieldset and provide
a brief, descriptive \`legend\`. Note that the labels for the individual fields
are provided, but [hidden](/components/form-field#hide-label) to reduce noise.`,
      example: (
        <FormFieldset legend="Address">
          <DemoLayout>
            <FormField
              input={TextInput}
              label="Street Address, Line 1"
              placeholder="1234 Main St"
              hideLabel
            />
            <FormField
              input={TextInput}
              label="Street Address, Line 2"
              placeholder="Apt 101"
              hideLabel
            />
            <FormField
              input={TextInput}
              label="City"
              placeholder="Anytown"
              hideLabel
            />
            <FormField
              input={TextInput}
              label="State"
              placeholder="CA"
              hideLabel
            />
            <FormField
              input={TextInput}
              label="Postal Code"
              placeholder="12345"
              hideLabel
            />
          </DemoLayout>
        </FormFieldset>
      )
    }
  ],
  formFieldDivider: [
    {
      type: 'dont',
      description: `Don't separate every [FormField](/components/form-field) with a
FormFieldDivider.`,
      example: (
        <DemoLayout>
          <FormField input={TextInput} label="First Name" />
          <FormFieldDivider />
          <FormField input={TextInput} label="Last Name" />
          <FormFieldDivider />
          <FormField input={TextInput} label="Nickname" />
        </DemoLayout>
      )
    }
  ]
};
