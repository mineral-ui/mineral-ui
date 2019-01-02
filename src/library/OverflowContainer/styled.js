/* @flow */
import styled from '@emotion/styled';
import { overflowContainerTheme } from './themes';
import { overflowContainerWithShadowsTheme } from './themes';

export const OverflowContainerRoot = styled('div')(
  ({ hideScrollbars, scrollX, scrollY, theme: baseTheme }) => {
    const theme = overflowContainerTheme(baseTheme);

    return {
      outline: 0,
      overflowX: scrollX ? 'auto' : undefined,
      overflowY: scrollY ? 'auto' : undefined,
      // Prevent flash of focus style when interacting with children
      transition: 'outline 0.1s 0.25s',

      '&:focus': {
        outline: theme.OverflowContainer_outline_focus
      },

      ...(hideScrollbars
        ? {
            overflow: '-moz-scrollbars-none',
            msOverflowStyle: 'none',

            '&::-webkit-scrollbar': {
              display: 'none'
            }
          }
        : undefined)
    };
  }
);

export const OverflowContainerWithShadowsRoot = styled('div')((props) => {
  const boxShadow = getBoxShadows(props);
  return boxShadow
    ? {
        display: 'flex',
        position: 'relative',

        '&::before': {
          bottom: 0,
          boxShadow,
          content: '""',
          pointerEvents: 'none',
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0
        }
      }
    : undefined;
});

const getBoxShadows = ({ theme: baseTheme, ...restProps }) => {
  const theme = overflowContainerWithShadowsTheme(baseTheme);
  const boxShadows = Object.keys(restProps)
    .filter((prop) => prop.indexOf('hasShadow') !== -1)
    .reduce((acc, prop) => {
      if (restProps[prop]) {
        const edge = prop.split('hasShadow')[1];
        acc.push(theme[`OverflowContainerWithShadows_boxShadow${edge}`]);
      }
      return acc;
    }, []);
  return boxShadows.length ? boxShadows.join(',') : undefined;
};

export const getScrollerStyles = ({
  scrollX,
  scrollY
}: {
  scrollX: boolean,
  scrollY: boolean
}) => ({
  flex: '1 1 auto',

  // [1] - 1px to avoid unwanted scrollbar,
  //       1px in to avoid potentially cutting off of focus ring of
  //       subcomponents in body
  ...(scrollX
    ? {
        overflowY: 'hidden',
        paddingLeft: 2, // [1]
        paddingRight: 2 // [1]
      }
    : undefined),

  ...(scrollY
    ? {
        overflowX: 'hidden',
        paddingBottom: 2, // [1]
        paddingTop: 2 // [1]
      }
    : undefined)
});
