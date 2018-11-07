/* @flow */
import React from 'react';
import LiveProvider from '../../../LiveProvider';
import { createStyledComponent } from '../../../../../library/styles';
import { withTheme } from '../../../../../library/themes';
import Menu from '../../../../../library/Menu';
import { menuItemTheme } from '../../../../../library/Menu/themes';

export default function ThemeAccess() {
  const liveProviderProps = {
    scope: {
      createStyledComponent,
      Menu,
      menuItemTheme,
      React,
      withTheme
    },
    source: `
      () => {
        // import { menuItemTheme } from 'mineral-ui/Menu';

        const StyledDiv = withTheme(
          createStyledComponent('div', ({ theme: baseTheme }) => {
            const theme = menuItemTheme(baseTheme);

            return {
              backgroundColor: theme.color_gray_40,
              margin: theme.space_stack_xs,
              padding: theme.MenuItem_paddingVertical + ' ' + theme.MenuItem_paddingHorizontal
            };
          })
        );

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
