/* @flow */
import React, { forwardRef, PureComponent } from 'react';
import range from 'lodash.range';
import IconChevronLeft from '../Icon/IconChevronLeft';
import IconChevronRight from '../Icon/IconChevronRight';
import Button from '../Button';
import {
  PagesRoot as Root,
  PagesEllipsisButton as EllipsisButton
} from './styled';

import { IncrementButtonProps, PagesProps } from './types';

const firstPage = (current) => current === 1;
const lastPage = (current, total) => current === total;
const isDisabled = (next, currentPage, totalPages) =>
  next ? lastPage(currentPage, totalPages) : firstPage(currentPage);

const getPageButtons = ({
  currentPage,
  handleClick,
  messages,
  size,
  totalPages,
  visibleRange
}: PagesProps) => {
  return range(totalPages)
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
        pageView = <EllipsisButton key={page}>…</EllipsisButton>;
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
            size={size}
            type="button">
            {page}
          </Button>
        );
      }
      return pageView;
    })
    .filter((page) => !!page);
};

// eslint-disable-next-line react/display-name
const IncrementButton = forwardRef<IncrementButtonProps, HTMLButtonElement>(
  (
    {
      currentPage,
      direction,
      focusedNodeWhenDisabled,
      handleIncrement,
      messages,
      size,
      totalPages,
      ...restProps
    }: IncrementButtonProps,
    ref: React$Ref<*>
  ) => {
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
      ref,
      size,
      type: 'button',
      ...restProps
    };

    return <Button {...buttonProps} />;
  }
);

IncrementButton.displayName = 'IncrementButton';

export default class Pages extends PureComponent<PagesProps> {
  static displayName = 'Pages';

  previousButton: ?HTMLButtonElement;

  nextButton: ?HTMLButtonElement;

  render() {
    const { size, showPageNumbers, ...restProps } = this.props;

    return (
      <Root {...restProps}>
        <IncrementButton
          direction="previous"
          focusedNodeWhenDisabled={this.nextButton}
          ref={this.setPreviousButtonRef}
          size={size}
          {...restProps}
        />
        {showPageNumbers && getPageButtons(this.props)}
        <IncrementButton
          direction="next"
          focusedNodeWhenDisabled={this.previousButton}
          ref={this.setNextButtonRef}
          size={size}
          {...restProps}
        />
      </Root>
    );
  }

  setPreviousButtonRef = (node: ?HTMLButtonElement) => {
    this.previousButton = node;
  };

  setNextButtonRef = (node: ?HTMLButtonElement) => {
    this.nextButton = node;
  };
}
