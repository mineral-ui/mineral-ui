/* @flow */
import React from 'react';
import { keyframes } from 'react-emotion';
import { createStyledComponent } from '../../../../library/styles';
import Button from '../../SiteButton';
import Link from '../../SiteLink';
import Markdown from '../../Markdown';
import content from './notFound.md';
const floatingMineralsSvg = require('!!raw-loader!../../../public/images/minerals.svg');

type Props = {};

const random = (range, offset) => Math.floor(Math.random() * range) + offset;

const getAnimation = (offset1, offset2) => {
  let frames = {};
  for (let i = 10; i <= 100; i += 10) {
    frames[`${i}%`] = {
      clipPath: `inset(${random(25, offset1)}% 0 ${random(25, offset2)}% 0)`
    };
  }
  return frames;
};

const glitch1 = keyframes('glitch1', getAnimation(0, 40));
const glitch2 = keyframes('glitch2', getAnimation(40, 5));

const mineralCopyStyles = {
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  width: '100%'
};

const styles = {
  floatingMineralsContainer: {
    filter: 'hue-rotate(150deg) contrast(150%)',
    margin: '1em auto',
    maxWidth: '25em',
    overflow: 'hidden',
    position: 'relative',
    transform: 'rotate(180deg)',
    width: '70vw'
  },
  floatingMinerals2: {
    ...mineralCopyStyles,
    animation: `${glitch1} 1s infinite linear alternate-reverse`,
    clipPath: 'inset(10% 0 60% 0)',
    left: 5
  },
  floatingMinerals3: {
    ...mineralCopyStyles,
    animation: `${glitch2} 1s infinite linear alternate-reverse`,
    clipPath: 'inset(60% 0 10% 0)',
    left: -5
  },
  message: {
    fontSize: '2em',
    marginBottom: '3rem',
    textAlign: 'center',

    '& > p': {
      marginBottom: '1rem'
    }
  }
};

const FloatingMineralsContainer = createStyledComponent(
  'div',
  styles.floatingMineralsContainer
);
const FloatingMinerals2 = createStyledComponent(
  'div',
  styles.floatingMinerals2
);
const FloatingMinerals3 = createStyledComponent(
  'div',
  styles.floatingMinerals3
);
const Message = createStyledComponent(Markdown, styles.message);

export default function NotFound(props: Props) {
  return (
    <div {...props}>
      <Message scope={{ Button, Link }}>{content}</Message>
      <FloatingMineralsContainer>
        <div dangerouslySetInnerHTML={{ __html: floatingMineralsSvg }} />
        <FloatingMinerals2
          dangerouslySetInnerHTML={{ __html: floatingMineralsSvg }}
        />
        <FloatingMinerals3
          dangerouslySetInnerHTML={{ __html: floatingMineralsSvg }}
        />
      </FloatingMineralsContainer>
    </div>
  );
}
