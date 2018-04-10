/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import Heading from '../../SiteHeading';

const styles = {
  root: ({ theme }) => ({
    [theme.bp_moreSpacious]: {
      display: 'flex'
    },

    '& div': {
      flex: '1 0 50%'
    }
  }),
  openSans: ({ theme }) => ({
    fontFamily: 'Open Sans',
    '& p': {
      fontSize: theme.h1_fontSize,
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
