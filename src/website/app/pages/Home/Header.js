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
import Media from 'react-media';
import {
  color,
  createStyledComponent,
  createThemedComponent,
  pxToEm
} from '../../../../utils';
import Button from '../../../../Button';
import IconArrowDropDown from '../../../../Icon/IconArrowDropDown';
import _Popover from '../../../../Popover';
import Heading from '../../Heading';
import _Link from '../../Link';
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

const Root = createStyledComponent('div', ({ isMenuOpen, theme }) => {
  const transitionProperties = 'ease-in-out 150ms';

  return {
    alignItems: 'flex-end',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: `${parseFloat(theme.space_inset_sm) * 16}em`,
    paddingTop: `${parseFloat(theme.space_inset_sm) * 8}em`,

    '@media(max-width: 38.999em)': {
      marginBottom: isMenuOpen
        ? `${parseFloat(theme.space_inset_sm) * 33}em` // Dependent on menu height
        : `${parseFloat(theme.space_inset_sm) * 8}em`,
      paddingTop: `${parseFloat(theme.space_inset_sm) * 3}em`,
      transition: `margin ${transitionProperties}`,

      '& div[id$="popoverContent"]': {
        marginTop: theme.space_stack_sm,
        opacity: isMenuOpen ? 1 : 0,
        transition: `opacity ${transitionProperties}`,

        // CardBlock (tried doing this via theme variables, and it didn't work)
        '& > div': {
          margin: 0,
          padding: 0
        }
      }
    }
  };
});

const Link = createStyledComponent(_Link, {
  fontSize: pxToEm(18)
});

const Logotype = createStyledComponent(Heading, {
  lineHeight: 1,
  margin: 0,

  '@media(min-width: 48em)': {
    margin: `0 0 0 -33px` // Optical adjustment
  },

  '& svg': {
    display: 'block',
    width: 137
  }
});

const ThemedMenuButton = createThemedComponent(Button, ({ theme }) => ({
  fontFamily: theme.fontFamily_headline,
  Button_color_text_minimal: theme.color_white,
  Button_backgroundColor_minimal_hover: 'transparent',
  Button_backgroundColor_minimal_active: 'transparent',
  Button_fontWeight: theme.fontWeight_regular,
  Button_height_large: null,
  Button_paddingHorizontal: 0,
  ButtonContent_fontSize: pxToEm(18)
}));

const MenuButton = createStyledComponent(ThemedMenuButton, {
  border: 0,
  position: 'relative',
  top: '0.3em', // Optical adjustment for baseline alignment with Logotype

  '&:focus': {
    color: color.orange_50,
    boxShadow: 'none'
  }
});

const Popover = createThemedComponent(_Popover, {
  PopoverContent_backgroundColor: null,
  PopoverContent_borderColor: 'transparent',
  PopoverContent_borderRadius: null,
  PopoverContent_boxShadow: null
});

const StyledNav = createStyledComponent('nav', ({ theme }) => ({
  '@media(max-width: 38.999em)': {
    width: '100vw',

    '& > a': {
      display: 'block',
      paddingBottom: theme.space_inset_sm,
      paddingRight: '3.7em', // Optical adjument to align with MenuButton text
      paddingTop: theme.space_inset_sm,
      textAlign: 'right',

      '&:nth-child(1)': { backgroundColor: 'rgba(0,0,0,0.5)' },
      '&:nth-child(2)': { backgroundColor: 'rgba(0,0,0,0.42)' },
      '&:nth-child(3)': { backgroundColor: 'rgba(0,0,0,0.34)' },
      '&:nth-child(4)': { backgroundColor: 'rgba(0,0,0,0.26)' },
      '&:nth-child(5)': { backgroundColor: 'rgba(0,0,0,0.18)' }
    }
  },

  '@media(min-width: 39em)': {
    position: 'relative',
    top: '0.3em', // Optical adjustment for baseline alignment with Logotype

    '& > a + a': {
      marginLeft: theme.space_inline_lg
    }
  }
}));

const Nav = ({
  latestPost
}: {
  latestPost?: { title: string, url: string }
}) => {
  return (
    <StyledNav>
      <Link to="/color">Guidelines</Link>
      <Link to="/whats-new">What’s New</Link>
      <Link to="/component-status">Components</Link>
      <Media
        query="(max-width: 38.999em)"
        render={() =>
          latestPost && <Link to={latestPost.url}>Latest Blog Post</Link>}
      />
      <Media
        query="(max-width: 38.999em)"
        render={() => (
          <Link to="https://github.com/mineral-ui/mineral-ui">
            View on GitHub
          </Link>
        )}
      />
    </StyledNav>
  );
};

export default class Header extends Component<Props, State> {
  props: Props;

  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      isMenuOpen: false
    };
  }

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
          <LogotypeHorizontal fill="#fff" />
        </Logotype>
        <Media query="(min-width: 39em)">
          {matches =>
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
            )}
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
