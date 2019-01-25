/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import Icon from '../Icon';

describe('Icon', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<Icon />, ['Icon_fill', 'Icon_size_medium']);
    testThemeOverrides(<Icon size="small" />, ['Icon_size_small']);
    testThemeOverrides(<Icon size="large" />, ['Icon_size_large']);
  });
});
