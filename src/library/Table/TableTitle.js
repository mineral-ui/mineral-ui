/* @flow */
import React from 'react';
import { withTheme } from 'emotion-theming';
import Text, { textWithThemeOverrides } from '../Text';
import { TableTitleRoot as Root } from './styled';

import type { TableTitleProps } from './types';

const TableTitle = ({ as, hide, id, theme, ...restProps }: TableTitleProps) => {
  const rootProps = {
    hide,
    ...restProps
  };

  // eslint-disable-next-line react/display-name
  const TitleContent = (props) => <Text align="start" id={id} {...props} />;

  const title = textWithThemeOverrides({
    as,
    displayName: 'TableTitle',
    textComponent: TitleContent,
    theme,
    ...restProps
  });

  return <Root {...rootProps}>{title}</Root>;
};

TableTitle.displayName = 'TableTitle';

export default withTheme(TableTitle);
