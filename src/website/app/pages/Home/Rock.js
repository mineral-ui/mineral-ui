import React, { Component } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { createStyledComponent } from '../../../../styles';

type Props = {
  float?: boolean,
  offsetYMax?: number,
  position?: {
    bottom: number,
    left: number
  },
  size?: number,
  type?: 'ruby' | 'tourmaline' | 'gold' | 'rockpile'
};

const positionStyles = (float, position) => ({
  position: 'absolute',
  bottom: float ? position.bottom : 0,
  left: position ? position.left : 0
});

const styles = {
  root: ({ float, position }) => ({
    ...positionStyles(float, position)
  }),
  img: ({ float, position, size }) => {
    let styles = {
      height: 'auto',
      width: size
    };

    if (!float) {
      styles = {
        ...styles,
        ...positionStyles(float, position)
      };
    }

    return styles;
  }
};

const Root = createStyledComponent('div', styles.root);
const Img = createStyledComponent('img', styles.img);

export default class Rock extends Component {
  static defaultProps = {
    type: 'Gold',
    size: 25,
    float: false
  };

  // Does not work with flow types
  // static contextTypes = {
  //   parallaxController: PropTypes.object.isRequired
  // };

  props: Props;

  render() {
    const {
      float,
      offsetYMax,
      position,
      size,
      type,
      ...restProps
    } = this.props;
    const imgSrc = `/images/rocks/${type}.svg`;
    const rootProps = { float, position, ...restProps };
    const imgProps = { alt: type, float, position, size, src: imgSrc };
    const parallaxProps = {
      offsetYMax: offsetYMax,
      offsetYMin: 0,
      offsetXMax: 0,
      offsetXMin: 0,
      disabed: !float
    };

    if (float) {
      return (
        <Root {...rootProps}>
          <Parallax {...parallaxProps}>
            <Img {...imgProps} />
          </Parallax>
        </Root>
      );
    } else {
      return <Img {...imgProps} />;
    }
  }
}
