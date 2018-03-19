/* @flow */
import React from 'react';
import DemoForm from '../../components/DemoForm';
import Radio from '../../../../../../library/Radio';
import { simulate } from 'glamor';

const Demo = (
  <DemoForm>
    <Radio label="Regular" />
    <Radio label="Hover" {...simulate('hover')} />
    <Radio label="Focus" {...simulate('focus')} />
    <Radio label="Focus & Hover" {...simulate('focus', 'hover')} />
    <Radio label="Focus & Active" {...simulate('focus', 'active')} />
    <Radio label="Active" {...simulate('active')} />
    <Radio disabled label="Disabled" />

    <Radio label="Regular (checked)" defaultChecked />
    <Radio label="Hover (checked)" defaultChecked {...simulate('hover')} />
    <Radio label="Focus" defaultChecked {...simulate('focus')} />
    <Radio
      label="Focus & Hover (checked)"
      defaultChecked
      {...simulate('focus', 'hover')}
    />
    <Radio
      label="Focus & Active (checked)"
      defaultChecked
      {...simulate('focus', 'active')}
    />
    <Radio label="Active (checked)" defaultChecked {...simulate('active')} />
    <Radio disabled label="Disabled (checked)" defaultChecked />
  </DemoForm>
);

export default {
  id: 'states',
  title: 'States',
  hideFromProd: true,
  hideSource: true,
  scope: { Demo },
  source: `Demo`
};
