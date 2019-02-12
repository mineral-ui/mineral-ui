/* @flow */
import { SIZE } from './constants';

import { ComponentTheme, ComponentThemeFn, ThemeValue } from '../themes/types';

type Size = keyof typeof SIZE;

export interface PaginationProps {
  currentPage: number;
  messages?: PaginationMessages;
  onPageChange: (currentPage: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
  pageSize: number;
  pageSizes?: Array<number>;
  showPageJumper?: boolean;
  showPageNumbers?: boolean;
  showPageSizer?: boolean;
  size?: Size;
  theme: object;
  totalCount: number;
  visibleRange?: number;
}

export interface PaginationDefaultProps {
  messages: PaginationMessages;
  showPageNumbers: boolean;
  pageSizes: Array<number>;
  size: Size;
  visibleRange: number;
}

export interface PagesProps {
  currentPage: number;
  handleClick: (currentPage: number) => void;
  handleIncrement: (
    next: boolean,
    callback?: (nextPage: number) => void
  ) => void;
  showPageNumbers?: boolean;
  messages: PagesMessages;
  size?: Size;
  totalPages: number;
  visibleRange: number;
}

export type IncrementButtonProps = PagesProps & {
  direction: string;
  focusedNodeWhenDisabled: HTMLButtonElement | null | undefined;
};

export interface PageJumperProps {
  'aria-label'?: string;
  currentPage: number;
  inputRef: (node: HTMLInputElement | null | undefined) => void;
  messages: PageJumperMessages;
  onPageChange: (currentPage: number) => void;
  size?: Size;
  totalPages: number;
}

export interface PageSizerProps {
  'aria-label'?: string;
  currentPage: number;
  messages: PageSizerMessages;
  onPageSizeChange: (pageSize: number) => void;
  pageSize: number;
  pageSizes: Array<number>;
  size?: Size;
  totalCount: number;
  totalPages: number;
}

export interface PaginationMessages {
  category?: string;
  label: string;
  pages?: PagesMessages;
  pageJumper?: PageJumperMessages;
  pageSizer?: PageSizerMessagesWithoutCategory;
}

interface PagesMessages {
  pageLabel: (
    isCurrentPage: boolean,
    isLastPage: boolean,
    page: number
  ) => string;
  next: string;
  previous: string;
}

interface PageJumperMessages {
  label: string;
  placeholder: string;
}

interface PageSizerMessagesWithoutCategory {
  status: (
    category: string,
    first: number,
    last: number,
    total: number
  ) => string;
  itemText: (pageSize: number) => string;
}

type PageSizerMessages = PageSizerMessagesWithoutCategory & {
  category: string;
};

export type PaginationThemeFn = ComponentThemeFn<PaginationTheme>;
export type PaginationTheme = ComponentTheme<PaginationThemeKeys>;
interface PaginationThemeKeys {
  PaginationPageJumper_width: ThemeValue;
  Pagination_gutterWidth: ThemeValue;
}
