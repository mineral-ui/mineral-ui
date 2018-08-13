/* @flow */
import React, { PureComponent } from 'react';
import { createStyledComponent } from '../styles';
import { createThemedComponent } from '../themes';
import Button from '../Button';
import IconChevronLeft from '../Icon/IconChevronLeft';
import IconChevronRight from '../Icon/IconChevronRight';
import { FlexItem } from '../Flex';
import { componentTheme } from './Pagination';

type Props = {
  currentPage: number,
  handleClick: (currentPage: number) => void,
  handleIncrement: (
    next: boolean,
    callback?: (nextPage: number) => void
  ) => void,
  showPageNumbers?: boolean,
  messages: {|
    pageLabel: (
      isCurrentPage: boolean,
      isLastPage: boolean,
      page: number
    ) => string,
    next: string,
    previous: string
  |},
  size?: 'small' | 'medium' | 'large' | 'jumbo',
  totalPages: number,
  visibleRange: number
};

const Container = createStyledComponent(FlexItem, ({ theme: baseTheme }) => {
  const theme = componentTheme(baseTheme);
  const rtl = theme.direction === 'rtl';
  const middleMargin = rtl ? 'marginLeft' : 'marginRight';
  return {
    '& > button, & > span': {
      '&:not(:last-child)': {
        [middleMargin]: theme.Pagination_gutterWidth
      }
    }
  };
});

const firstPage = (current) => current === 1;
const lastPage = (current, total) => current === total;
const isDisabled = (next, currentPage, totalPages) =>
  next ? lastPage(currentPage, totalPages) : firstPage(currentPage);

const EllipsisButton = createThemedComponent(Button, ({ theme }) => ({
  color_disabled: theme.color_theme
}));

const getPageButtons = ({
  currentPage,
  handleClick,
  messages,
  size,
  totalPages,
  visibleRange
}: Props) => {
  return [...Array(totalPages)]
    .map((_, i) => i)
    .map((_, index) => {
      const page = index + 1;
      const evenOffset = visibleRange % 2 === 0 ? 1 : 0;
      let pagesBuffer;
      if (
        currentPage <= visibleRange ||
        (visibleRange === 1 && currentPage === 2)
      ) {
        pagesBuffer = visibleRange - currentPage + 3 - evenOffset;
      } else if (
        currentPage > totalPages - visibleRange ||
        (visibleRange === 1 && currentPage === totalPages - 1)
      ) {
        pagesBuffer =
          visibleRange - (totalPages - currentPage) + 2 - evenOffset;
      } else {
        pagesBuffer = Math.ceil(visibleRange / 2);
      }

      const firstPageInRange =
        page === currentPage - pagesBuffer && !firstPage(page);
      const lastPageInRange =
        page === currentPage + pagesBuffer && !lastPage(page, totalPages);
      const isPageOutOfRange =
        page < currentPage - pagesBuffer || page > currentPage + pagesBuffer;
      const isCurrentPage = page === currentPage;
      const isFirstPage = firstPage(page);
      const isLastPage = lastPage(page, totalPages);

      let pageView = null;
      if (firstPageInRange || lastPageInRange) {
        pageView = (
          <EllipsisButton
            disabled
            element="span"
            key={page}
            minimal
            size="medium">
            …
          </EllipsisButton>
        );
      } else if (!isPageOutOfRange || isFirstPage || isLastPage) {
        pageView = (
          <Button
            {...(isCurrentPage ? { 'aria-current': true } : undefined)}
            {...(isCurrentPage || isLastPage
              ? {
                  'aria-label': messages.pageLabel(
                    isCurrentPage,
                    isLastPage,
                    page
                  )
                }
              : undefined)}
            minimal
            primary={isCurrentPage}
            key={page}
            onClick={handleClick.bind(null, page)}
            size={size}>
            {page}
          </Button>
        );
      }
      return pageView;
    })
    .filter((page) => !!page);
};

const IncrementButton = ({
  currentPage,
  direction,
  focusedNodeWhenDisabled,
  handleIncrement,
  messages,
  size,
  totalPages,
  ...restProps
}: Props & {
  direction: string,
  focusedNodeWhenDisabled: ?HTMLButtonElement
}) => {
  const next = direction === 'next';
  const incrementIcon = next ? <IconChevronRight /> : <IconChevronLeft />;
  const iconPosition = next ? 'iconEnd' : 'iconStart';

  const handleClick = (next) => {
    handleIncrement(next, (nextPage) => {
      isDisabled(next, nextPage, totalPages) &&
        focusedNodeWhenDisabled &&
        focusedNodeWhenDisabled.focus();
    });
  };

  const buttonProps = {
    children: messages[direction],
    disabled: isDisabled(next, currentPage, totalPages),
    [iconPosition]: incrementIcon,
    minimal: true,
    onClick: handleClick.bind(null, next),
    size,
    ...restProps
  };

  return <Button {...buttonProps} />;
};

export default class Pages extends PureComponent<Props> {
  previousButton: ?HTMLButtonElement;

  nextButton: ?HTMLButtonElement;

  render() {
    const { showPageNumbers, ...restProps } = this.props;

    return (
      <Container {...restProps}>
        <IncrementButton
          direction="previous"
          focusedNodeWhenDisabled={this.nextButton}
          innerRef={this.setPreviousButtonRef}
          {...restProps}
        />
        {showPageNumbers && getPageButtons(this.props)}
        <IncrementButton
          direction="next"
          focusedNodeWhenDisabled={this.previousButton}
          innerRef={this.setNextButtonRef}
          {...restProps}
        />
      </Container>
    );
  }

  setPreviousButtonRef = (node: ?HTMLButtonElement) => {
    this.previousButton = node;
  };

  setNextButtonRef = (node: ?HTMLButtonElement) => {
    this.nextButton = node;
  };
}
