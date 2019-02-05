/* @flow */
import styled from '@emotion/styled';
import { themed, mapComponentThemes } from '../themes';
import { overflowContainerWithShadowsTheme } from './themes';
import { getScrollerStyles } from './styled';
import OverflowContainer from './OverflowContainer';

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

export default styled(ThemedOverflowContainer)(getScrollerStyles);
