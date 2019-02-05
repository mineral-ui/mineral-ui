/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import Avatar from '../Avatar';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

describe('Avatar', () => {
  describe('theme overrides', () => {
    testThemeOverrides(<Avatar>A</Avatar>, [
      'Avatar_fontSize_large',
      'Avatar_fontWeight',
      'Avatar_size_large'
    ]);
  });
});
