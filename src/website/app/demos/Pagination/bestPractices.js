/* @flow */
import React, { Component } from 'react';
import Pagination from '../../../../library/Pagination';
import DemoLayout from '../shared/DemoLayout';

type Props = {
  currentPage?: number
};
type State = {
  currentPage: number
};

class Paginated extends Component<Props, State> {
  state = {
    currentPage: this.props.currentPage || 1
  };

  handlePageChange = (currentPage) => {
    this.setState({ currentPage });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <Pagination
        onPageChange={this.handlePageChange}
        pageSize={10}
        totalCount={20}
        {...this.props}
        currentPage={currentPage}
      />
    );
  }
}

export default [
  {
    type: 'do',
    description: `Use \`showPageJumper\` if pagination results are truncated so
    that users can easily navigate to hidden pages.`,
    example: (
      <Paginated
        showPageJumper
        currentPage={5}
        totalCount={100}
        visibleRange={3}
      />
    )
  },
  {
    type: 'do',
    description: `For narrow layouts, prevent page numbers from wrapping by
    decreasing the [\`visibleRange\`](#visible-range) or using
    [\`showPageNumbers\`](#previous-next) to display only Previous & Next buttons.`,
    example: (
      <DemoLayout>
        <Paginated visibleRange={2} currentPage={3} totalCount={50} />
        <Paginated showPageNumbers={false} currentPage={3} totalCount={50} />
      </DemoLayout>
    )
  },
  {
    type: 'dont',
    description: `Hide Pagination if there is only one resulting page to avoid
    confusion.`,
    example: <Paginated pageSize={20} />
  }
];
