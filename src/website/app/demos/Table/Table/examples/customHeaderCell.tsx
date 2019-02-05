/* @flow */
import React from 'react';
import styled from '@emotion/styled';
import withProps from 'recompose/withProps';
import { pxToEm } from '../../../../../../library/styles';
import Table from '../../../../../../library/Table';
import data from '../../common/data';
import renderPropsDescription from '../../../common/renderPropsDescription';

export default {
  id: 'custom-header-cell',
  title: 'Custom Header Cell',
  description: `Use the \`headerCell\` render prop in a column definiton to
provide custom rendering control of all table header cells in that column.
${renderPropsDescription}

Refer to the [custom sortable header cell](#custom-sortable-header-cell) if
your data is sortable.
`,
  scope: {
    styled,
    data,
    pxToEm,
    React,
    Table,
    withProps
  },
  source: `
    () => {
      const Root = styled('th')(({ theme }) => ({
        padding: 0,
        verticalAlign: 'bottom',

        '&:not(:first-child)': {
          borderLeft: '1px dotted ' + theme.borderColor
        }
      }));

      const Inner = styled('span')(({theme}) => ({
        alignItems: 'flex-end',
        display: 'flex',
        padding: pxToEm(12) + ' ' + theme.space_inline_md,
        whiteSpace: 'nowrap'
      }));

      const Content = styled('span')(({ theme }) => ({
        fontSize: theme.fontSize_ui,
        fontWeight: theme.fontWeight_bold,
        textAlign: 'left'
      }));

      const Emoji = withProps({
          'aria-hidden': true,
          role: 'img'
        })(styled('span')(({ theme }) => ({
          display: 'inline-block',
          marginRight: theme.space_inline_sm
        })
      ));

      class CustomHeaderCell extends React.PureComponent {
        render() {
          const { children, emoji } = this.props;

          return (
            <Root {...this.props}>
              <Inner>
                <Content>
                  <Emoji>{emoji}</Emoji>
                  {children}
                </Content>
              </Inner>
            </Root>
          );
        }
      }

      const headerCell = ({ props }) => <CustomHeaderCell {...props} />;

      const columns = [
        { content: 'Fruits', key: 'Fruits', emoji: '🍎', headerCell },
        { content: 'Vegetables', key: 'Vegetables', emoji: '🥗', headerCell },
        { content: 'Grains', key: 'Grains', emoji: '🌾', headerCell },
        { content: 'Dairy', key: 'Dairy', emoji: '🥚', headerCell },
        { content: 'Protein', key: 'Protein', emoji: '🍗', headerCell }
      ];

      return (
        <Table
          columns={columns}
          data={data}
          rowKey="Fruits"
          title="Delicious Foods"
          hideTitle />
      );
    }`
};
