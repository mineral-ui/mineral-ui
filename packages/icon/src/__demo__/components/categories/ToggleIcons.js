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

import IconCheckBox from '../../../lib/IconCheckBox';
import IconCheckBoxOutlineBlank from '../../../lib/IconCheckBoxOutlineBlank';
import IconIndeterminateCheckBox from '../../../lib/IconIndeterminateCheckBox';
import IconRadioButtonChecked from '../../../lib/IconRadioButtonChecked';
import IconRadioButtonUnchecked from '../../../lib/IconRadioButtonUnchecked';
import IconStar from '../../../lib/IconStar';
import IconStarBorder from '../../../lib/IconStarBorder';
import IconStarHalf from '../../../lib/IconStarHalf';

export default function ToggleIcons() {
  return (
    <div>
      <CategoryHeader>toggle</CategoryHeader>
      <FigContainer>
        <Figure tabIndex={0}>
          <IconCheckBox />
          <FigCaption>
            IconCheckBox
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCheckBoxOutlineBlank />
          <FigCaption>
            IconCheckBoxOutlineBlank
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconIndeterminateCheckBox />
          <FigCaption>
            IconIndeterminateCheckBox
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRadioButtonChecked />
          <FigCaption>
            IconRadioButtonChecked
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconRadioButtonUnchecked />
          <FigCaption>
            IconRadioButtonUnchecked
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconStar />
          <FigCaption>
            IconStar
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconStarBorder />
          <FigCaption>
            IconStarBorder
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconStarHalf />
          <FigCaption>
            IconStarHalf
          </FigCaption>
        </Figure>
      </FigContainer>
    </div>
  );
}
