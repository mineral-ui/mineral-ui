/* @flow */
import React, { PureComponent } from 'react';
import { createStyledComponent } from '../styles';
import { withTheme } from '../themes';
import Flex, { FlexItem } from '../Flex';
import Pages from './Pages';
import PageJumper from './PageJumper';
import PageSizer from './PageSizer';

type Props = {
  /** The currently displayed page */
  currentPage: number,
  /** Hide the page number buttons */
  showPageNumbers?: boolean,
  /**
   * Various messages and labels used by Pagination
   * ([see example for more details](#rtl))
   */
  messages: Messages,
  /** Called when current page is changed */
  onPageChange: (currentPage: number) => void,
  /** Called when [page size](#page-sizer) is changed */
  onPageSizeChange?: (pageSize: number) => void,
  /**
   * Render a [page jumper](#page-jumper)
   * ([TextInput component](/components/text-input)); enables the user to change
   * the current page on number entry
   */
  showPageJumper?: boolean,
  /** The number of items or data to be rendered on each page */
  pageSize: number,
  /**
   * Render a [page sizer](#page-sizer)
   * ([Select component](/components/select)); enables the user to select the
   * page size
   */
  showPageSizer?: boolean,
  /**
   * A collection of possible page sizes for a user to select from; implemented
   * in [page sizer](#page-sizer). Be sure to provide unique values.
   */
  pageSizes?: Array<number>,
  /** Available sizes */
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  /** @Private */
  theme: Object,
  /** The total number of items or data to be paginated */
  totalCount: number,
  /**
   * The number of consecutive pages to be displayed when the paginated results
   * are truncated ([see example for details](#visible-range))
   */
  visibleRange?: number
};

export type Messages = {|
  category?: string,
  label: string,
  pages?: {|
    pageLabel: (
      isCurrentPage: boolean,
      isLastPage: boolean,
      page: number
    ) => string,
    next: string,
    previous: string
  |},
  pageJumper?: {| label: string, placeholder: string |},
  pageSizer?: {|
    status: (
      category: string,
      first: number,
      last: number,
      total: number
    ) => string,
    itemText: (pageSize: number) => string
  |}
|};

export const componentTheme = (baseTheme: Object) => ({
  PaginationPageJumper_width: '4.65em',
  Pagination_gutterWidth: baseTheme.space_inline_sm,
  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    return {
      flexWrap: 'wrap-reverse',
      marginBottom: `-${theme.Pagination_gutterWidth}`,

      '& > *': {
        marginBottom: theme.Pagination_gutterWidth
      }
    };
  }
};

const Root = createStyledComponent(Flex, styles.root, {
  includeStyleReset: true,
  withProps: {
    element: 'nav'
  }
});

/**
 * Pagination offers a means to control the space consumed by a large data set
 * or other collection of items by limiting the page size and providing
 * navigation for access to all pages.
 */
class Pagination extends PureComponent<Props> {
  static displayName = 'Pagination';
  static defaultProps = {
    messages: {
      category: 'rows',
      label: 'Pagination',
      pages: {
        next: 'Next',
        // prettier-ignore
        pageLabel: (isCurrentPage, isLastPage, page) =>
          (isCurrentPage ? 'Current page, ' : '') + (isLastPage ? 'Last page, ' : '') + page,
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
    size: 'medium',
    visibleRange: 5
  };

  pageJumperInput: ?HTMLInputElement;

  render() {
    const {
      currentPage,
      messages: propMessages,
      pageSize,
      pageSizes,
      showPageJumper,
      showPageSizer,
      size,
      theme: baseTheme,
      totalCount,
      ...restProps
    } = this.props;
    const theme = componentTheme(baseTheme);
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
        onPageChange: this.handlePageChange,
        onPageSizeChange: this.handlePageSizeChange,
        pageSize,
        pageSizes,
        size,
        totalCount,
        totalPages
      };
    }

    return (
      <Root justifyContent="end" {...rootProps}>
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

  getTotalPages = (pageSize) => Math.ceil(this.props.totalCount / pageSize);

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
