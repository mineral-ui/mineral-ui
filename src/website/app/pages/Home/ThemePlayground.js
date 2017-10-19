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
import { createStyledComponent, pxToEm } from '../../../../utils';
import IconFavorite from '../../../../Icon/IconFavorite';
import ThemeProvider from '../../../../ThemeProvider';
import Button from '../../../../Button';
import Heading from '../../Heading';
import Link from '../../Link';
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
    gridTemplateColumns: 'repeat(3, auto)',
    gridTemplateRows: `${theme.space_stack_xxl} auto`,
    gridGap: theme.space_inline_md,
    marginTop: theme.space_stack_xl,
    position: 'relative', // for z-index
    zIndex: 2,

    '@media(min-width: 48em)': {
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
    const swatchSize = '2em';

    return {
      backgroundColor: isActive ? theme.color_theme_10 : theme.color_white,
      border: `1px solid ${isActive ? theme.color_white : 'transparent'}`,
      borderRadius: theme.borderRadius_1,
      boxShadow: isActive ? `0 0 0 1px ${theme[`borderColor_focus`]}` : null,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: `
        ${theme.space_inset_md}
        ${theme.space_inset_md}
        ${theme.space_inset_md}
        ${parseFloat(theme.space_inset_md) +
          parseFloat(swatchSize) +
          parseFloat(theme.space_inline_sm)}em
      `,
      position: 'relative',
      '&::-moz-focus-inner': { border: 0 },

      '&::before': {
        backgroundColor: themes[thisIndex].color_theme_60,
        borderRadius: theme.borderRadius_1,
        content: '""',
        height: swatchSize,
        left: theme.space_inset_md,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: swatchSize
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
  fontSize: theme.fontSize_mouse
}));

const PlaygroundOptionName = createStyledComponent('span', ({ theme }) => ({
  display: 'block',
  fontSize: theme.fontSize_ui,
  fontWeight: theme.fontWeight_bold,
  marginBottom: theme.space_stack_xxs
}));

const PlaygroundSandbox = createStyledComponent(Markdown, ({ theme }) => ({
  backgroundColor: theme.color_white,
  borderRadius: theme.borderRadius_1,
  // boxShadow: theme.shadow_3,
  gridColumn: '1 / span 3',
  padding: theme.space_inset_lg,

  '@media(min-width: 48em)': {
    gridColumn: 2,
    gridRow: '1 / span 3'
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
  Discover why we love themes
</Button>
`;

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
            setIndex(0);
          }}
          themes={themes}>
          Magenta
        </PlaygroundOption>
        <PlaygroundOption
          thisIndex={1}
          isActive={index === 1}
          onClick={() => {
            setIndex(1);
          }}
          themes={themes}>
          Sky
        </PlaygroundOption>
        <PlaygroundOption
          thisIndex={2}
          isActive={index === 2}
          onClick={() => {
            setIndex(2);
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
