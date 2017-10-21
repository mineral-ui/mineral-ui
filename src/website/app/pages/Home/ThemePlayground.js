/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../utils';
import IconCheck from '../../../../Icon/IconCheck';
import IconFavorite from '../../../../Icon/IconFavorite';
import ThemeProvider from '../../../../ThemeProvider';
import Button from '../../../../Button';
import Markdown from '../../Markdown';

type Props = {
  index: number,
  setIndex: (index: number) => void,
  themes: Array<Object>
};

const Root = createStyledComponent(
  'div',
  ({ theme }) => ({
    display: 'grid',
    gridGap: theme.space_inline_sm,
    gridTemplateColumns: 'repeat(3, auto)',
    gridTemplateRows: `min-content auto`,
    marginTop: theme.space_stack_xl,
    position: 'relative', // for z-index
    zIndex: 2,

    '@media(min-width: 48em)': {
      gridGap: theme.space_inline_md,
      gridTemplateColumns: 'min-content auto',
      gridTemplateRows: 'repeat(3, auto)'
    }
  }),
  {
    includeStyleReset: true
  }
);

const PlaygroundOptionRoot = createStyledComponent(
  'button',
  ({ thisIndex, isActive, theme, themes }) => {
    return {
      alignItems: 'center',
      backgroundColor: isActive
        ? themes[thisIndex].color_theme_10
        : theme.color_white,
      border: `1px solid ${isActive ? theme.color_white : 'transparent'}`,
      borderRadius: theme.borderRadius_1,
      boxShadow: isActive ? `0 0 0 1px ${theme[`borderColor_focus`]}` : null,
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      padding: theme.space_inset_sm,
      position: 'relative',
      '&::-moz-focus-inner': { border: 0 },

      '&:focus,&:hover': {
        backgroundColor: themes[thisIndex].color_theme_10
      },

      '& > [role="icon"]': {
        backgroundColor: themes[thisIndex].color_theme_60,
        borderRadius: theme.borderRadius_1,
        boxSizing: 'content-box',
        flex: '0 0 auto',
        fill: isActive ? theme.color_white : 'transparent',
        marginRight: theme.space_inline_xs,
        padding: `${parseFloat(theme.space_inset_sm) / 2}em`
      },

      '@media(min-width: 29em)': {
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: `
          ${theme.space_inset_md}
          ${theme.space_inset_md}
          ${theme.space_inset_md}
          ${parseFloat(theme.space_inset_md) +
          1.25 + // Large icon size
          parseFloat(theme.space_inset_sm) + // padding left & right
            parseFloat(theme.space_inline_sm)}em
        `,

        '& > [role="icon"]': {
          height: '1.25em', // Large size
          left: theme.space_inset_md,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1.25em' // Large size
        }
      }
    };
  },
  {
    includeStyleReset: true
  }
);

const PlaygroundOptionHex = createStyledComponent('span', ({ theme }) => ({
  color: theme.color_caption,
  display: 'block',
  fontSize: theme.fontSize_mouse,
  marginTop: theme.space_stack_xxs,

  '@media(max-width: 28.999em)': {
    display: 'none'
  }
}));

const PlaygroundOptionName = createStyledComponent('span', ({ theme }) => ({
  display: 'block',
  fontSize: theme.fontSize_ui,
  fontWeight: theme.fontWeight_bold
}));

const PlaygroundSandbox = createStyledComponent(Markdown, ({ theme }) => ({
  backgroundColor: theme.color_white,
  borderRadius: theme.borderRadius_1,
  // boxShadow: theme.shadow_3,
  gridColumn: '1 / span 3',
  padding: theme.space_inset_lg,

  '@media(min-width: 48em)': {
    gridColumn: 2,
    gridRow: '1 / span 4'
  },

  '& > h3': {
    color: theme.color_theme_80
  }
}));

const PlaygroundOption = ({
  children,
  thisIndex,
  isActive,
  onClick,
  themes,
  ...restProps
}: {
  children: React$Node,
  thisIndex: number,
  isActive: boolean,
  onClick: () => void,
  themes: Array<Object>
}) => {
  const rootProps = {
    onClick,
    thisIndex,
    isActive,
    themes,
    ...restProps
  };
  return (
    <PlaygroundOptionRoot {...rootProps}>
      <IconCheck size="small" />
      <PlaygroundOptionName>{children}</PlaygroundOptionName>
      <PlaygroundOptionHex>
        {themes[thisIndex].color_theme_60}
      </PlaygroundOptionHex>
    </PlaygroundOptionRoot>
  );
};

const playgroundButtonIcon = <IconFavorite />;

const playgroundContent = `
### Something About Themes

Prime number, a mote of dust suspended in a sunbeam globular star cluster
Orion’s sword decipherment! Consciousness tendrils of gossamer clouds.
Tendrils of gossamer clouds are creatures of the cosmos, the carbon in our
apple pies Vangelis. [Cambrian explosion](/components/link), Hypatia, finite
but unbounded tingling of the spine descended from astronomers hearts of the
stars billions upon billions dream of the mind’s eye, a very small stage in
a vast cosmic arena.

<Button iconStart={playgroundButtonIcon} primary>
  We love themes
</Button>
`;

const handleClick = (fn: () => void) => {
  fn();
  // TODO: blur here
};

export default function ThemePlaygound({
  index,
  setIndex,
  themes,
  ...restProps
}: Props) {
  const rootProps = {
    ...restProps
  };
  return (
    <ThemeProvider theme={themes[index]}>
      <Root {...rootProps}>
        <PlaygroundOption
          thisIndex={0}
          isActive={index === 0}
          onClick={() => {
            handleClick(() => setIndex(0));
          }}
          themes={themes}>
          Magenta
        </PlaygroundOption>
        <PlaygroundOption
          thisIndex={1}
          isActive={index === 1}
          onClick={() => {
            handleClick(() => setIndex(1));
          }}
          themes={themes}>
          Sky
        </PlaygroundOption>
        <PlaygroundOption
          thisIndex={2}
          isActive={index === 2}
          onClick={() => {
            handleClick(() => setIndex(2));
          }}
          themes={themes}>
          Teal
        </PlaygroundOption>
        <PlaygroundSandbox
          anchors={false}
          scope={{ Button, playgroundButtonIcon }}>
          {playgroundContent}
        </PlaygroundSandbox>
      </Root>
    </ThemeProvider>
  );
}
