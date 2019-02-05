/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import {
  FormField,
  FormFieldDivider,
  FormFieldset,
  formFieldDividerTheme,
  formFieldsetTheme
} from '../index';

describe('FormField', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <FormField id="test" label="Test" caption="test" secondaryText="test" />,
      [
        'FormFieldLabel_color',
        'FormFieldLabel_fontSize',
        'FormFieldLabel_fontWeight',
        'FormFieldLabel_marginBottom'
      ]
    );
  });
});

describe('FormFieldDivider', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <FormFieldDivider />,
      getProcessedComponentThemeKeys(formFieldDividerTheme)
    );
  });
});

describe('FormFieldset', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <FormFieldset legend="test" />,
      getProcessedComponentThemeKeys(formFieldsetTheme)
    );
  });
});
