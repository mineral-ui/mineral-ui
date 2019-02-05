/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import Button from '../Button';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

describe('Button', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<Button />, ['Button_backgroundColor']);
    testThemeOverrides(<Button primary />, ['Button_backgroundColor_primary']);
  });
});
