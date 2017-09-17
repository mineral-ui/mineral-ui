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
import { createStyledComponent } from '../utils';
import { MenuDivider, MenuHeading, MenuItem } from './index';

type Props = {
  /** [MenuDivider](./menu-divider), [MenuHeading](./menu-heading), or [MenuItem](./menu-item) */
  children?: MnrlReactNode,
  /** See example below */
  data?: Array<Item>
};

type Item = {
  disabled?: boolean,
  divider?: boolean,
  heading?: boolean,
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  onClick?: (event: Object) => void,
  secondaryText?: MnrlReactNode,
  text?: MnrlReactNode,
  variant?: 'regular' | 'danger' | 'success' | 'warning',
  withArrow?: boolean
};

const Root = createStyledComponent(
  'div',
  {},
  {
    displayName: 'Menu',
    includeStyleReset: true
  }
);

const renderChildren = (children?: MnrlReactNode, data?: Array<Item>) => {
  if (Array.isArray(data)) {
    return data.map((item, i) => {
      if (item.divider) {
        return <MenuDivider key={i} />;
      } else if (item.heading) {
        return (
          <MenuHeading key={i}>
            {item.text}
          </MenuHeading>
        );
      } else {
        const { text, ...itemProps } = item;
        return (
          <MenuItem {...itemProps} key={i}>
            {text}
          </MenuItem>
        );
      }
    });
  } else {
    return children;
  }
};

/**
 * Menu component
 */
export default function Menu({ children, data, ...restProps }: Props) {
  return (
    <Root {...restProps}>
      {renderChildren(children, data)}
    </Root>
  );
}
