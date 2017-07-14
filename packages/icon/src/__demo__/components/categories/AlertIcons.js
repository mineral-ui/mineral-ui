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
import Figure from '../../components/Figure';
import FigCaption from '../../components/FigCaption';
import FigContainer from '../../components/FigContainer';
import CategoryHeader from '../../components/CategoryHeader';

import IconAddAlert from '../../../lib/IconAddAlert';
import IconError from '../../../lib/IconError';
import IconErrorOutline from '../../../lib/IconErrorOutline';
import IconWarning from '../../../lib/IconWarning';

export default function AlertIcons() {
  return (
    <div>
      <CategoryHeader>alert</CategoryHeader>
      <FigContainer>
        <Figure tabIndex={0}>
          <IconAddAlert />
          <FigCaption>
            IconAddAlert
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconError />
          <FigCaption>
            IconError
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconErrorOutline />
          <FigCaption>
            IconErrorOutline
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconWarning />
          <FigCaption>
            IconWarning
          </FigCaption>
        </Figure>
      </FigContainer>
    </div>
  );
}
