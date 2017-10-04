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
import React from 'react';
import { createStyledComponent } from '../../../../utils';
import Heading from '../../Heading';

const styles = {
  root: {
    display: 'flex',
    '& div': {
      flex: '1 0 50%'
    }
  },
  openSans: ({ theme }) => ({
    fontFamily: 'Open Sans',
    '& p': {
      fontSize: theme.fontSize_h1,
      margin: `0 0 ${theme.space_stack_xs}`
    }
  }),
  systemFont: ({ theme }) => ({
    '& h5': { textAlign: 'right' },
    '& p': {
      direction: 'rtl',
      margin: `0 0 ${theme.space_stack_sm}`
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const OpenSans = createStyledComponent('div', styles.openSans);
const SystemFont = createStyledComponent('div', styles.systemFont);

export default function FontDemo() {
  return (
    <Root>
      <OpenSans>
        <Heading level={5}>Open Sans (Latin, Cyrillic, Greek)</Heading>
        <p>Open Sans</p>
        <p>Открытый без</p>
        <p>​‌Ανο​‌ικτ​‌ό Sans</p>
      </OpenSans>
      <SystemFont>
        <Heading level={5}>System Font (Asian Syllabic, Abjad, Indic)</Heading>
        <p>
          加学住無聞団覧問会因禁準著記経。訃先広応施彰道余世歌大木。解台房高暮治静一梁犯大下派。容定野操後情更接値感稿演初礼現後惑親資質。都大森年期所示求田岡画我託王質事。割街定載神配芸理時終安国。作点谷正継件訃供金番掲考歳約以止人全自。質問載護歳稿天懲禁印障利礼屋造倉多的補。社迅北討氏首楽市視専権点代推掲本藤。
        </p>
        <p>
          وأزيز أصقاع الدولارات عن لمّ, يتم الحرة فرنسا البشريةً أي. عدد قد
          حكومة الضروري الحيلولة, أعلنت واستمر الحدود تم تحت, أم مكن أحدث
          الثانية التخطيط. أن بلا وبعض غرّة، أعمال. تاريخ وبحلول واتّجه بل ذلك.
          هو سابق هُزم الإمداد دول. سياسة لأداء الوراء و عرض, مكن و وحتّى
          اتفاقية.
        </p>
        <p>
          प्रस्ताव पर चर्चा शुरू करने से पहले मै आप सभी के सामने एक या दो बात
          रखना चाहूँगा, मै दो बातो को साफ़-साफ़ समझना चाहता हूँ और उन दो बातो को
          मै हम सभी के लिये महत्वपूर्ण भी मानता हूँ। मै चाहता हूँ की आप सब भी उन
          दो बातो को मेरे नजरिये से ही देखे, क्योकि यदि आपने उन दो बातो को अपना
          लिया तो आप हमेशा आनंदित रहोंगे।
        </p>
      </SystemFont>
    </Root>
  );
}
