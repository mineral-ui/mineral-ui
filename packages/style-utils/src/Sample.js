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
import { createStyledComponent } from './index';

const Root = createStyledComponent('span', (props, theme) => ({
  backgroundColor: theme.Sample_backgroundColor || 'lavender',
  color: theme.Sample_color || theme.color_primary,
  display: 'inline-block',
  outline: `1px solid ${theme.color_border}`,
  padding: theme.spacing_single
}));

type Props = {|
  className?: string,
  text?: string
|};

export default function Sample({ className, text = 'Sample' }: Props) {
  return <Root className={className}>{text}</Root>;
}
