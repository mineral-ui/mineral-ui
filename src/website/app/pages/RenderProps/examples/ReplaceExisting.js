/* @flow */
import React from 'react';
import LiveProvider from '../../../LiveProvider';
import styled from '@emotion/styled';
import Menu from '../../../../../library/Menu';

export default function ReplaceExisting() {
  const liveProviderProps = {
    scope: {
      styled,
      Menu,
      React
    },
    source: `
      () => {
        const StyledDiv = styled('div')(({ theme }) => ({
          backgroundColor: theme.color_gray_40,
          margin: theme.space_stack_xs,
          padding: theme.space_inset_sm + ' ' + theme.space_inset_md
        }));

        class CustomItem extends React.PureComponent {
          render() {
            return <StyledDiv {...this.props} />;
          }
        }

        const item = ({ props }) => <CustomItem {...props} />;

        return (
          <Menu
            item={item}
            data={[
              { text: 'Item 1' },
              { text: 'Item 2' },
              { text: 'Item 3' }
            ]} />
        );
      }
    `
  };

  return <LiveProvider {...liveProviderProps} />;
}
