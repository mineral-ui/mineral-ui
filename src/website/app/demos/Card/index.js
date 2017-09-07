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
import { componentTheme as cardComponentTheme } from '../../../../Card/Card';
import { componentTheme as cardBlockComponentTheme } from '../../../../Card/CardBlock';
import { componentTheme as cardTitleComponentTheme } from '../../../../Card/CardTitle';
import cardExamples from './examples/card';
import cardBlockExamples from './examples/card-block';
import cardImageExamples from './examples/card-image';
import cardTitleExamples from './examples/card-title';

const cardDoc = require('!!react-docgen-loader!../../../../Card/Card');
const cardBlockDoc = require('!!react-docgen-loader!../../../../Card/CardBlock');
const cardImageDoc = require('!!react-docgen-loader!../../../../Card/CardImage');
const cardTitleDoc = require('!!react-docgen-loader!../../../../Card/CardTitle');

export default [
  {
    componentTheme: cardComponentTheme,
    doc: cardDoc,
    examples: cardExamples,
    slug: 'card',
    title: 'Card'
  },
  {
    componentTheme: cardBlockComponentTheme,
    doc: cardBlockDoc,
    examples: cardBlockExamples,
    slug: 'card-block',
    subcomponent: true,
    title: 'CardBlock'
  },
  {
    doc: cardImageDoc,
    examples: cardImageExamples,
    slug: 'card-image',
    subcomponent: true,
    title: 'CardImage'
  },
  {
    componentTheme: cardTitleComponentTheme,
    doc: cardTitleDoc,
    examples: cardTitleExamples,
    slug: 'card-title',
    subcomponent: true,
    title: 'CardTitle'
  }
];
