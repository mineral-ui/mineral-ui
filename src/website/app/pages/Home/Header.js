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
  createStyledComponent,
  createThemedComponent
} from '../../../../utils';
import Button from '../../../../Button';
import IconArrowDropDown from '../../../../Icon/IconArrowDropDown';
import _Popover from '../../../../Popover';
import Heading from '../../Heading';
import _Link from '../../Link';
import Logo from '../../Logo';

type Props = {};

type State = {
  isMenuOpen: boolean
};

const Root = createStyledComponent('div', ({ isMenuOpen, theme }) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: `${parseFloat(theme.space_inset_sm) * 16}em`,
  paddingTop: `${parseFloat(theme.space_inset_sm) * 8}em`,

  '@media(max-width: 36em)': {
    marginBottom: isMenuOpen
      ? `${parseFloat(theme.space_inset_sm) * 24}em`
      : `${parseFloat(theme.space_inset_sm) * 8}em`,
    transition: 'margin ease-in-out 150ms',

    '& div[id$="popoverContent"]': {
      marginTop: theme.space_stack_md,
      opacity: isMenuOpen ? 1 : 0,
      transition: 'opacity ease-in-out 150ms'
    }
  }
}));

const Link = createStyledComponent(_Link, {
  textTransform: 'uppercase'
});

const Logotype = createStyledComponent(Heading, ({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  fontWeight: theme.fontWeight_semiBold,
  margin: 0,

  '@media(min-width: 46em)': {
    margin: `0 0 0 -${parseFloat(theme.space_inline_sm) + 1}em`
  },

  '& > svg': {
    marginRight: theme.space_inline_sm,
    width: '1em',

    '& [class*="shape"]': {
      fill: theme.color_white
    }
  }
}));

const MenuButton = createThemedComponent(Button, ({ theme }) => ({
  borderColor_focus: theme.color_white,
  Button_color_text_minimal: theme.color_white,
  Button_backgroundColor_minimal_hover: 'rgba(255,255,255,0.2)',
  Button_backgroundColor_minimal_active: 'rgba(255,255,255,0.1)',
  ButtonContent_fontSize: '1em'
}));

const Popover = createThemedComponent(_Popover, {
  PopoverContent_backgroundColor: 'rgba(0,0,0,0.4)',
  PopoverContent_borderColor: 'transparent',
  PopoverContent_borderRadius: 0,
  PopoverContent_boxShadow: 'none'
});

const StyledNav = createStyledComponent('nav', ({ theme }) => ({
  '@media(max-width: 36em)': {
    width: '100vw'
  },

  '& > a': {
    '@media(max-width: 36em)': {
      display: 'block',
      textAlign: 'center'
    }
  },

  '& > a + a': {
    marginTop: theme.space_stack_sm,

    '@media(min-width: 36em)': {
      marginLeft: theme.space_inline_lg,
      marginTop: 0
    }
  }
}));

const Nav = () => {
  return (
    <StyledNav>
      <Link to="/color">Guidelines</Link>
      <Link to="/whats-new">What’s New</Link>
      <Link to="/component-status">Components</Link>
      <Media query="(max-width: 36em)">
        {matches =>
          matches ? (
            <Link to="https://github.com/mineral-ui/mineral-ui">
              View on GitHub
            </Link>
          ) : null}
      </Media>
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
    const rootProps = {
      isMenuOpen: this.state.isMenuOpen,
      ...this.props
    };

    const popoverProps = {
      content: <Nav />,
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
        <Logotype level={1} ariaLabel="Mineral UI">
          <Logo /> MNRL
        </Logotype>
        <Media query="(min-width: 36em)">
          {matches =>
            matches ? (
              <Nav />
            ) : (
              <Popover {...popoverProps}>
                <MenuButton iconEnd={<IconArrowDropDown />} minimal>
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
