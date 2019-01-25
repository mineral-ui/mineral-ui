/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import Link, { linkTheme } from '../index';

describe('Link', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <Link href="http://example.com">test</Link>,
      getProcessedComponentThemeKeys(linkTheme)
    );
  });
});
