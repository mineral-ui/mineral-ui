/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import Checkbox, { CheckboxGroup } from '../index';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

describe('Checkbox', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<Checkbox label="test" />, [
      'CheckboxControl_backgroundColor'
    ]);
  });
});

describe('CheckboxGroup', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<CheckboxGroup name="test" />, [
      'CheckboxGroupControl_marginVertical_stacked'
    ]);
  });
});
