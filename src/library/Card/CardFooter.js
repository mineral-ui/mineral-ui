/* @flow */
import React, { Component } from 'react';
import { createStyledComponent, pxToEm } from '../styles';
import { createThemedComponent } from '../themes';
import Button from '../Button';
import IconExpandLess from '../Icon/IconExpandLess';
import IconExpandMore from '../Icon/IconExpandMore';
import { componentTheme as cardComponentTheme } from './Card';

type Props = {
  /** Content of CardFooter */
  children?: React$Node,
  /** If `expandable`, expand CardFooter immediately upon initialization */
  defaultIsOpen?: boolean,
  /** Display a trigger to expand/collapse CardFooter contents (`title` is required for this feature)*/
  expandable?: boolean,
  /** For use with controlled components, in which the app manages CardFooter state */
  isOpen?: boolean,
  /** If `expandable`, called when CardFooter is collapsed */
  onClose?: (event: SyntheticEvent<>) => void,
  /** If `expandable`, called when CardFooter is expanded */
  onOpen?: (event: SyntheticEvent<>) => void,
  /** Title of the footer */
  title?: string | React$Element<*>,
  /** If `expandable`, title for expand/collapse trigger */
  triggerTitle?: (isOpen: boolean) => string,
  /** Available variants */
  variant?: 'danger' | 'success' | 'warning'
};

type State = {
  isOpen?: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  CardFooter_backgroundColor: baseTheme.well_backgroundColor,
  CardFooter_borderColor: baseTheme.borderColor,

  CardFooterRow_marginVertical: baseTheme.space_stack_sm,
  CardFooterRow_marginVerticalLast: baseTheme.space_stack_md,

  CardFooterTitle_color: baseTheme.h5_color,
  CardFooterTitle_fontSize: baseTheme.h5_fontSize,
  CardFooterTitle_fontWeight: baseTheme.h5_fontWeight,

  ...baseTheme
});

/*
 * CardFooter can have children like CardBlock and CardActions. When those
 * components are used directly inside Card they have a specific top/bottom
 * margin, but when they're used within CardFooter, they have a different
 * top/bottom margin. This technique accomplishes that without writing a bunch
 * of descendant selectors.
 */
const footerTheme = ({ theme }) => ({
  CardRow_marginVertical: componentTheme(theme).CardFooterRow_marginVertical,
  CardRow_marginVerticalLast: componentTheme(theme)
    .CardFooterRow_marginVerticalLast
});

const styles = {
  root: ({ variant, theme: baseTheme }) => {
    let theme = {
      ...componentTheme(baseTheme),
      ...cardComponentTheme(baseTheme)
    };

    if (variant) {
      theme = {
        ...theme,
        CardFooter_backgroundColor: theme[`well_backgroundColor_${variant}`],
        CardFooter_borderColor: theme[`well_borderColor_${variant}`]
      };
    }

    // [1] Making the footer overlap the Card border. The `calc` bit accounts
    //     for the paddingBottom on Card to prevent margin collapse.
    return {
      backgroundColor: theme.CardFooter_backgroundColor,
      border: `1px solid ${theme.CardFooter_borderColor}`,
      borderRadius: `0 0 ${theme.Card_borderRadius} ${theme.Card_borderRadius}`,
      margin: '0 -1px calc(-1px - 0.01em) -1px', // [1]
      paddingBottom: '0.01em', // Necessary to prevent margin collapse of last-child
      paddingTop: '0.01em' // Necessary to prevent margin collapse of first-child
    };
  },
  title: (props) => {
    const theme = {
      ...componentTheme(props.theme),
      ...cardComponentTheme(props.theme)
    };
    return {
      alignItems: 'flex-start',
      display: 'flex',
      marginBottom: theme.CardFooterRow_marginVertical,
      marginTop: theme.CardFooterRow_marginVertical,
      paddingLeft: theme.CardRow_paddingHorizontal,
      paddingRight: theme.CardRow_paddingHorizontal
    };
  },
  titleContent: (props) => {
    const theme = componentTheme(props.theme);

    return {
      color: theme.CardFooterTitle_color,
      flex: '1 1 auto',
      fontSize: theme.CardFooterTitle_fontSize,
      fontWeight: theme.CardFooterTitle_fontWeight,
      margin: 0
    };
  },
  /*
   * A large Button, even with zero'd padding, is still a bit too large in this
   * context. These styles allow the Button to shrink, but the Icon remains the
   * same size.
   */
  toggleButton: ({ theme }) => ({
    flex: '0 0 auto',
    height: 'auto',
    minWidth: 0,
    overflow: 'hidden',
    padding: 0,
    transform: `translateY(-${pxToEm(1)})`, // Optical alignment

    // Inner
    '& > span': {
      display: 'block',
      margin: `-${pxToEm(4)}`
    },

    // Icon
    '& [role="img"]': {
      color: theme.icon_color
    }
  })
};

const Root = createStyledComponent('div', styles.root, {
  displayName: 'CardFooter'
});
/*
 * We shouldn't just create a themed 'div', because it won't be able to apply
 * the provided theme to itself, which breaks the expectation of
 * createThemedComponent. So, we theme a simple functional component that
 * returns a 'div' instead.
 */
const Content = createThemedComponent(
  (props) => <div {...props} />,
  footerTheme
);
const Title = createStyledComponent('div', styles.title);
const TitleContent = createStyledComponent('h4', styles.titleContent);
const ToggleButton = createStyledComponent(Button, styles.toggleButton);

/**
 * CardFooter is used to append a visually distinct section to [Card](/components/card).
 */
export default class CardFooter extends Component<Props, State> {
  static defaultProps = {
    triggerTitle: (isOpen: boolean) =>
      isOpen ? 'Collapse contents' : 'Expand contents'
  };

  state = {
    isOpen: !this.props.expandable || Boolean(this.props.defaultIsOpen)
  };

  render() {
    const {
      children,
      expandable,
      title,
      triggerTitle = CardFooter.defaultProps.triggerTitle,
      ...restProps
    } = this.props;

    const isOpen = Boolean(this.getControllableValue('isOpen'));

    const ExpandCollapseIcon = isOpen ? IconExpandLess : IconExpandMore;

    return (
      <Root {...restProps}>
        {title && (
          <Title>
            <TitleContent>{title}</TitleContent>
            {expandable && (
              <ToggleButton
                onClick={this.toggleOpenState}
                minimal
                iconStart={<ExpandCollapseIcon title={triggerTitle(isOpen)} />}
              />
            )}
          </Title>
        )}
        {isOpen && children && <Content>{children}</Content>}
      </Root>
    );
  }

  close = (event: SyntheticEvent<>) => {
    if (this.isControlled('isOpen')) {
      this.closeActions(event);
    } else {
      this.setState(
        () => ({ isOpen: false }),
        () => {
          this.closeActions(event);
        }
      );
    }
  };

  closeActions = (event: SyntheticEvent<>) => {
    this.props.onClose && this.props.onClose(event);
  };

  open = (event: SyntheticEvent<>) => {
    if (this.isControlled('isOpen')) {
      this.openActions(event);
    } else {
      this.setState(
        () => ({ isOpen: true }),
        () => {
          this.openActions(event);
        }
      );
    }
  };

  openActions = (event: SyntheticEvent<>) => {
    this.props.onOpen && this.props.onOpen(event);
  };

  toggleOpenState = (event: SyntheticEvent<>) => {
    const isOpen = this.getControllableValue('isOpen');
    if (isOpen) {
      this.close(event);
    } else {
      this.open(event);
    }
  };

  isControlled = (prop: string) => {
    return this.props.hasOwnProperty(prop);
  };

  getControllableValue = (key: string) => {
    return this.isControlled(key) ? this.props[key] : this.state[key];
  };
}
