/* @flow */
import React from 'react';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../library/styles';
import Heading from './SiteHeading';

type Props = {
  children: string | React$Node
};

const Title = createStyledComponent(
  Heading,
  ({ theme }) => ({
    margin: `0 0 ${getNormalizedValue(
      pxToEm(21 - 12), // to mid-baseline
      theme.SiteHeading_fontSize_3
    )}`,
    paddingTop: getNormalizedValue(
      pxToEm(68), // to baseline
      theme.SiteHeading_fontSize_3
    ),
    textTransform: 'capitalize',
    '& > a:link': {
      color: 'inherit',
      fontWeight: 'inherit',
      textDecoration: 'none',

      '&:hover': {
        textDecoration: 'underline'
      }
    },

    [theme.bp_moreSpacious]: {
      fontSize: theme.SiteHeading_fontSize_3_wide,
      margin: `0 0 ${getNormalizedValue(
        pxToEm(19 - 12), // to mid-baseline
        theme.SiteHeading_fontSize_3_wide
      )}`,
      paddingTop: getNormalizedValue(
        pxToEm(80), // to baseline
        theme.SiteHeading_fontSize_3_wide
      )
    }
  }),
  {
    withProps: {
      anchors: true,
      level: 3
    }
  }
);

export default function SiteSubHeading(props: Props) {
  return <Title {...props} />;
}
