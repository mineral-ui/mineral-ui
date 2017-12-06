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
import { ThemeProvider } from '../../../../../themes';
import TextInput from '../../../../../TextInput';
import IconCloud from 'mineral-ui-icons/IconCloud';
import IconBackspace from 'mineral-ui-icons/IconBackspace';
import DemoLayout from '../components/DemoLayout';

const iconStart = <IconCloud />;
const iconEnd = <IconBackspace />;
const LtrDemo = (
  <DemoLayout>
    <TextInput defaultValue="000" />
    <TextInput defaultValue="000" type="number" prefix="$" />
    <TextInput defaultValue="000" type="number" suffix="cm" />
    <TextInput defaultValue="000" type="number" prefix="$" suffix="cm" />
    <TextInput
      defaultValue="000"
      type="number"
      prefix="$"
      iconStart={iconStart}
    />
    <TextInput defaultValue="000" type="number" suffix="cm" iconEnd={iconEnd} />
    <TextInput
      defaultValue="000"
      type="number"
      prefix="$"
      suffix="cm"
      iconStart={iconStart}
      iconEnd={iconEnd}
    />
    <TextInput defaultValue="000" type="number" suffix="cm" variant="danger" />
    <TextInput
      defaultValue="000"
      size="small"
      type="number"
      prefix="$"
      suffix="cm"
      iconStart={iconStart}
      iconEnd={iconEnd}
    />
  </DemoLayout>
);

const RtlDemo = (
  <div dir="rtl">
    <h3>RTL</h3>
    <ThemeProvider theme={{ direction: 'rtl' }}>{LtrDemo}</ThemeProvider>
  </div>
);

function KitchenSink() {
  return (
    <div>
      {LtrDemo}
      {RtlDemo}
    </div>
  );
}

export default {
  id: 'kitchen-sink',
  title: 'Kitchen Sink',
  hideFromProd: true,
  hideSource: true,
  scope: { KitchenSink },
  source: `<KitchenSink />`
};
