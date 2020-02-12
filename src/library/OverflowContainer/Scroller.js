/* @flow */
import styled from '@emotion/styled';
import { mapComponentThemes, themed } from '../themes';
import OverflowContainer from './OverflowContainer';
import { getScrollerStyles } from './styled';
import { overflowContainerWithShadowsTheme } from './themes';

import type { StyledComponent } from '@emotion/styled-base/src/utils';

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

const Scroller: StyledComponent<{ [key: string]: any }> = styled(
  ThemedOverflowContainer
)(getScrollerStyles);

export default Scroller;
