/* @flow */
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../library/styles';
import { createThemedComponent } from '../../../../library/themes';
import Section from '../../Section';

const ThemedSection = createThemedComponent(Section, ({ theme }) => ({
  SectionPaddingHorizontal: 0,
  SectionPaddingHorizontalWide: 0,
  SectionPaddingVertical: theme.baseline_3,
  SectionPaddingVerticalWide: theme.baseline_5
}));

export default createStyledComponent(ThemedSection, ({ theme }) => ({
  // Inner
  '& > div': {
    margin: 0,
    maxWidth: theme.maxContentWidth,
    paddingBottom: 0,
    paddingTop: 0,
    position: 'static'
  },

  // Targets DocSectionTitle inside any DocSection immediately following
  // another DocSection
  '& + & > div > h3': {
    marginTop: getNormalizedValue(
      pxToEm(41), // to baseline
      theme.SiteHeading_fontSize_3
    ),

    [theme.bp_moreSpacious]: {
      marginTop: getNormalizedValue(
        pxToEm(58), // to baseline
        theme.SiteHeading_fontSize_3_wide
      )
    }
  }
}));
