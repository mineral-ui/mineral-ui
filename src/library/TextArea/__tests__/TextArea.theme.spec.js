/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import TextArea from '../index';

describe('TextArea', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<TextArea />, ['TextArea_backgroundColor']);
  });
});
