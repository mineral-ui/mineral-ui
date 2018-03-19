/* @flow */
import React from 'react';
import { ThemeProvider } from '../../../../../library/themes';
import TextInput from '../../../../../library/TextInput/';
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
