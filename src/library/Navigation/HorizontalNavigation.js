/* @flow */
import React, { Children, cloneElement, Component } from 'react';
import { canUseDOM } from 'exenv';
import { createStyledComponent } from '../styles';
import { withTheme } from '../themes';
import { generateId } from '../utils';
// TODO: temp
import NavList from '../OverflowList';

type Props = {
  /** TODO: Alignment of NavLink in the list */
  align?: 'start' | 'center' | 'end' | 'justify',
  /** @Private */
  'aria-labelledby'?: string,
  /** Content of HorizontalNavigation; must be NavLink components */
  children?: React$Node,
  /**
   * Index of the selected NavLink; primarily for use with uncontrolled components
   */
  defaultSelectedNavLinkIndex?: number,
  /** Id of HorizontalNavigation */
  id?: string,
  /** Accessible label for HorizontalNavigation */
  label: string,
  /** Maximum width of each NavLink */
  maxNavLinkWidth?: number | string,
  /** Called when a NavLink is selected */
  onChange?: (
    selectedNavLinkIndex: number,
    event: SyntheticEvent<HTMLAnchorElement>
  ) => void,
  /**
   * Index of the selected NavLink; primarily for use with controlled components.
   * If this prop is specified, an `onChange` handler must also be specified.
   * See also: `defaultSelectedNavLinkIndex`
   */
  selectedNavLinkIndex?: number,
  /** @Private Theme */
  theme: Object
};

type State = {
  selectedNavLinkIndex: number
};

type AnchorEvent = SyntheticEvent<HTMLAnchorElement>;

const Root = createStyledComponent(
  'div',
  {
    display: 'flex'
  },
  {
    displayName: 'HorizontalNavigation',
    includeStyleReset: true
  }
);

/**
 * TODO
 */
class HorizontalNavigation extends Component<Props, State> {
  static defaultProps = {
    align: 'start',
    maxNavLinkWidth: '8.5em'
  };

  state = {
    selectedNavLinkIndex: this.props.defaultSelectedNavLinkIndex || 0
  };

  disabledNavLinkIndexes: Set<number> = new Set();

  id: string = this.props.id || `horizontalNavigation-${generateId()}`;

  lastIndex: number;

  root: ?HTMLElement;

  render() {
    const {
      align,
      children,
      label,
      maxNavLinkWidth,
      ...restProps
    } = this.props;
    // TODO: Always controlled?
    const selectedNavLinkIndex = this.getControllableValue(
      'selectedNavLinkIndex'
    );

    let ids = [];
    let navLinkItems = [];

    Children.forEach(children, (navLink, index) => {
      const { children, disabled, icon, id, maxWidth } = navLink.props;
      if (id && ids.indexOf(id) === -1) {
        ids.push(id);
      } else if (id) {
        throw new Error(
          `[mineral-ui/HorizontalNavigation] NavLink id ${id} is not unique`
        );
      }
      const panelId = this.getPanelId(index);
      const selected = index === selectedNavLinkIndex;
      const navLinkId = id || this.getNavLinkId(index);
      const navLinkProps = {
        children,
        disabled,
        icon,
        id: navLinkId,
        index,
        key: index,
        maxWidth: align === 'justify' ? undefined : maxWidth || maxNavLinkWidth,
        onClick: !disabled
          ? this.handleClick
          : (event) => {
              event.preventDefault();
            },
        onKeyDown: this.handleKeyDown,
        panelId,
        selected
      };
      navLinkItems.push(cloneElement(navLink, navLinkProps));

      if (disabled) {
        this.disabledNavLinkIndexes.add(index);
      } else {
        this.lastIndex = index;
      }
    });

    const rootProps = {
      innerRef: this.setRootRef,
      ...restProps,
      'aria-labelledby': undefined
    };

    const tabListProps = {
      align,
      'aria-label': label,
      'aria-labelledby': this.props['aria-labelledby'],
      onIncrement: this.handleIncrement,
      role: 'tablist'
    };

    return (
      <Root {...rootProps}>
        <NavList {...tabListProps}>{navLinkItems}</NavList>
      </Root>
    );
  }

  getPanelId = (index: number) => {
    return `${this.id}-panel-${index}`;
  };

  getNavLinkId = (index: number) => {
    return `${this.id}-navLink-${index}`;
  };

  setRootRef = (node: ?HTMLElement) => {
    this.root = node;
  };

  handleClick = (event: AnchorEvent) => {
    event.persist();
    const { currentTarget: target } = event;
    const selectedNavLinkIndex = parseInt(target.getAttribute('data-index'));

    if (
      this.isControlled('selectedNavLinkIndex') &&
      selectedNavLinkIndex !== this.props.selectedNavLinkIndex
    ) {
      this.changeActions(selectedNavLinkIndex, event);
    } else {
      this.setSelectedNavLinkIndex(selectedNavLinkIndex, event);
    }
  };

  // TODO: Appropriate for a simple list of links? Or should they just be tabstops?
  handleKeyDown = (event: SyntheticKeyboardEvent<HTMLAnchorElement>) => {
    event.persist();
    if (['ArrowLeft', 'ArrowRight'].indexOf(event.key) !== -1) {
      event.preventDefault();
      const rtl = this.props.theme.direction === 'rtl';
      const flippedDirections = {
        ArrowLeft: 'ArrowRight',
        ArrowRight: 'ArrowLeft'
      };
      const key =
        rtl && flippedDirections[event.key]
          ? flippedDirections[event.key]
          : event.key;
      this.handleIncrement(key, event);
    }
  };

  handleIncrement = (direction: string, event: SyntheticEvent<*>) => {
    const selectedNavLinkIndex = this.getControllableValue(
      'selectedNavLinkIndex'
    );
    const nextIndex =
      direction === 'ArrowRight' || direction === 'ArrowDown'
        ? selectedNavLinkIndex === this.lastIndex
          ? 0
          : this.getNonDisabledIndex(selectedNavLinkIndex + 1)
        : selectedNavLinkIndex === 0
          ? this.lastIndex
          : this.getNonDisabledIndex(selectedNavLinkIndex - 1, {
              decrease: true
            });
    this.setSelectedNavLinkIndex(nextIndex, event);
  };

  getNonDisabledIndex = (
    index: number,
    { decrease }: { decrease: ?boolean } = {}
  ) =>
    this.disabledNavLinkIndexes.has(index)
      ? this.getNonDisabledIndex(decrease ? index - 1 : index + 1, { decrease })
      : index;

  setSelectedNavLinkIndex = (
    selectedNavLinkIndex: number,
    event: AnchorEvent
  ) => {
    if (selectedNavLinkIndex !== this.state.selectedNavLinkIndex) {
      this.setState(
        {
          selectedNavLinkIndex
        },
        () => {
          if (canUseDOM) {
            const nextNavLink =
              this.root &&
              this.root.querySelector(`[data-index="${selectedNavLinkIndex}"]`);
            nextNavLink && nextNavLink.focus();
          }
          this.changeActions(selectedNavLinkIndex, event);
        }
      );
    }
  };

  changeActions = (selectedNavLinkIndex: number, event: AnchorEvent) => {
    const { onChange } = this.props;
    onChange && onChange(selectedNavLinkIndex, event);
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}

export default withTheme(HorizontalNavigation);
