/* @flow */
import React from 'react';
import { withTheme } from 'emotion-theming';
import IconDanger from '../Icon/IconDanger';
import IconSuccess from '../Icon/IconSuccess';
import IconWarning from '../Icon/IconWarning';
import { textWithThemeOverrides } from '../Text';
import { APPEARANCE } from './constants';
import { DialogTitleRoot as Root, DialogTitleTitle } from './styled';
import { dialogTitleTheme } from './themes';

import { dialogTitlePropTypes } from './propTypes';
import type { DialogTitleDefaultProps, DialogTitleProps } from './types';

const variantIcons = {
  danger: IconDanger,
  success: IconSuccess,
  warning: IconWarning
};

const DialogTitle = ({
  as,
  id,
  theme,
  variant,
  ...restProps
}: DialogTitleProps) => {
  const rootProps = {
    variant,
    ...restProps
  };

  // eslint-disable-next-line react/display-name
  const TitleContent = (props) => <DialogTitleTitle id={id} {...props} />;

  const title = textWithThemeOverrides({
    as: as || 'h1',
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
      {variant && <Icon size={dialogTitleTheme(theme).DialogTitleIcon_size} />}
      {title}
    </Root>
  );
};

const defaultProps: DialogTitleDefaultProps = {
  appearance: APPEARANCE.h4
};

DialogTitle.displayName = 'DialogTitle';
DialogTitle.defaultProps = defaultProps;
DialogTitle.propTypes = dialogTitlePropTypes;

export default withTheme(DialogTitle);
