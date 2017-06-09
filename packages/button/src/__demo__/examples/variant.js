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

function Variant() {
  return (
    <div>
      <Button onPress={() => {}}>Default</Button>{' '}
      <Button variant="danger" onPress={() => {}}>Danger</Button>{' '}
      <Button variant="minimal" onPress={() => {}}>Minimal</Button>{' '}
      <Button variant="primary" onPress={() => {}}>Primary</Button>{' '}
      <Button variant="regular" onPress={() => {}}>Regular</Button>{' '}
      <Button variant="success" onPress={() => {}}>Success</Button>{' '}
      <Button variant="warning" onPress={() => {}}>Warning</Button>{' '}
    </div>
  );
}

export default {
  title: 'Variant',
  component: Variant,
  source: `<Button>Submit</Button>`
};
