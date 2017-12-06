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
import { createStyledComponent } from '../../../../styles';
import _Callout from '../../Callout';
import PropTable from '../../PropTable';
import Section from './DocSection';
import DocSectionTitle from './DocSectionTitle';

type Props = {
  propDoc?: Object,
  propsComment?: string | React$Element<*>,
  title: string
};

const Callout = createStyledComponent(_Callout, ({ theme }) => ({
  marginTop: theme.baseline_2
}));
const PropsComment = createStyledComponent('p', {
  fontStyle: 'italic'
});

export default function DocProps({ propDoc, propsComment, title }: Props) {
  return (
    <Section>
      <DocSectionTitle id="props">{`${title} Props`}</DocSectionTitle>
      {propDoc ? (
        <div>
          <PropTable propDoc={propDoc} />
          {propsComment ? (
            <Callout title="Note">{propsComment}</Callout>
          ) : (
            <PropsComment>
              Undocumented properties will be applied to the root element.
            </PropsComment>
          )}
        </div>
      ) : (
        <Callout title="Note">
          {`${title} does not have properties of its own. Undocumented properties will be applied to the root element.`}
        </Callout>
      )}
    </Section>
  );
}
