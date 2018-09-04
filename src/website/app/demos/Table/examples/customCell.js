/* @flow */
import React from 'react';
import { palette } from 'mineral-ui-tokens';
import { createStyledComponent } from '../../../../../library/styles';
import Flex from '../../../../../library/Flex';
import Table from '../../../../../library/Table';
import data from '../shared/data';
import renderPropsDescription from '../../shared/renderPropsDescription';

export default {
  id: 'custom-cell',
  title: 'Custom Cell',
  description: `Use the \`cell\` render prop in a column definiton to provide
custom rendering control of all cells in that column.
${renderPropsDescription}`,
  scope: {
    createStyledComponent,
    data,
    Flex,
    palette,
    React,
    Table
  },
  source: `
    () => {
       const Root = createStyledComponent('td', ({ theme }) => ({
         padding: theme.space_stack_sm + ' ' + theme.space_inline_md,

         'tr:hover > &': {
           backgroundColor: palette.green_10
         }
       }));

       const Emoji = createStyledComponent(
         'span',
         ({ theme }) => ({
           display: 'inline-block',
           marginRight: theme.space_inline_sm
         }),
         {
           withProps: {
             'aria-hidden': true,
             role: 'img'
           }
         }
       );

       const Content = createStyledComponent('span', ({ theme }) => ({
         fontSize: theme.fontSize_ui,
         textAlign: 'left'
       }));

       class CustomCell extends React.PureComponent {
         render() {
           return (
             <Root {...this.props}>
               <Flex element="span">
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
