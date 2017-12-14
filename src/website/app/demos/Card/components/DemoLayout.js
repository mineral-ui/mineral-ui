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
import clearFix from 'polished/lib/mixins/clearFix';
import { createStyledComponent } from '../../../../../styles';

export default createStyledComponent('div', ({ theme }) => {
  const rtl = theme.direction === 'rtl';

  return {
    ...clearFix(),

    '& > *': {
      marginBottom: '1em',

      '@media(min-width: 40em)': {
        float: rtl ? 'right' : 'left',
        marginLeft: rtl ? '1em' : null,
        marginRight: rtl ? null : '1em',
        width: '47%'
      }
    },

    // http://quantityqueries.com/
    '& > *:nth-last-child(n+3), & > *:nth-last-child(n+3) ~ *': {
      '@media(min-width: 64em)': {
        width: '30%'
      }
    }
  };
});
