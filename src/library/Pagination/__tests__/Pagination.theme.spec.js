/**
 * @jest-environment node
 */
/* @flow */
import React from 'react';
import testThemeOverrides from '../../../../utils/testThemeOverrides';
import { getProcessedComponentThemeKeys } from '../../themes/processComponentTheme';
import Pagination, { paginationTheme } from '../index';

describe('Pagination', () => {
  describe('theme overrides', () => {
    testThemeOverrides(
      <Pagination
        currentPage={1}
        onPageChange={jest.fn()}
        pageSize={10}
        totalCount={100}
        showPageJumper
      />,
      getProcessedComponentThemeKeys(paginationTheme)
    );
  });
});
