/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import Radio, { RadioGroup } from '../index';

describe('Radio', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<Radio label="test" />, [
      'RadioControl_backgroundColor'
    ]);
  });
});

describe('RadioGroup', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<RadioGroup name="test" />, [
      'RadioGroupControl_marginVertical_stacked'
    ]);
  });
});
