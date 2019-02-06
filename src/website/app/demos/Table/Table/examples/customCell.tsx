/* @flow */
import React from 'react';
import withProps from 'recompose/withProps';
import { palette } from 'mineral-ui-tokens';
import styled from '@emotion/styled';
import Flex from '../../../../../../library/Flex';
import Table from '../../../../../../library/Table';
import data from '../../common/data';
import renderPropsDescription from '../../../common/renderPropsDescription';

export default {
  id: 'custom-cell',
  title: 'Custom Cell',
  description: `Use the \`cell\` render prop in a column definiton to provide
custom rendering control of all cells in that column.
${renderPropsDescription}`,
  scope: {
    styled,
    data,
    Flex,
    palette,
    React,
    Table,
    withProps
  },
  source: `
    () => {
       const Root = styled('td')(({ theme }) => ({
         padding: theme.space_stack_sm + ' ' + theme.space_inline_md,

         'tr:hover > &': {
           backgroundColor: palette.green_10
         }
       }));

       const Emoji = withProps({
          'aria-hidden': true,
          role: 'img'
        })(styled('span')(
         ({ theme }) => ({
           display: 'inline-block',
           marginRight: theme.space_inline_sm
         })
       ));

       const Content = styled('span')(({ theme }) => ({
         fontSize: theme.fontSize_ui,
         textAlign: 'left'
       }));

       class CustomCell extends React.PureComponent {
         render() {
           return (
             <Root {...this.props}>
               <Flex as="span">
                 <Emoji>🌿</Emoji>
                 <Content>{this.props.children}</Content>
               </Flex>
             </Root>
           );
         }
       }

      const cell = ({ props }) => <CustomCell {...props} />;

      const columns = [
        { content: 'Fruits', key: 'Fruits' },
        { content: 'Vegetables', key: 'Vegetables', cell },
        { content: 'Grains', key: 'Grains' },
        { content: 'Dairy', key: 'Dairy' },
        { content: 'Protein', key: 'Protein' }
      ];

      return (
        <Table
          columns={columns}
          data={data}
          rowKey="Fruits"
          title="Foods of the World"
          hideTitle />
      );
    }`
};
