/* @flow */
import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { canUseDOM } from 'exenv';
import { createStyledComponent } from '../../../../library/styles';
import palette, {
  type Color
} from '../../../../library/themes/generated/palette';
import IconKeyboardArrowDown from 'mineral-ui-icons/IconKeyboardArrowDown';
import Heading from '../../SiteHeading';
import Paragraph from '../../Paragraph';

type Props = {
  activeColor: Color,
  availableThemes: Array<Color>,
  changeTheme: (Color) => void
};

type State = {
  isOpen: boolean,
  visibleThemeCount: number
};

type FlipProps = {
  activeColor: Color,
  colorName: Color,
  handleColorChange: (Color) => void,
  in: boolean
};

type GrowProps = {
  in: boolean,
  children: React$Node
};

const duration = 350;
const quintOut = 'cubic-bezier(0.23, 1, 0.32, 1)';
const easeOutBack = 'cubic-bezier(0.175, 0.885, 0.32, 1.275)';

const styles = {
  collapseIcon: ({ theme }) => ({
    cursor: 'pointer',
    position: 'absolute',
    right: `-${theme.space_inset_sm}`,
    top: `-${theme.space_stack_md}`,
    transition: `transform ${duration}ms ${quintOut}`,
    pointerEvents: 'none'
  }),

  // This object isn't consumed by glamorous,
  // so we inline the border color as a literal
  grow: {
    position: 'relative',
    borderBottom: '1px solid lightgray',
    transition: `height ${duration}ms ${easeOutBack}`,
    entering: { height: 80 },
    entered: { height: 230 },
    exiting: { height: 230 },
    exited: { height: 80 }
  },

  flip: {
    transition: `opacity ${duration}ms ease-in, transform ${duration}ms ease-out`,
    entering: {
      opacity: 0.01,
      transform: 'scale(1.1) rotateX(-40deg) translate3d(0, 20px, 50px)'
    },
    entered: {
      opacity: 1,
      transform: 'scale(1) rotateX(0deg) translate3d(0, 0, 0)'
    },
    exiting: {
      opacity: 1,
      transform: 'scale(1) rotateX(0deg) translate3d(0, 0, 0)'
    },
    exited: {
      opacity: 0.01,
      transform: 'scale(1.1) rotateX(-40deg) translate3d(0, 20px, 50px)'
    }
  },

  option: ({ theme, active, name }) => {
    const css = {
      backgroundColor: palette[name][60],
      borderRadius: theme.borderRadius_1,
      color: theme.color_themePrimary,
      cursor: 'pointer',
      display: 'inline-block',
      marginTop: 0,
      marginBottom: theme.space_stack_sm,
      marginRight: theme.space_inline_md,
      overflow: 'hidden',
      padding: theme.space_inset_md,
      position: 'relative',
      transition: `transform 600ms ${quintOut}`,
      transformStyle: 'preserve-3d',
      width: `calc(50% - ${theme.space_inline_sm})`,
      '&:hover': {
        transform: 'scale(1.05) rotateX(0deg) translate3d(0, 0, 0)'
      },
      '&:nth-child(even)': {
        marginRight: 0
      },
      '&:after': active && {
        position: 'absolute',
        top: -18,
        right: -18,
        content: '""',
        width: 30,
        height: 30,
        backgroundColor: 'white',
        transform: 'rotate(45deg)'
      }
    };

    return css;
  },

  optionList: ({ isOpen }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    display: isOpen ? 'block' : 'none'
  }),
  root: {
    perspective: '800px'
  },

  swatch: ({ theme, activeColor, isOpen }) => {
    const hue = palette[activeColor][60];
    return {
      color: theme.color_themePrimary,
      backgroundColor: hue,
      borderRadius: theme.borderRadius_1,
      cursor: 'pointer',
      display: isOpen ? 'none' : 'block',
      fontSize: theme.h3_fontSize,
      padding: theme.space_inset_md,
      textTransform: 'capitalize',
      [theme.bp_mobile]: {
        fontSize: theme.h5_fontSize
      }
    };
  },

  title: ({ theme }) => ({
    marginTop: 0,
    cursor: 'pointer',
    [theme.bp_mobile]: {
      margin: `0 0 ${theme.space_stack_sm}`
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const CollapseIcon = createStyledComponent(
  IconKeyboardArrowDown,
  styles.collapseIcon
);
const OptionList = createStyledComponent('div', styles.optionList);
const Option = createStyledComponent(Paragraph, styles.option);
const Swatch = createStyledComponent('div', styles.swatch);
const Title = createStyledComponent(Heading, styles.title);

// Component for growing the height of the picker
const Grow = ({ in: inProp, children }: GrowProps) => (
  <Transition
    in={inProp}
    timeout={{ enter: duration - 50, exit: duration / 2 }}>
    {(state) => (
      <div
        style={{
          ...styles.grow,
          ...styles.grow[state]
        }}>
        {children}
      </div>
    )}
  </Transition>
);

// Entrance transition for the cards in the expanded menu
const Flip = ({
  activeColor,
  colorName,
  handleColorChange,
  in: inProp
}: FlipProps) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => {
      return (
        <Option
          style={{ ...styles.flip, ...styles.flip[state] }}
          variant="mouse"
          active={activeColor === colorName}
          name={colorName}
          onClick={() => handleColorChange(colorName)}>
          {colorName}
          <br />
          {palette[colorName][60]}
        </Option>
      );
    }}
  </Transition>
);

export default class Picker extends Component<Props, State> {
  state: State = {
    isOpen: false,
    visibleThemeCount: 0
  };

  toggleInterval: ?number;

  render() {
    const { availableThemes, activeColor } = this.props;
    const { isOpen, visibleThemeCount } = this.state;

    return (
      <Root>
        <CollapseIcon size="4em" />
        <Title level={2} onClick={this.toggle}>
          Select a Color
        </Title>

        <Grow in={isOpen}>
          <Swatch
            activeColor={activeColor}
            onClick={this.toggle}
            isOpen={isOpen}>
            {activeColor}
          </Swatch>
          <OptionList isOpen={isOpen}>
            {availableThemes.map((colorName, index) => {
              return (
                <Flip
                  activeColor={activeColor}
                  colorName={colorName}
                  handleColorChange={this.handleColorChange}
                  in={index < visibleThemeCount}
                  key={`flip_${index}`}
                />
              );
            })}
          </OptionList>
        </Grow>
      </Root>
    );
  }

  handleColorChange = (color: Color) => {
    this.props.changeTheme(color);
  };

  open = () => {
    const { availableThemes } = this.props;
    const availableThemesCount = availableThemes.length;

    // Reset visibleThemeCount array so we can animate them in.
    this.setState({ isOpen: true, visibleThemeCount: 0 });

    if (canUseDOM) {
      // Add menu items one at a time to trigger transitions
      this.toggleInterval = global.setInterval(() => {
        const { visibleThemeCount } = this.state;
        if (visibleThemeCount !== availableThemesCount) {
          this.setState({
            visibleThemeCount: visibleThemeCount + 1
          });
        } else {
          this.clearToggleInterval();
        }
      }, 50);
    } else {
      this.setState({
        visibleThemeCount: availableThemesCount
      });
    }
  };

  close = () => {
    this.setState({ isOpen: false, visibleThemeCount: 0 });
    this.clearToggleInterval();
  };

  toggle = () => {
    if (this.state.isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  clearToggleInterval = () => {
    if (canUseDOM) {
      global.clearInterval(this.toggleInterval);
      this.toggleInterval = undefined;
    }
  };
}
