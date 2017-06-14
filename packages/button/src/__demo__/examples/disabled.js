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
import Button from '../../Button';

function Disabled() {
  return (
    <div>
      <Button variant="danger" disabled onClick={() => {}}>Danger</Button>{' '}
      <Button variant="minimal" disabled onClick={() => {}}>Minimal</Button>{' '}
      <Button variant="primary" disabled onClick={() => {}}>Primary</Button>{' '}
      <Button variant="regular" disabled onClick={() => {}}>Regular</Button>{' '}
      <Button variant="success" disabled onClick={() => {}}>Success</Button>{' '}
      <Button variant="warning" disabled onClick={() => {}}>Warning</Button>{' '}
    </div>
  );
}

export default {
  title: 'Disabled',
  component: Disabled,
  source: `<Button onClick={() => {}} disabled>Submit</Button>`
};
