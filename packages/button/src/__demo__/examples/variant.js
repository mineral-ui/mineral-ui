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
import DangerButton from '../../DangerButton';
import SuccessButton from '../../SuccessButton';
import WarningButton from '../../WarningButton';

function Variant() {
  return (
    <div>
      <Button onClick={() => {}}>Default</Button>{' '}
      <DangerButton onClick={() => {}}>Danger</DangerButton>{' '}
      <SuccessButton onClick={() => {}}>Success</SuccessButton>{' '}
      <WarningButton onClick={() => {}}>Warning</WarningButton>{' '}
      <br /><br />
      <Button minimal onClick={() => {}}>Default</Button>{' '}
      <DangerButton minimal onClick={() => {}}>Danger</DangerButton>{' '}
      <SuccessButton minimal onClick={() => {}}>Success</SuccessButton>{' '}
      <WarningButton minimal onClick={() => {}}>Warning</WarningButton>{' '}
      <br /><br />
      <Button primary onClick={() => {}}>Default</Button>{' '}
      <DangerButton primary onClick={() => {}}>Danger</DangerButton>{' '}
      <SuccessButton primary onClick={() => {}}>Success</SuccessButton>{' '}
      <WarningButton primary onClick={() => {}}>Warning</WarningButton>{' '}
    </div>
  );
}

export default {
  title: 'Variant',
  component: Variant,
  source: `<Button onClick={() => {}}>Submit</Button>`
};
