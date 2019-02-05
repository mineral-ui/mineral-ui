/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import Button from '../../../library/Button';
import ButtonGroup from '../ButtonGroup';
import testThemeOverrides from '../../../../utils/testThemeOverrides';

describe('ButtonGroup', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <ButtonGroup aria-label="Test">
        <Button>Content</Button>
      </ButtonGroup>,
      ['ButtonGroupButton_borderStartColor']
    );
  });
});
