/* @flow */
import { Component } from 'react';
import Pagination from '../../../../../library/Pagination';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'sizes',
  title: 'Sizes',
  description: `The controls within Pagination can be rendered in various
sizes.`,
  scope: { DemoLayout, Component, Pagination },
  source: `
    () => {
      const sizes = ['small', 'medium', 'large', 'jumbo']

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
          const { size } = this.props

          return (
            <Pagination
              size={size}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
              pageSize={10}
              totalCount={100}
            />
          );
        }
      }

      return (
        <DemoLayout>
          {sizes.map((size) => {
            return <Paginated size={size} key={size} />
          })}
        </DemoLayout>
      )
    }`
};
