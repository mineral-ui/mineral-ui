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
import React, { Component } from 'react';
import { pxToEm } from '../../../../../styles';
import ScrollParent from '../../Popover/components/ScrollBox';
import _Select from '../../../../../Select';
import { basicData as data } from '../components/selectData';

type Props = any;

// Not a functional component because ScrollParent throws a ref on it
class Select extends Component<Props> {
  render() {
    return (
      <div style={{ width: pxToEm(224) }}>
        <_Select {...this.props} />
      </div>
    );
  }
}

export default {
  id: 'scrolling-container',
  title: 'Scrolling Container',
  description: `Select will attempt to stay visible in an \`overflow: scroll\` container.`,
  scope: { data, ScrollParent, Select },
  source: `
    <ScrollParent>
      <Select data={data} isOpen />
    </ScrollParent>
  `
};
