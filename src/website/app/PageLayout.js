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
import { createStyledComponent } from '../../components/Utils';
import Header from './Header';

type Props = {
  children: MnrlReactNode
};

const Content = createStyledComponent('section', ({ theme }) => ({
  lineHeight: theme.lineHeight_prose,
  minHeight: '100vh',
  overflow: 'hidden',
  padding: `${parseFloat(theme.spacing_quad) * 2}em`,
  width: '100%'
}));

export default function PageLayout({ children }: Props) {
  return (
    <div>
      <Header currentPath={location.pathname} />
      <Content>
        {children}
      </Content>
    </div>
  );
}
