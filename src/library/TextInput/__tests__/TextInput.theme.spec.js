/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import TextInput from '../index';

describe('TextInput', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<TextInput />, ['TextInput_backgroundColor']);
  });
});
