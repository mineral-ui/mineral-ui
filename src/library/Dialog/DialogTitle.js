/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';

type Props = {
  /** TODO */
  children: React$Node,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

export const componentTheme = (baseTheme: Object) => ({
  DialogTitle_color: baseTheme.h3_color,
  DialogTitle_fontSize: baseTheme.h3_fontSize,
  DialogTitle_fontWeight: baseTheme.h3_fontWeight,

  DialogTitleIcon_fontSize: pxToEm(24),
  DialogTitleIcon_margin: baseTheme.space_inline_sm,

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    return {
      alignItems: 'flex-start',
      color: variant ? theme[`color_${variant}`] : theme.DialogTitle_color,
      display: 'flex',

      '& > [role="img"]': {
        color: variant ? theme[`icon_color_${variant}`] : null,
        flex: 'none',
        fontSize: theme.DialogTitleIcon_fontSize,
        marginLeft: rtl ? theme.DialogTitleIcon_margin : null,
        marginRight: rtl ? null : theme.DialogTitleIcon_margin,
        position: 'relative',
        top: pxToEm(1) // optical alignment
      }
    };
  },
  titleContent: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      flex: '1 1 auto',
      fontSize: theme.DialogTitle_fontSize,
      fontWeight: theme.DialogTitle_fontWeight,
      margin: 0
    };
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'DialogTitle'
});

const TitleContent = createStyledComponent('h3', styles.titleContent);

const variantIcons = {
  danger: <IconDanger />,
  success: <IconSuccess />,
  warning: <IconWarning />
};

/**
 * DialogHeader - TODO
 */
export default function DialogTitle({
  children,
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    variant,
    ...restProps
  };

  return (
    <Root {...rootProps}>
      {variant && variantIcons[variant]}
      <TitleContent>{children}</TitleContent>
    </Root>
  );
}
