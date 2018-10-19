/* @flow */
import React, { Children, Component } from 'react';
import debounce from 'lodash.debounce';
import EventListener from '../EventListener';
import { createStyledComponent, pxToEm } from '../styles';
import { createThemedComponent } from '../themes';
import { onlyIEAndEdge } from '../utils/cssSelectors';
import Button from '../Button';
import IconChevronLeft from '../Icon/IconChevronLeft';
import IconChevronRight from '../Icon/IconChevronRight';
import IconExpandLess from '../Icon/IconExpandLess';
import IconExpandMore from '../Icon/IconExpandMore';
import { OverflowContainerWithShadows } from '../OverflowContainer';

type Props = {
  /** Horizontal or vertical alignment of OverflowList children */
  align?: 'start' | 'center' | 'end' | 'justify',
  /** Accessible label for OverflowList */
  'aria-label'?: string,
  /** Content of OverflowList */
  children?: React$Node,
  /** Height of parent, e.g. Tabs */
  height?: number | string,
  /** Called when the selection is incremented to the next or previous item, e.g. Tab */
  onIncrement?: (
    direction: 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp',
    event: SyntheticEvent<*>
  ) => void,
  /** Position of OverflowList in relation to related content, e.g. TabPanel */
  position?: 'bottom' | 'start' | 'end' | 'top',
  /** Accessibility role of OverflowList */
  role?: string,
  /** Orientation of OverflowList */
  vertical?: boolean
};

type State = {
  scrollable: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  OverflowList_gutterHorizontal: baseTheme.space_inline_md,
  OverflowList_gutterVertical: baseTheme.space_stack_sm,

  OverflowListArrow_color: baseTheme.color_gray_80,
  OverflowListArrow_color_hover: baseTheme.color_theme,

  OverflowListOverflowContainer_boxShadowColor: baseTheme.color_white,

  ...baseTheme
});

const styles = {
  button: ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      flexShrink: 0,

      '&:hover': {
        '& [role="img"]': {
          color: theme.OverflowListArrow_color_hover
        }
      },

      '& > span': {
        height: '100%'
      }
    };
  },
  inner: ({ vertical }) => ({
    display: 'flex',
    // See: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
    ...(vertical ? { minHeight: '0%' } : { minWidth: '0%' })
  }),
  list: ({ align, count, theme: baseTheme, vertical }) => {
    const theme = componentTheme(baseTheme);
    const rtl = theme.direction === 'rtl';

    const childMarginProperty = vertical
      ? 'marginBottom'
      : rtl
        ? 'marginLeft'
        : 'marginRight';

    return {
      display: 'flex',
      flexDirection: vertical ? 'column' : undefined,
      flexGrow: 1,
      justifyContent: align
        ? align === 'center'
          ? align
          : `flex-${align}`
        : undefined,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      whiteSpace: 'nowrap',

      // Tab
      '& > *': {
        ...(align === 'justify'
          ? vertical
            ? {
                display: 'flex',
                flexGrow: 1,

                // Anchor in Tab
                '& > *': { display: 'flex', height: 'auto' }
              }
            : {
                // prettier-ignore
                width: `calc(${(1 / count) * 100}% - ${theme.OverflowList_gutterHorizontal})`
              }
          : undefined),

        '&:not(:last-child)': {
          [childMarginProperty]: vertical
            ? theme.OverflowList_gutterVertical
            : theme.OverflowList_gutterHorizontal
        }
      }
    };
  },
  root: ({ height, vertical }) => ({
    display: 'flex',
    flex: '0 0 auto',
    flexDirection: vertical ? 'column' : undefined,
    position: 'relative',

    ...(vertical && height
      ? {
          [onlyIEAndEdge]: {
            height
          }
        }
      : undefined)
  })
};

const ThemedButton = createThemedComponent(Button, ({ theme: baseTheme }) => {
  const theme = componentTheme(baseTheme);
  return {
    Button_backgroundColor_minimal_active: null,
    Button_backgroundColor_minimal_hover: null,
    Button_borderRadius: 0,
    Button_borderWidth: 0,
    Button_boxShadow_focus: null,
    Button_paddingIconOnly_medium: 0,
    ButtonIcon_color: theme.OverflowListArrow_color,

    Icon_size_medium: pxToEm(20)
  };
});

const ThemedOverflowContainerWithShadows = createThemedComponent(
  OverflowContainerWithShadows,
  ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);
    // prettier-ignore
    return {
      OverflowContainerWithShadows_boxShadowBottom:
        `inset 0 -24px 22px -14px ${theme.OverflowListOverflowContainer_boxShadowColor}`,
      OverflowContainerWithShadows_boxShadowLeft:
        `inset 24px 0 22px -14px ${theme.OverflowListOverflowContainer_boxShadowColor}`,
      OverflowContainerWithShadows_boxShadowRight:
        `inset -24px 0 22px -14px ${theme.OverflowListOverflowContainer_boxShadowColor}`,
      OverflowContainerWithShadows_boxShadowTop:
        `inset 0 24px 22px -14px ${theme.OverflowListOverflowContainer_boxShadowColor}`
    };
  }
);

const ArrowButton = createStyledComponent(ThemedButton, styles.button, {
  displayName: 'ArrowButton'
});
const Inner = createStyledComponent(
  ThemedOverflowContainerWithShadows,
  styles.inner,
  {
    displayName: 'Inner',
    withProps: {
      hideScrollbars: true,
      // We handle our own "scroll with the keyboard" interaction in Tabs, so
      // null tabIndex is to prevent an extraneous tab stop
      tabIndex: null
    }
  }
);
const List = createStyledComponent('ul', styles.list);
const Root = createStyledComponent('div', styles.root, {
  displayName: 'OverflowList'
});

const IncrementButton = ({
  icon,
  ...restProps
}: {
  icon: React$Element<*>
}) => (
  <ArrowButton
    aria-hidden
    iconStart={icon}
    minimal
    size="medium"
    tabIndex={-1}
    {...restProps}
  />
);

/**
 * OverflowList
 */
export default class OverflowList extends Component<Props, State> {
  static defaultProps = {
    position: 'top'
  };

  state = {
    scrollable: false
  };

  list: ?HTMLElement;

  root: ?HTMLElement;

  componentDidMount() {
    this.updateScrollable();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.updateScrollable();
    }
  }

  render() {
    const {
      align,
      children,
      onIncrement,
      position,
      role,
      vertical,
      ...restProps
    } = this.props;
    const { scrollable } = this.state;
    const rootProps = {
      align,
      innerRef: this.setRootRef,
      vertical,
      ...restProps,
      'aria-label': undefined
    };
    const listProps = {
      align,
      'aria-label': restProps['aria-label'],
      count: Children.count(children),
      innerRef: this.setListRef,
      role,
      vertical
    };

    let content = <List {...listProps}>{children}</List>;
    if (scrollable) {
      const innerProps = {
        position,
        scrollX: !vertical,
        scrollY: vertical,
        vertical
      };
      content = [
        <IncrementButton
          key="start"
          icon={vertical ? <IconExpandLess /> : <IconChevronLeft />}
          onClick={(event) => {
            onIncrement && onIncrement('ArrowLeft', event);
          }}
        />,
        <Inner key="inner" {...innerProps}>
          {content}
        </Inner>,
        <IncrementButton
          key="end"
          icon={vertical ? <IconExpandMore /> : <IconChevronRight />}
          onClick={(event) => {
            onIncrement && onIncrement('ArrowRight', event);
          }}
        />
      ];
    }

    return (
      <Root {...rootProps}>
        {content}
        <EventListener
          listeners={[
            {
              event: 'resize',
              handler: this.handleWindowResize,
              target: 'window'
            }
          ]}
        />
      </Root>
    );
  }

  setListRef = (node: ?HTMLElement) => {
    this.list = node;
  };

  setRootRef = (node: ?HTMLElement) => {
    this.root = node;
  };

  updateScrollable = () => {
    const { vertical } = this.props;
    const listNode = this.list;
    const rootNode = this.root;

    if (listNode && rootNode) {
      const dimension = vertical ? 'Height' : 'Width';
      const scrollable = Boolean(
        // $FlowFixMe - indexer property is missing in HTMLElement
        listNode[`scroll${dimension}`] > rootNode[`client${dimension}`]
      );
      if (this.state.scrollable !== scrollable) {
        this.setState({
          scrollable
        });
      }
    }
  };

  handleWindowResize = debounce(this.updateScrollable, 100);
}
