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
import { mineralTheme, ThemeProvider } from '../../../../../../themes';
import Card, { CardBlock, CardTitle } from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsumRtl';

export default {
  id: 'rtl',
  title: 'Bidirectionality',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardTitle reverses its alignment when the \`direction\` theme
variable is set to \`rtl\` (right-to-left).`,
  scope: {
    Card,
    CardTitle,
    CardBlock,
    loremIpsum,
    DemoLayout,
    ThemeProvider
  },
  source: `
    <div dir="rtl">
      <ThemeProvider theme={{ direction: 'rtl' }}>
        <DemoLayout>
          <Card>
            <CardTitle
              avatar={<img src="/images/215x210_avatar.png" alt="نص بديل" />}
              subtitle="الترجمة هنا">
              عنوان البطاقة
            </CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>
          <Card>
            <CardTitle secondaryText="نص ثانوي">
              عنوان البطاقة
            </CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>
        </DemoLayout>
      </ThemeProvider>
    </div>`
};
