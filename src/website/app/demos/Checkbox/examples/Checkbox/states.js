/* @flow */
import React from 'react';
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../library/Checkbox';
import { simulate } from 'glamor';

const Demo = (
  <DemoForm>
    <Checkbox label="Regular" />
    <Checkbox label="Hover" {...simulate('hover')} />
    <Checkbox label="Focus" {...simulate('focus')} />
    <Checkbox label="Focus & Hover" {...simulate('focus', 'hover')} />
    <Checkbox label="Focus & Active" {...simulate('focus', 'active')} />
    <Checkbox label="Active" {...simulate('active')} />
    <Checkbox disabled label="Disabled" />

    <Checkbox label="Regular (checked)" defaultChecked />
    <Checkbox label="Hover (checked)" defaultChecked {...simulate('hover')} />
    <Checkbox label="Focus (checked)" defaultChecked {...simulate('focus')} />
    <Checkbox
      label="Focus & Hover (checked)"
      defaultChecked
      {...simulate('focus', 'hover')}
    />
    <Checkbox
      label="Focus & Active (checked)"
      defaultChecked
      {...simulate('focus', 'active')}
    />
    <Checkbox label="Active (checked)" defaultChecked {...simulate('active')} />
    <Checkbox disabled label="Disabled (checked)" defaultChecked />

    <Checkbox label="Regular (indeterminate)" defaultChecked indeterminate />
    <Checkbox
      label="Hover (indeterminate)"
      defaultChecked
      indeterminate
      {...simulate('hover')}
    />
    <Checkbox
      label="Focus (indeterminate)"
      defaultChecked
      indeterminate
      {...simulate('focus')}
    />
    <Checkbox
      label="Focus & Hover (indeterminate)"
      defaultChecked
      indeterminate
      {...simulate('focus', 'hover')}
    />
    <Checkbox
      label="Focus & Active (indeterminate)"
      defaultChecked
      indeterminate
      {...simulate('focus', 'active')}
    />
    <Checkbox
      label="Active (indeterminate)"
      defaultChecked
      indeterminate
      {...simulate('active')}
    />
    <Checkbox
      disabled
      label="Disabled (indeterminate)"
      defaultChecked
      indeterminate
    />
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
