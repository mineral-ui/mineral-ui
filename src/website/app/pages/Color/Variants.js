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
import { createStyledComponent } from '../../../../utils';
import Button from '../../../../Button';

const Root = createStyledComponent('div', ({ theme }) => ({
  '& > button': {
    marginRight: theme.space_inline_sm,
    marginBottom: theme.space_stack_sm
  }
}));

export default function Variants() {
  return (
    <Root>
      <Button variant="success" primary>
        Success
      </Button>
      <Button variant="warning" primary>
        Warning
      </Button>
      <Button variant="danger" primary>
        Danger
      </Button>
    </Root>
  );
}
