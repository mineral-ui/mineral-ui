/* @flow */
import React from 'react';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../library/styles';
import Heading from '../../SiteHeading';

const Root = createStyledComponent(Heading, ({ level, theme }) => {
  const fontSize = theme[`SiteHeading_fontSize_${level}`];
  const fontSizeWide = theme[`SiteHeading_fontSize_${level}_wide`];

  return {
    margin: `0 0 ${getNormalizedValue(pxToEm(21 - 12), fontSize)}`, // to mid-baseline
    paddingTop: getNormalizedValue(pxToEm(50), fontSize), // to baseline

    [theme.bp_moreSpacious]: {
      fontSize: fontSizeWide,
      margin: `0 0 ${getNormalizedValue(pxToEm(19 - 12), fontSizeWide)}`, // to mid-baseline
      paddingTop: getNormalizedValue(pxToEm(55), fontSizeWide) // to baseline
    }
  };
});

function DocSectionTitle(props: {}) {
  return <Root {...props} />;
}

DocSectionTitle.defaultProps = {
  level: 3
};

export default DocSectionTitle;
