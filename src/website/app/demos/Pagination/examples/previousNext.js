/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';

export default {
  id: 'previous-next',
  title: 'Previous & Next',
  description: `Render only the Previous and Next buttons by passing \`false\`
to the \`showPageNumbers\` prop.`,
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
              showPageNumbers={false}
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
