/* @flow */
import React from 'react';
import Dropdown from '../Dropdown';
import { PLACEMENT } from '../Dropdown/constants';
import IconMoreHoriz from '../Icon/IconMoreHoriz';
import { CardTitleMenuButton as MenuButton } from './styled';

import { cardTitleMenuPropTypes } from './propTypes';
import type { CardTitleMenuDefaultProps, CardTitleMenuProps } from './types';

const CardTitleMenu = (props: CardTitleMenuProps) => {
  const { triggerTitle, ...restProps } = props;
  const rootProps = {
    placement: PLACEMENT['bottom-end'],
    ...restProps
  };
  const buttonProps = {
    iconStart: <IconMoreHoriz title={triggerTitle} />,
    minimal: true
  };

  return (
    <Dropdown {...rootProps}>
      <MenuButton {...buttonProps} />
    </Dropdown>
  );
};

const defaultProps: CardTitleMenuDefaultProps = {
  triggerTitle: 'Card actions'
};
CardTitleMenu.defaultProps = defaultProps;
CardTitleMenu.propTypes = cardTitleMenuPropTypes;

export default CardTitleMenu;
