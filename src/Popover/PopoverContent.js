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
import React, { Component } from 'react';
import { Popper } from 'react-popper';
import { createStyledComponent, createThemedComponent } from '../utils';
import { CardBlock, CardTitle } from '../Card';
import PopoverArrow from './PopoverArrow';

type Props = {
  /** Content of the popper */
  children: React$Node,
  /** Plugins that are used to alter behavior. See https://popper.js.org/popper-documentation.html#modifiers */
  modifiers?: Object,
  /** Include an arrow on the Popover content pointing to the trigger */
  hasArrow?: boolean,
  /** Placement of the popper */
  placement?:
    | 'auto'
    | 'auto-end'
    | 'auto-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'top'
    | 'top-end'
    | 'top-start',
  /** Subtitle displayed under the title */
  subtitle?: React$Node,
  /** Title of the popover */
  title?: React$Node
};

const arrowSize = '8px';

export const componentTheme = (baseTheme: Object) => ({
  PopoverContent_backgroundColor: baseTheme.color_white,
  PopoverContent_borderColor: baseTheme.color_gray_20,
  PopoverContent_borderRadius: baseTheme.borderRadius_1,
  PopoverContent_boxShadow: baseTheme.shadow_2,
  PopoverContent_paddingVertical: baseTheme.space_inset_sm,
  PopoverContent_zIndex: baseTheme.zIndex_100,
  ...baseTheme
});

const Root = createStyledComponent(
  Popper,
  ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.PopoverContent_backgroundColor,
      border: `1px solid ${theme.PopoverContent_borderColor}`,
      borderRadius: theme.PopoverContent_borderRadius,
      boxShadow: theme.PopoverContent_boxShadow,
      padding: `${theme.PopoverContent_paddingVertical} 0`,
      zIndex: theme.PopoverContent_zIndex,

      '&[data-placement^="top"]': {
        marginBottom: arrowSize
      },
      '&[data-placement^="bottom"]': {
        marginTop: arrowSize
      },
      '&[data-placement^="left"]': {
        marginRight: arrowSize
      },
      '&[data-placement^="right"]': {
        marginLeft: arrowSize
      },
      '&[data-x-out-of-boundaries]': {
        visibility: 'hidden'
      }
    };
  },
  {
    displayName: 'PopoverContent',
    includeStyleReset: true
  }
);

/**
 * Temporary overrides until Card theme updated to match updated design spec
 */
const cardOverrides = ({ theme }) => {
  return {
    CardRow_margin: theme.space_stack_sm,
    CardRow_padding: theme.space_inset_md
  };
};

const PopoverBlock = createThemedComponent(CardBlock, cardOverrides);
const PopoverTitle = createThemedComponent(CardTitle, cardOverrides);

/**
 * PopoverContent component
 */
export default class PopoverContent extends Component<Props> {
  props: Props;

  render() {
    const {
      children,
      hasArrow,
      placement,
      subtitle,
      title,
      ...restProps
    } = this.props;

    const rootProps = {
      placement,
      tabIndex: 0,
      ...restProps
    };
    const popoverArrowProps = {
      size: arrowSize,
      placement
    };

    return (
      <Root {...rootProps}>
        {({ popperProps, restProps }) => {
          const wrapperProps = {
            ...popperProps,
            ...restProps
          };
          popoverArrowProps.placement = wrapperProps['data-placement'];

          return (
            <div {...wrapperProps}>
              {title && (
                <PopoverTitle subtitle={subtitle}>{title}</PopoverTitle>
              )}
              <PopoverBlock>{children}</PopoverBlock>
              {hasArrow && <PopoverArrow {...popoverArrowProps} />}
            </div>
          );
        }}
      </Root>
    );
  }
}
