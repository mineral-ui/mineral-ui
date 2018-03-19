/* @flow */
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../library/styles';
import Heading from '../../SiteHeading';

export default createStyledComponent(Heading, ({ theme }) => ({
  margin: `0 0 ${getNormalizedValue(
    pxToEm(21 - 12), // to mid-baseline
    theme.SiteHeading_fontSize_3
  )}`,
  paddingTop: getNormalizedValue(
    pxToEm(50), // to baseline
    theme.SiteHeading_fontSize_3
  ),

  [theme.bp_moreSpacious]: {
    fontSize: theme.SiteHeading_fontSize_3_wide,
    margin: `0 0 ${getNormalizedValue(
      pxToEm(19 - 12), // to mid-baseline
      theme.SiteHeading_fontSize_3_wide
    )}`,
    paddingTop: getNormalizedValue(
      pxToEm(55), // to baseline
      theme.SiteHeading_fontSize_3_wide
    )
  }
})).withProps({ level: 3 });
