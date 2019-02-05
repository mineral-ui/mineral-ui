/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import Table from '../../../../../../library/Table';
import sharedData from '../../common/data';
import renderPropsDescription from '../../../common/renderPropsDescription';

export default {
  id: 'custom-row',
  title: 'Custom Row',
  description: `Use the \`row\` render prop as a row property in your data to
provide custom rendering control of the table row. ${renderPropsDescription}`,
  scope: {
    styled,
    React,
    sharedData,
    Table
  },
  source: `
    () => {
      const Root = styled('tr')(({ theme }) => ({
        backgroundColor: theme.well_backgroundColor_warning
      }));

      const Cell = styled('td')(({ theme }) => ({
        padding: theme.space_stack_sm + ' ' + theme.space_inline_md
      }));

      const Divider = styled('hr')(({ theme }) => ({
        backgroundColor: theme.color_warning,
        border: 0,
        height: 1
      }));

      class CustomRow extends React.PureComponent {
        render() {
          const { isSelectable } = this.props;
          const cellCount = Object.keys(data[0]).length + (isSelectable ? 1 : 0);

          return (
            <Root {...this.props}>
              <Cell colSpan={cellCount}>
                <Divider />
              </Cell>
            </Root>
          );
        }
      }

      const row = ({ props }) => <CustomRow {...props} />;

      const data = [
        sharedData[0],
        sharedData[1],
        { row },
        sharedData[2],
        sharedData[3]
      ];

      return (
        <Table
          data={data}
          rowKey="Fruits"
          title="Foods of the World"
          hideTitle />
      );
    }`
};
