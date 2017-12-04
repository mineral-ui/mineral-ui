/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../styles';
import { FormField, FormFieldset, FormFieldDivider } from '../../../../Form';
import TextInput from '../../../../TextInput';
import DemoLayout from './components/DemoLayout';

const forgotPassword = (
  <a
    href="/forgotPassword"
    onClick={e => {
      e.preventDefault();
    }}>
    Forgot Password?
  </a>
);
const longCaption = (
  <div>
    <p>Passwords must contain at least 4 of the following:</p>
    <ol>
      <li>8 or more characters</li>
      <li>less than 25 characters</li>
      <li>a letter</li>
      <li>a number</li>
      <li>a special character; not allowed: /\(),.</li>
    </ol>
  </div>
);

const FormFieldWithHiddenLabel = createStyledComponent(FormField, {
  '& label > :first-child': {
    display: 'none'
  }
});

export default {
  formField: [
    {
      type: 'do',
      description:
        'Wrap inputs in a FormField and provide a brief, descriptive label.',
      example: (
        <FormField label="Name">
          <TextInput />
        </FormField>
      )
    },
    {
      type: 'do',
      description: `Use the [appropriate variant](/color/#guidelines-variants)
to match your intent.`,
      example: (
        <FormField label="Promo Code" variant="success">
          <TextInput />
        </FormField>
      )
    },
    {
      type: 'dont',
      description: `Don't use a variant that differs from intent, as this will
cause confusion.`,
      example: (
        <FormField label="Account Name" variant="danger">
          <TextInput />
        </FormField>
      )
    },
    {
      type: 'do',
      description: `Provide useful \`secondaryText\`, when necessary.`,
      example: (
        <FormField label="Password" secondaryText={forgotPassword}>
          <TextInput />
        </FormField>
      )
    },
    {
      type: 'dont',
      description: `Don't put too much \`secondaryText\`.`,
      example: (
        <FormField label="Password" secondaryText={longCaption}>
          <TextInput />
        </FormField>
      )
    },
    {
      type: 'do',
      description: `Provide a brief, helpful \`caption\`, when necessary.`,
      example: (
        <FormField
          label="Password"
          caption="Must be at least 8 characters, longer is better, any characters accepted.">
          <TextInput />
        </FormField>
      )
    },
    {
      type: 'dont',
      description: `Don't put too much text in a \`caption\`.`,
      example: (
        <FormField label="Password" caption={longCaption}>
          <TextInput />
        </FormField>
      )
    },
    {
      type: 'do',
      description: `Use the \`hideLabel\` prop to hide the label in an
accessible manner when the design requires it.`,
      example: (
        <FormField label="Search" hideLabel>
          <TextInput placeholder="Search..." />
        </FormField>
      )
    },
    {
      type: 'dont',
      description: `Don't hide the label without using the \`hideLabel\` prop.
Doing so will make the input inaccessible to users of Accessibility Technology
(AT).`,
      example: (
        <FormFieldWithHiddenLabel label="Search">
          <TextInput placeholder="Search..." />
        </FormFieldWithHiddenLabel>
      )
    }
  ],
  formFieldset: [
    {
      type: 'do',
      description: `Wrap multiple, related inputs in a FormFieldset and provide
a brief, descriptive \`legend\`. Note that the labels for the individual fields
are provided, but [hidden](../form-field/#hide-label) to reduce noise.`,
      example: (
        <FormFieldset legend="Address">
          <DemoLayout>
            <FormField label="Street Address, Line 1" hideLabel>
              <TextInput placeholder="1234 Main St" />
            </FormField>
            <FormField label="Street Address, Line 2" hideLabel>
              <TextInput placeholder="Apt 101" />
            </FormField>
            <FormField label="City" hideLabel>
              <TextInput placeholder="Anytown" />
            </FormField>
            <FormField label="State" hideLabel>
              <TextInput placeholder="CA" />
            </FormField>
            <FormField label="Postal Code" hideLabel>
              <TextInput placeholder="12345" />
            </FormField>
          </DemoLayout>
        </FormFieldset>
      )
    }
  ],
  formFieldDivider: [
    {
      type: 'dont',
      description: `Don't separate every [FormField](../form-field) with a
FormFieldDivider.`,
      example: (
        <DemoLayout>
          <FormField label="First Name">
            <TextInput />
          </FormField>
          <FormFieldDivider />
          <FormField label="Last Name">
            <TextInput />
          </FormField>
          <FormFieldDivider />
          <FormField label="Nickname">
            <TextInput />
          </FormField>
        </DemoLayout>
      )
    }
  ]
};
