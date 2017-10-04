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
import Callout from '../../Callout';
import Heading from '../../Heading';
import PropTable from '../../PropTable';
import Section from '../../Section';

type Props = {
  propDoc?: Object,
  title: string
};

// prettier-ignore
const styles = {
  propsComment: {
    fontStyle: 'italic'
  },
  title: ({ theme }) => ({
    margin: `${parseFloat(theme.space_stack_sm) * 8}em 0 ${theme.space_stack_xl}`
  })
};

const PropsComment = createStyledComponent('p', styles.propsComment);
const Title = createStyledComponent(Heading, styles.title);

export default function DocProps({ propDoc, title }: Props) {
  return (
    <Section>
      <Heading level={2} id="api-and-theme">
        API & Theme
      </Heading>
      <Title level={3} id="props">{`${title} Props`}</Title>
      {propDoc ? (
        <div>
          <PropTable propDoc={propDoc} />
          <PropsComment>
            Undocumented properties will be applied to the root element.
          </PropsComment>
        </div>
      ) : (
        <Callout title="Note">
          {`${title} does not have properties of its own. Undocumented properties will be applied to the root element.`}
        </Callout>
      )}
    </Section>
  );
}
