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

function Disabled() {
  return (
    <div>
      <Button disabled onClick={() => {}}>Default</Button>{' '}
      <DangerButton disabled onClick={() => {}}>Danger</DangerButton>{' '}
      <SuccessButton disabled onClick={() => {}}>Success</SuccessButton>{' '}
      <WarningButton disabled onClick={() => {}}>Warning</WarningButton>{' '}
      <br /><br />
      <Button minimal disabled onClick={() => {}}>Default</Button>{' '}
      <DangerButton minimal disabled onClick={() => {}}>Danger</DangerButton>{' '}
      <SuccessButton minimal disabled onClick={() => {}}>
        Success
      </SuccessButton>{' '}
      <WarningButton minimal disabled onClick={() => {}}>
        Warning
      </WarningButton>{' '}
      <br /><br />
      <Button primary disabled onClick={() => {}}>Default</Button>{' '}
      <DangerButton primary disabled onClick={() => {}}>Danger</DangerButton>{' '}
      <SuccessButton primary disabled onClick={() => {}}>
        Success
      </SuccessButton>{' '}
      <WarningButton primary disabled onClick={() => {}}>
        Warning
      </WarningButton>{' '}
    </div>
  );
}

export default {
  title: 'Disabled',
  component: Disabled,
  source: `<Button onClick={() => {}} disabled>Submit</Button>`
};
