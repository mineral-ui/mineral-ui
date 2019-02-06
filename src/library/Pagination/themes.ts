/* @flow */
import { PaginationThemeFn } from './types';

export const paginationTheme: PaginationThemeFn = (baseTheme) => ({
  PaginationPageJumper_width: '4.65em',
  Pagination_gutterWidth: baseTheme.space_inline_sm,
  ...baseTheme
});
