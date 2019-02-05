/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import Table from '../index';

describe('Table', () => {
  describe('theme overrides', () => {
    const tableProps = {
      data: [
        { aa: 'aa0', ab: 'ab0', ac: 'ac0', ad: 'ad0' },
        { aa: 'aa2', ab: 'ab2', ac: 'ac2', ad: 'ad2' },
        { aa: 'aa1', ab: 'ab1', ac: 'ac1', ad: 'ad1' },
        { aa: 'aa3', ab: 'ab3', ac: 'ac3', ad: 'ad3', disabled: true }
      ],
      id: 'test',
      title: 'Test'
    };

    testThemeOverrides(<Table {...tableProps} />, ['Table_outline_focus']);
  });
});
