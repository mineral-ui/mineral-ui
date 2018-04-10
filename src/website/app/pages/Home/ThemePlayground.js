/* @flow */
import React from 'react';
import rgba from 'polished/lib/color/rgba';
import { createStyledComponent, pxToEm } from '../../../../library/styles';
import IconCheck from 'mineral-ui-icons/IconCheck';
import { ThemeProvider } from '../../../../library/themes';

type Props = {
  children: React$Node,
  index: number,
  setIndex: (index: number) => void,
  themes: Array<Object>
};

type OptionProps = {
  children: React$Node,
  isActive: boolean,
  onClick: () => void,
  themes: Array<Object>,
  thisIndex: number
};

const styles = {
  root: ({ theme, themes, index }) => ({
    marginTop: theme.space_stack_xl,
    position: 'relative', // for z-index
    zIndex: 2,

    '& ::selection': {
      backgroundColor: rgba(themes[index].color_theme, 0.2)
    },

    '@media(min-width: 23em)': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',

      '@supports(display: grid)': {
        display: 'grid',
        gridGap: theme.space_inline_sm,
        gridTemplateColumns: 'repeat(3, auto)',
        gridTemplateRows: `min-content auto`
      }
    },

    [theme.bp_moreSpacious]: {
      '@supports(display: grid)': {
        gridGap: theme.space_inline_md,
        gridTemplateColumns: 'min-content auto',
        gridTemplateRows: 'repeat(3, auto)'
      }
    }
  }),
  optionRoot: ({ isActive, theme, themes, thisIndex }) => ({
    alignItems: 'center',
    backgroundColor: isActive
      ? themes[thisIndex].color_theme_10
      : theme.color_white,
    border: `1px solid ${isActive ? theme.color_white : 'transparent'}`,
    borderRadius: theme.borderRadius_1,
    boxShadow: isActive
      ? `0 0 0 1px ${theme[`borderColor_theme_focus`]}`
      : null,
    cursor: 'pointer',
    display: 'flex',
    marginBottom: theme.space_stack_sm,
    padding: `${theme.space_inset_sm} ${theme.space_inset_lg}`,
    position: 'relative',
    width: '100%',
    '&::-moz-focus-inner': { border: 0 },

    '&:focus,&:hover': {
      backgroundColor: themes[thisIndex].color_theme_10
    },

    '@media(min-width: 23em)': {
      flex: `0 0 calc(33.333% - 2 * ${theme.space_inline_sm} / 3)`,
      padding: theme.space_inset_sm,
      justifyContent: 'center',

      '@supports(display: grid)': {
        marginBottom: 0
      }
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
      `
    }
  }),
  optionHex: ({ theme }) => ({
    display: 'block',
    fontSize: theme.fontSize_mouse,
    marginTop: theme.space_stack_xxs,

    '@media(max-width: 28.999em)': {
      display: 'none'
    }
  }),
  optionIcon: ({ isActive, theme, themes, thisIndex }) => ({
    backgroundColor: themes[thisIndex].color_theme_60,
    borderRadius: theme.borderRadius_1,
    boxSizing: 'content-box !important', // This needs to win over `.class *` from componentStyleReset
    flex: '0 0 auto',
    fill: isActive ? theme.color_white : 'transparent',
    marginRight: theme.space_inline_xs,
    padding: `${parseFloat(theme.space_inset_sm) / 2}em`,

    '@media(min-width: 29em)': {
      height: '1.25em', // Large size
      left: theme.space_inset_md,
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '1.25em' // Large size
    }
  }),
  optionName: ({ theme }) => ({
    color: theme.color_gray_100,
    display: 'block',
    fontSize: theme.fontSize_ui,
    fontWeight: theme.fontWeight_bold
  }),
  sandbox: ({ theme }) => ({
    backgroundColor: theme.color_white,
    borderRadius: theme.borderRadius_1,
    gridColumn: '1 / span 3',
    padding: `${theme.space_inset_lg} ${pxToEm(28)}`,

    [theme.bp_moreSpacious]: {
      gridColumn: 2,
      gridRow: '1 / span 4'
    },

    '& h3': {
      color: theme.color_theme_80
    },

    // All styles copied from Link (except fontWeight) to negate the SiteLink
    // theme variables despite using the SiteLink component (via Markdown)
    '& p > a': {
      color: theme.color_theme,
      fontWeight: theme.fontWeight_semiBold,

      '&:hover': {
        color: theme.color_theme_hover
      },
      '&:focus': {
        color: theme.color_theme_focus,
        outlineColor: theme.borderColor_theme_focus
      },
      // `:active` must be last, to follow LVHFA order:
      // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
      '&:active': {
        color: theme.color_theme_active
      }
    }
  })
};

const Root = createStyledComponent('div', styles.root, {
  includeStyleReset: true
});
const OptionRoot = createStyledComponent('button', styles.optionRoot, {
  includeStyleReset: true
});
const OptionHex = createStyledComponent('span', styles.optionHex);
const OptionIcon = createStyledComponent(IconCheck, styles.optionIcon);
const OptionName = createStyledComponent('span', styles.optionName);
const Sandbox = createStyledComponent('div', styles.sandbox);

const Option = ({
  children,
  thisIndex,
  isActive,
  onClick,
  themes,
  ...restProps
}: OptionProps) => {
  const rootProps = {
    onClick,
    isActive,
    themes,
    thisIndex,
    ...restProps
  };
  const iconProps = {
    isActive,
    size: 'small',
    themes,
    thisIndex
  };
  return (
    <OptionRoot {...rootProps}>
      <OptionIcon {...iconProps} />
      <OptionName>{children}</OptionName>
      <OptionHex>{themes[thisIndex].color_theme_60}</OptionHex>
    </OptionRoot>
  );
};

export default function ThemePlaygound({
  children,
  index,
  setIndex,
  themes,
  ...restProps
}: Props) {
  const rootProps = {
    index,
    themes,
    ...restProps
  };
  return (
    <ThemeProvider theme={themes[index]}>
      <Root {...rootProps}>
        {themes.map((theme, i) => {
          const optionProps = {
            isActive: index === i,
            key: i,
            onClick: () => setIndex(i),
            themes: themes,
            thisIndex: i
          };
          return <Option {...optionProps}>{theme.name}</Option>; // eslint-disable-line react/jsx-key
        })}
        <Sandbox>{children}</Sandbox>
      </Root>
    </ThemeProvider>
  );
}
