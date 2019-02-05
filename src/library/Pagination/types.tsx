/* @flow */
import { SIZE } from './constants';

import type {
  ComponentTheme,
  ComponentThemeFn,
  ThemeValue
} from '../themes/types';

type Size = $Keys<typeof SIZE>;

export type PaginationProps = {
  currentPage: number,
  messages?: PaginationMessages,
  onPageChange: (currentPage: number) => void,
  onPageSizeChange?: (pageSize: number) => void,
  pageSize: number,
  pageSizes?: Array<number>,
  showPageJumper?: boolean,
  showPageNumbers?: boolean,
  showPageSizer?: boolean,
  size?: Size,
  theme: Object,
  totalCount: number,
  visibleRange?: number
};

export type PaginationDefaultProps = {
  messages: PaginationMessages,
  showPageNumbers: boolean,
  pageSizes: Array<number>,
  size: Size,
  visibleRange: number
};

export type PagesProps = {
  currentPage: number,
  handleClick: (currentPage: number) => void,
  handleIncrement: (
    next: boolean,
    callback?: (nextPage: number) => void
  ) => void,
  showPageNumbers?: boolean,
  messages: PagesMessages,
  size?: Size,
  totalPages: number,
  visibleRange: number
};

export type IncrementButtonProps = PagesProps & {
  direction: string,
  focusedNodeWhenDisabled: ?HTMLButtonElement
};

export type PageJumperProps = {
  'aria-label'?: string,
  currentPage: number,
  inputRef: (node: ?HTMLInputElement) => void,
  messages: PageJumperMessages,
  onPageChange: (currentPage: number) => void,
  size?: Size,
  totalPages: number
};

export type PageSizerProps = {
  'aria-label'?: string,
  currentPage: number,
  messages: PageSizerMessages,
  onPageSizeChange: (pageSize: number) => void,
  pageSize: number,
  pageSizes: Array<number>,
  size?: Size,
  totalCount: number,
  totalPages: number
};

export type PaginationMessages = {|
  category?: string,
  label: string,
  pages?: PagesMessages,
  pageJumper?: PageJumperMessages,
  pageSizer?: $Diff<PageSizerMessages, { category: string }>
|};

type PagesMessages = {|
  pageLabel: (
    isCurrentPage: boolean,
    isLastPage: boolean,
    page: number
  ) => string,
  next: string,
  previous: string
|};

type PageJumperMessages = {|
  label: string,
  placeholder: string
|};

type PageSizerMessages = {|
  category: string,
  status: (
    category: string,
    first: number,
    last: number,
    total: number
  ) => string,
  itemText: (pageSize: number) => string
|};

export type PaginationThemeFn = ComponentThemeFn<PaginationTheme>;
export type PaginationTheme = ComponentTheme<PaginationThemeKeys>;
type PaginationThemeKeys = {|
  PaginationPageJumper_width: ThemeValue,
  Pagination_gutterWidth: ThemeValue
|};
