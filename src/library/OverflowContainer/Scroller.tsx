/* @flow */
import styled from '@emotion/styled';
import { themed, mapComponentThemes } from '../themes';
import { overflowContainerWithShadowsTheme } from './themes';
import OverflowContainer from './OverflowContainer';

import { OverflowContainerStyleProps } from './types';

// NOTE: These components cannot live in styled.js due to circular dependency
// issues with OverflowContainer

const ThemedOverflowContainer = themed(OverflowContainer)(
  ({ theme: baseTheme }) =>
    mapComponentThemes(
      {
        name: 'OverflowContainerWithShadows',
        theme: overflowContainerWithShadowsTheme(baseTheme)
      },
      {
        name: 'OverflowContainer',
        theme: {}
      },
      baseTheme
    )
);

const Scroller = styled(ThemedOverflowContainer)<OverflowContainerStyleProps>(
  ({ scrollX, scrollY }) => {
    return {
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
    };
  }
);

export default Scroller;
