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
import React, { Children, Component } from 'react';
import { createStyledComponent } from '../styles';
import { createThemedComponent, mapComponentThemes } from '../themes';
import Popover, {
  componentTheme as popoverComponentTheme
} from '../Popover/Popover';

type Props = {
  /** Trigger for the Tooltip */
  children: React$Node,
  /** Content of the Tooltip */
  content: string,
  /**
   * For use with uncontrolled components, in which the Tooltip is immediately
   * open upon initialization */
  defaultIsOpen?: boolean,
  /** Disables the Tooltip */
  disabled?: boolean,
  /** For use with controlled components, in which the app manages Tooltip state */
  isOpen?: boolean,
  /**
   * Plugins that are used to alter behavior. See
   * [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers)
   * for options.
   */
  /** Called when Tooltip is closed */
  onClose?: (event: SyntheticEvent<>) => void,
  /** Called when Tooltip is opened */
  onOpen?: (event: SyntheticEvent<>) => void,
  /** Placement of the Tooltip */
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
  /** @Private Tooltips should not have subtitles and will be removed */
  subtitle?: any,
  /** @Private Tooltips should not have titles and will be removed */
  title?: any,
  /**
   * Use a Portal to render the Popover to the body rather than as a sibling
   * to the trigger.
   */
  usePortal?: boolean
};

type State = {
  isOpen?: boolean
};

const DELAY_OPEN = 250; // ms

export const componentTheme = (baseTheme: Object) => {
  return {
    ...mapComponentThemes(
      {
        name: 'Popover',
        theme: popoverComponentTheme(baseTheme)
      },
      {
        name: 'Tooltip',
        theme: {
          TooltipArrow_backgroundColor: baseTheme.color_gray_90,
          TooltipArrow_borderColor: baseTheme.color_gray_90,

          TooltipContent_backgroundColor: baseTheme.color_gray_90,
          TooltipContent_borderColor: baseTheme.color_gray_90,
          TooltipContent_color: baseTheme.color_white,
          TooltipContent_maxWidth: '18em',

          TooltipContentBlock_marginVertical: '0',
          TooltipContentBlock_paddingHorizontal: baseTheme.space_inset_md,

          TooltipTriggerText_borderStyle: 'dashed',
          TooltipTriggerText_borderColor: baseTheme.color_text,
          TooltipTriggerText_borderWidth: '1px'
        }
      },
      baseTheme
    )
  };
};

const Root = createThemedComponent(Popover, ({ theme: baseTheme }) => {
  return {
    ...mapComponentThemes(
      {
        name: 'Tooltip',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'Popover',
        theme: {}
      },
      baseTheme
    )
  };
});

const TriggerText = createStyledComponent('span', ({ theme: baseTheme }) => {
  const theme = componentTheme(baseTheme);

  return {
    borderBottomStyle: theme.TooltipTriggerText_borderStyle,
    borderBottomColor: theme.TooltipTriggerText_borderColor,
    borderBottomWidth: theme.TooltipTriggerText_borderWidth
  };
});

/**
 * Tooltips display supporting information to disambiguate user controls and text.
 */
export default class Tooltip extends Component<Props, State> {
  state: State = {
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  componentWillUnmount() {
    this.clearOpenTimer();
  }

  openTimer: ?number;

  render() {
    const {
      children,
      disabled,

      // Disallow these props passed to Popover
      subtitle: ignoreSubtitle,
      title: ignoreTitle,

      ...restProps
    } = this.props;

    if (disabled) {
      return children;
    }

    const { isOpen } = this.isControlled() ? this.props : this.state;

    const popoverProps = {
      ...restProps,
      focusTriggerOnClose: false,
      getContentProps: this.getContentProps,
      getTriggerProps: this.getTriggerProps,
      isOpen,
      onClose: this.close,
      onOpen: this.open
    };

    const trigger =
      typeof children === 'string' ? (
        <TriggerText>{children}</TriggerText>
      ) : (
        children
      );

    const child = Children.only(trigger);

    return <Root {...popoverProps}>{child}</Root>;
  }

  getContentProps = (props: Object) => ({
    ...props,
    'aria-live': 'polite',
    role: 'tooltip',
    tabIndex: undefined
  });

  getTriggerProps = (props: Object) => ({
    ...props,
    'aria-expanded': undefined,
    onBlur: this.close,
    onFocus: this.handleDelayedOpen,
    onMouseEnter: this.handleDelayedOpen,
    onMouseLeave: this.close,
    tabIndex: 0
  });

  handleDelayedOpen = (event: SyntheticEvent<>) => {
    this.clearOpenTimer();
    const { isOpen } = this.isControlled() ? this.props : this.state;
    if (!isOpen) {
      this.openTimer = global.setTimeout(() => {
        this.open(event);
      }, DELAY_OPEN);
    }
  };

  clearOpenTimer = () => {
    global.clearTimeout(this.openTimer);
    this.openTimer = null;
  };

  open = (event: SyntheticEvent<>) => {
    if (this.isControlled()) {
      this.openActions(event);
    } else {
      this.setState({ isOpen: true }, () => {
        this.openActions(event);
      });
    }
  };

  openActions = (event: SyntheticEvent<>) => {
    this.props.onOpen && this.props.onOpen(event);
  };

  close = (event: SyntheticEvent<>) => {
    this.clearOpenTimer();
    if (this.isControlled()) {
      this.closeActions(event);
    } else {
      this.setState({ isOpen: false }, () => {
        this.closeActions(event);
      });
    }
  };

  closeActions = (event: SyntheticEvent<>) => {
    this.props.onClose && this.props.onClose(event);
  };

  isControlled = () => this.props.isOpen !== undefined;
}
