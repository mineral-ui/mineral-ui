/* @flow */
import React, { Component } from 'react';
import Media from 'react-media';
import { createStyledComponent, pxToEm } from '../../../../library/styles';
import { createThemedComponent } from '../../../../library/themes';
import Button from '../../../../library/Button';
import IconArrowDropDown from 'mineral-ui-icons/IconArrowDropDown';
import _Popover from '../../../../library/Popover';
import Heading from '../../SiteHeading';
import _Link from '../../SiteLink';
import LogotypeHorizontal from '../../LogotypeHorizontal';

type Props = {
  latestPost?: {
    title: string,
    url: string
  }
};

type State = {
  isMenuOpen: boolean
};

const menuButtonTheme = ({ theme }) => ({
  fontFamily: theme.fontFamily_headline,
  Button_color_minimal: theme.color_white,
  Button_backgroundColor_minimal_hover: 'transparent',
  Button_backgroundColor_minimal_active: 'transparent',
  Button_fontWeight: theme.fontWeight_regular,
  Button_height_large: null,
  Button_paddingHorizontal: 0,
  ButtonContent_fontSize: '1em',
  ButtonIcon_margin: null
});
const popoverTheme = {
  PopoverContent_backgroundColor: null,
  PopoverContent_borderColor: 'transparent',
  PopoverContent_borderRadius: null,
  PopoverContent_boxShadow: null,
  PopoverContent_paddingVertical: null
};

const styles = {
  root: ({ isMenuOpen, theme }) => {
    const transitionProperties =
      '350ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';

    return {
      alignItems: 'flex-end',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: isMenuOpen
        ? pxToEm(250) // Dependent on menu height
        : theme.baseline_7,
      paddingTop: pxToEm(30), // matches horizontal padding
      transition: `margin ${transitionProperties}`,

      '& div[id$="content"]': {
        // Matches nav link padding + menuButton optical adjustment
        marginTop: `${parseFloat(theme.space_stack_sm) + 0.45}em`,
        opacity: isMenuOpen ? 1 : 0,
        transition: `opacity 500ms linear`,

        // CardBlock (tried doing this via theme variables, and it didn't work)
        '& > div': {
          margin: 0,
          padding: 0
        }
      },

      [theme.bp_home_navExpanded]: {
        marginBottom: theme.baseline_9,
        paddingTop: theme.baseline_2
      }
    };
  },
  link: ({ theme }) => ({
    fontFamily: theme.fontFamily_headline,
    fontWeight: theme.fontWeight_medium,
    fontSize: '1em',
    textDecoration: 'none',
    textShadow: theme.textShadow,

    '& > [role="img"]': {
      borderBottom: 0
    }
  }),
  logotype: ({ theme }) => ({
    color: theme.color,
    lineHeight: 1,
    margin: 0,

    [theme.bp_moreSpacious]: {
      margin: `0 0 0 -33px` // Optical adjustment
    },

    '& svg': {
      display: 'block',
      width: 128, // Reaches to midpoint of a 320-wide viewport

      [theme.bp_home_navExpanded]: {
        width: 157
      }
    }
  }),
  menuButton: ({ theme }) => ({
    border: 0,
    fontWeight: theme.fontWeight_medium,
    position: 'relative',
    textShadow: theme.textShadow,
    top: '0.45em', // Optical adjustment for baseline alignment with Logotype

    '&:focus': {
      color: '#ed774c',
      boxShadow: 'none'
    },

    '& [role="img"]': {
      color: 'inherit'
    }
  }),
  nav: ({ theme }) => ({
    [theme.bp_home_navCollapsedAndDown]: {
      width: '100vw',

      '& > a': {
        display: 'block',
        paddingBottom: theme.space_inset_sm,
        paddingRight: '3.5em', // Optical adjument to align with MenuButton text
        paddingTop: theme.space_inset_sm,
        textAlign: 'right',
        textShadow: 'none',

        '&:nth-child(1)': { backgroundColor: 'rgba(0,0,0,0.5)' },
        '&:nth-child(2)': { backgroundColor: 'rgba(0,0,0,0.44)' },
        '&:nth-child(3)': { backgroundColor: 'rgba(0,0,0,0.38)' },
        '&:nth-child(4)': { backgroundColor: 'rgba(0,0,0,0.32)' },
        '&:nth-child(5)': { backgroundColor: 'rgba(0,0,0,0.26)' }
      }
    },

    [theme.bp_home_navExpanded]: {
      position: 'relative',
      top: '0.3em', // Optical adjustment for baseline alignment with Logotype

      '& > a + a': {
        marginLeft: theme.space_inline_lg
      }
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const Link = createStyledComponent(_Link, styles.link);
const Logotype = createStyledComponent(Heading, styles.logotype);
const ThemedMenuButton = createThemedComponent(Button, menuButtonTheme);
const MenuButton = createStyledComponent(ThemedMenuButton, styles.menuButton);
const Popover = createThemedComponent(_Popover, popoverTheme);
const StyledNav = createStyledComponent('nav', styles.nav);

const Nav = ({
  latestPost
}: {
  latestPost?: { title: string, url: string }
}) => {
  return (
    <StyledNav>
      <Link to="/getting-started">Guides</Link>
      <Link to="/roadmap">What’s New</Link>
      <Link to="/component-status">Components</Link>
      <Media
        query="(max-width: 38.999em)"
        render={() =>
          latestPost && <Link href={latestPost.url}>Latest Blog Post</Link>
        }
      />
      <Media
        query="(max-width: 38.999em)"
        render={() => (
          <Link href="https://github.com/mineral-ui/mineral-ui">
            View on GitHub
          </Link>
        )}
      />
    </StyledNav>
  );
};

export default class Header extends Component<Props, State> {
  state: State = {
    isMenuOpen: false
  };

  render() {
    const { latestPost, ...restProps } = this.props;
    const rootProps = {
      isMenuOpen: this.state.isMenuOpen,
      ...restProps
    };
    const popoverProps = {
      content: <Nav latestPost={latestPost} />,
      hasArrow: false,
      isOpen: this.state.isMenuOpen,
      modifiers: {
        preventOverflow: {
          padding: 0
        }
      },
      onClose: this.onMenuClose,
      onOpen: this.onMenuOpen,
      placement: 'bottom-end'
    };

    return (
      <Root {...rootProps}>
        <Logotype level={1}>
          <LogotypeHorizontal />
        </Logotype>
        <Media query="(min-width: 39em)">
          {(matches) =>
            matches ? (
              <Nav />
            ) : (
              <Popover {...popoverProps}>
                <MenuButton
                  iconEnd={<IconArrowDropDown size="large" />}
                  minimal>
                  Menu
                </MenuButton>
              </Popover>
            )
          }
        </Media>
      </Root>
    );
  }

  onMenuClose = () => {
    this.setState({ isMenuOpen: false });
  };

  onMenuOpen = () => {
    this.setState({ isMenuOpen: true });
  };
}
