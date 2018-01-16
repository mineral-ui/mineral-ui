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
import DemoForm from '../../components/DemoForm';
import Checkbox from '../../../../../../Checkbox';
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
