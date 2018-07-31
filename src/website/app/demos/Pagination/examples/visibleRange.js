/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';

export default {
  id: 'visible-range',
  title: 'Visible Range',
  description: `The width of the page navigation can be controlled with the
\`visibleRange\` prop. The value represents the length of the range to be
displayed between ellipses when the full range of pages is truncated. The value
should be an odd number, by nature of the design.`,
  scope: { Component, Pagination },
  source: `
    () => {
      const visibleRange = 3

      class Paginated extends Component {
        constructor(props) {
          super(props);

          this.state = {
            currentPage: 5
          };

          this.handlePageChange = this.handlePageChange.bind(this);
        }

        handlePageChange(currentPage) {
          this.setState({ currentPage })
        }

        render() {
          const { currentPage } = this.state;

          return (
            <Pagination
              visibleRange={visibleRange}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              pageSize={10}
              totalCount={100}
              {...this.props}
            />);
        }
      }

      return <Paginated />;
    }`
};
