/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Pass Pagination a \`currentPage\` to render, an \`onPageChange\`
handler, a \`pageSize\` (number of items to be rendered), and the \`totalCount\`
of the items to be paginated. The total number of pages is calculated from the 
total count and the page size.`,
  scope: { Component, Pagination },
  source: `
    () => {
      class Paginated extends Component {
        constructor(props) {
          super(props);

          this.state = {
            currentPage: 1
          };

          this.handlePageChange = this.handlePageChange.bind(this);
        }

        handlePageChange(currentPage) {
          this.setState({ currentPage });
        }

        render() {
          const { currentPage } = this.state;

          return (
            <Pagination
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              pageSize={10}
              totalCount={100}
            />
          );
        }
      }

      return <Paginated />;
    }`
};
