/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';

export default {
  id: 'page-jumper',
  title: 'Page Jumper',
  description: `Allow users to jump to any page with the \`showPageJumper\` prop.
The caption and placeholder can be defined via the \`messages\` prop (see the
[bidirectionality example](#rtl) for details). The width of the input can be
adjusted with the [component theme](/components/pagination/#theme-variables).`,
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
          this.setState({ currentPage })
        }

        render() {
          const { currentPage } = this.state;

          return (
            <Pagination
              showPageJumper
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
