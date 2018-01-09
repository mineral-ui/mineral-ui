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
import Radio from '../../../../../../Radio';
import { simulate } from 'glamor';

const Demo = (
  <DemoForm>
    <Radio label="Regular" />
    <Radio label="Hover" {...simulate('hover')} />
    <Radio label="Focus & Hover" {...simulate('focus', 'hover')} />
    <Radio label="Focus & Active" {...simulate('focus', 'active')} />
    <Radio label="Active" {...simulate('active')} />
    <Radio disabled label="Disabled" />

    <Radio label="Regular (checked)" defaultChecked />
    <Radio label="Hover (checked)" defaultChecked {...simulate('hover')} />
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
