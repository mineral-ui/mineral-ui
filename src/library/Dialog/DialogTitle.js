/* @flow */
import React from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import { withTheme } from '../themes';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import Text, { textWithThemeOverrides } from '../Text';

type Props = {
  /** Available styles */
  appearance?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** Rendered DialogTitle content */
  children: React$Node,
  /** Available HTML elements; styles can be overridden with `appearance` */
  element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  /** Id of the DialogTitle */
  id?: string,
  /** @Private App theme; see [Theming](/theming) */
  theme: Object,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

export const componentTheme = (baseTheme: Object) => ({
  DialogTitle_color: baseTheme.h4_color,
  DialogTitle_fontSize: baseTheme.h4_fontSize,
  DialogTitle_fontWeight: baseTheme.h4_fontWeight,

  DialogTitleIcon_margin: baseTheme.space_inline_sm,
  DialogTitleIcon_size: pxToEm(24),

  ...baseTheme
});

const styles = {
  root: ({ theme: baseTheme, variant }) => {
    const theme = componentTheme(baseTheme);
    const marginProperty =
      theme.direction === 'rtl' ? 'marginLeft' : 'marginRight';

    return {
      color: variant ? theme[`color_${variant}`] : theme.DialogTitle_color,
      display: 'flex',

      '& > [role="img"]': {
        color: variant ? theme[`icon_color_${variant}`] : null,
        flex: '0 0 auto',
        [marginProperty]: theme.DialogTitleIcon_margin
      }
    };
  },
  titleContent: {
    color: 'inherit',
    flex: '1 1 auto'
  }
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'DialogTitle'
});
const Title = createStyledComponent(Text, styles.titleContent);

const variantIcons = {
  danger: IconDanger,
  success: IconSuccess,
  warning: IconWarning
};

/**
 * DialogTitle displays the title of Dialog.
 */
const DialogTitle = ({ id, theme, variant, ...restProps }: Props) => {
  const rootProps = {
    variant,
    ...restProps
  };

  const TitleContent = (props) => <Title id={id} {...props} />;

  const title = textWithThemeOverrides({
    displayName: 'DialogTitle',
    textComponent: TitleContent,
    theme,
    ...restProps
  });

  let Icon = () => null;
  if (variant) {
    Icon = variantIcons[variant];
  }

  return (
    <Root {...rootProps}>
      {variant && <Icon size={componentTheme(theme).DialogTitleIcon_size} />}
      {title}
    </Root>
  );
};

DialogTitle.defaultProps = {
  appearance: 'h4',
  element: 'h1'
};

export default withTheme(DialogTitle);
