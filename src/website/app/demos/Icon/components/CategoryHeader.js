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
import { createStyledComponent } from '../../../../../components/Utils';

export default createStyledComponent(
  'h5',
  ({ theme }) => ({
    borderTop: `1px solid ${theme.color_gray}`,
    paddingTop: theme.spacing_oneAndAHalf,
    fontSize: theme.font_size_b,
    textTransform: 'capitalize',
    margin: `${theme.spacing_oneAndAHalf} 0 ${theme.spacing_single}`,
    '&:first-of-type': {
      borderTop: 'none',
      paddingTop: 0,
      marginTop: theme.spacing_single
    }
  }),
  {
    displayName: 'CategoryHeader',
    includeStyleReset: true
  }
);
