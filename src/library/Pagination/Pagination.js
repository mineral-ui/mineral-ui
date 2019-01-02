/* @flow */
import React, { PureComponent } from 'react';
import { withTheme } from 'emotion-theming';
import { FlexItem } from '../Flex';
import Pages from './Pages';
import PageJumper from './PageJumper';
import PageSizer from './PageSizer';
import { PaginationRoot as Root } from './styled';
import { paginationTheme } from './themes';
import { SIZE } from './constants';

import { paginationPropTypes } from './propTypes';
import type { PaginationDefaultProps, PaginationProps } from './types';

export class Pagination extends PureComponent<PaginationProps> {
  static displayName = 'Pagination';

  static propTypes = paginationPropTypes;

  static defaultProps: PaginationDefaultProps = {
    messages: {
      category: 'rows',
      label: 'Pagination',
      pages: {
        next: 'Next',
        pageLabel: (isCurrentPage, isLastPage, page) =>
          (isCurrentPage ? 'Current page, ' : '') +
          (isLastPage ? 'Last page, ' : '') +
          page,
        previous: 'Previous'
      },
      pageJumper: {
        label: 'Jump to page',
        placeholder: 'Page #'
      },
      pageSizer: {
        status: (category, first, last, total) =>
          `${first}–${last} of ${total} ${category}`,
        itemText: (pageSize) => `${pageSize} per page`
      }
    },
    pageSizes: [10, 20, 50],
    showPageNumbers: true,
    size: SIZE.medium,
    visibleRange: 5
  };

  pageJumperInput: ?HTMLInputElement;

  render() {
    const {
      currentPage,
      messages: propMessages,
      onPageChange: ignoreOnPageChange,
      onPageSizeChange: ignoreOnPageSizeChange,
      pageSize,
      pageSizes,
      showPageJumper,
      showPageSizer,
      size,
      theme: baseTheme,
      totalCount,
      ...restProps
    } = this.props;
    const theme = paginationTheme(baseTheme);
    const messages = {
      ...Pagination.defaultProps.messages,
      ...propMessages
    };

    const rootProps = {
      'aria-label': messages.label,
      gutterWidth: theme.Pagination_gutterWidth,
      ...restProps
    };

    const totalPages = this.getTotalPages(pageSize);

    const pagesProps = {
      currentPage,
      handleClick: this.handleClick,
      handleIncrement: this.handleIncrement,
      messages: messages.pages,
      size,
      totalPages,
      ...restProps
    };

    const showPageSizerOrJumper = showPageSizer || showPageJumper;

    let pageJumperProps;
    if (showPageJumper) {
      pageJumperProps = {
        currentPage,
        inputRef: this.setPageJumperRef,
        key: 'Page Jumper',
        messages: messages.pageJumper,
        onPageChange: this.handlePageChange,
        size,
        totalPages,
        width: theme.PaginationPageJumper_width
      };
    }

    let pageSizerProps;
    if (showPageSizer) {
      pageSizerProps = {
        currentPage,
        key: 'Page Sizer',
        messages: { category: messages.category, ...messages.pageSizer },
        onPageSizeChange: this.handlePageSizeChange,
        pageSize,
        pageSizes,
        size,
        totalCount,
        totalPages
      };
    }

    return (
      <Root {...rootProps}>
        {showPageSizerOrJumper && (
          <FlexItem flex grow={1}>
            {showPageSizer && (
              <FlexItem>
                <PageSizer {...pageSizerProps} />
              </FlexItem>
            )}
            {showPageJumper && (
              <FlexItem marginStart="auto">
                <PageJumper {...pageJumperProps} />
              </FlexItem>
            )}
          </FlexItem>
        )}
        <FlexItem>
          <Pages {...pagesProps} />
        </FlexItem>
      </Root>
    );
  }

  setPageJumperRef = (node: ?HTMLInputElement) => {
    this.pageJumperInput = node;
  };

  getTotalPages = (pageSize: number) =>
    Math.ceil(this.props.totalCount / pageSize);

  handleClick = (index: number) => {
    this.handlePageChange(index);
  };

  handleIncrement = (
    incrementForward: boolean,
    callback?: (nextPage: number) => void
  ) => {
    const { currentPage } = this.props;
    const nextPage = incrementForward ? currentPage + 1 : currentPage - 1;
    this.handlePageChange(nextPage);
    callback && callback(nextPage);
  };

  handlePageChange = (currentPage: number) => {
    this.props.onPageChange(currentPage);
    if (
      this.props.showPageJumper &&
      this.pageJumperInput &&
      parseInt(this.pageJumperInput.value) !== currentPage
    ) {
      this.pageJumperInput.value = '';
    }
  };

  handlePageSizeChange = (pageSize: number) => {
    const { onPageSizeChange, currentPage } = this.props;
    onPageSizeChange && onPageSizeChange(pageSize);

    const totalPages = this.getTotalPages(pageSize);
    if (currentPage > totalPages) {
      this.handlePageChange(totalPages);
    }
  };
}

export default withTheme(Pagination);
