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
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../../../styles';
import { createThemedComponent } from '../../../../themes';
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
    paddingTop: 0
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
