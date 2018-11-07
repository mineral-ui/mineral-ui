/* @flow */
import React from 'react';
import { withTheme } from '../themes';
import Text, { textWithThemeOverrides } from '../Text';
import { TableTitleRoot as Root } from './styled';

import type { TableTitleProps } from './types';

const TableTitle = ({ hide, id, theme, ...restProps }: TableTitleProps) => {
  const rootProps = {
    hide,
    ...restProps
  };

  const TitleContent = (props) => <Text align="start" id={id} {...props} />;

  const title = textWithThemeOverrides({
    displayName: 'TableTitle',
    textComponent: TitleContent,
    theme,
    ...restProps
  });

  return <Root {...rootProps}>{title}</Root>;
};

export default withTheme(TableTitle);
