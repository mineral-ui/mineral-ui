/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import Paragraph from '../../Paragraph';

type Props = {
  ramp: { [string]: string }
};

const transitionEffect = '350ms cubic-bezier(0.23, 1, 0.32, 1)';

const styles = {
  hue: ({ theme }) => ({
    margin: `0 0 ${theme.space_stack_sm}`,
    padding: theme.space_inset_sm,
    position: 'relative',
    '& span:nth-child(2), & span:nth-child(3)': {
      display: 'inline-block',
      fontFamily: theme.fontFamily_monospace,
      marginLeft: theme.space_inline_xl,
      transition: `opacity 250ms linear, transform ${transitionEffect}`
    },
    '& span:nth-child(2)': {
      opacity: 1
    },
    '& span:nth-child(3)': {
      left: theme.space_inset_sm,
      opacity: 0,
      position: 'absolute',
      top: theme.space_inset_sm,
      transform: 'translate(6em, 0)'
    },
    '&:hover span:nth-child(2)': {
      opacity: 0
    },
    '&:hover span:nth-child(3)': {
      opacity: 1,
      transform: 'translate(0, 0)'
    }
  }),
  swatch: ({ theme, color }) => ({
    backgroundColor: color,
    borderRadius: theme.borderRadius_1,
    display: 'inline-block',
    height: theme.space_stack_xl,
    left: 0,
    position: 'absolute',
    top: theme.space_stack_xs,
    width: theme.space_stack_xl
  })
};

const Hue = createStyledComponent(Paragraph, styles.hue);
const Swatch = createStyledComponent('span', styles.swatch);

export default function ColorRamp({ ramp }: Props) {
  return (
    <div>
      {Object.entries(ramp).map(([key, color]) => (
        <Hue key={key}>
          <Swatch color={color} />
          <span>{key.replace('color_', '')}</span>
          {/*
            $FlowFixMe
            Needed to avoid Flow bug: https://github.com/facebook/flow/issues/2221
            Alternative is to use a refinement, e.g. color = typeof color === 'string' ? '' + color : '';
          */}
          <span>{color}</span>
        </Hue>
      ))}
    </div>
  );
}
