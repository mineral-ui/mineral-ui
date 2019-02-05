/* @flow */
import React, { PureComponent } from 'react';
import { FlexItem } from '../Flex';
import { FormField } from '../Form';
import Select from '../Select';

import type { PageSizerProps } from './types';

export default class PageSizer extends PureComponent<PageSizerProps> {
  static displayName = 'PageSizer';

  render() {
    const {
      currentPage,
      messages,
      onPageSizeChange: ignoreOnPageSizeChange,
      pageSize,
      pageSizes,
      size,
      totalCount,
      totalPages,
      ...restProps
    } = this.props;
    const rootProps = {
      ...restProps
    };

    if (pageSizes.indexOf(pageSize) === -1) {
      throw new Error('pageSizes array does not include pageSize');
    }

    const { category, itemText, status } = messages;

    const data = pageSizes.map((pageSize) => ({
      text: itemText(pageSize),
      value: pageSize.toString()
    }));

    const first = (currentPage - 1) * pageSize + 1;
    const last = first + pageSize - 1;
    const lastPage = currentPage === totalPages;
    const pageSizerDescription = status(
      category,
      first,
      lastPage ? totalCount : last,
      totalCount
    );

    const inputProps = {
      data,
      defaultSelectedItem: data.find(
        (item) => parseInt(item.value) === pageSize
      ),
      label: pageSizerDescription,
      hideLabel: true,
      input: Select,
      caption: pageSizerDescription,
      onChange: this.handleSelect,
      size
    };

    return (
      <FlexItem {...rootProps}>
        <FormField {...inputProps} />
      </FlexItem>
    );
  }

  handleSelect = (item: Object) => {
    const pageSize = parseInt(item.value);
    this.props.onPageSizeChange(pageSize);
  };
}
