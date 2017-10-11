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
import Icon from '../Icon';

type Props = {
  size?: string | 'small' | 'medium' | 'large',
  color?: string,
  rtl?: boolean,
  title?: string
};

export default function IconDanger(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0" />
        <path
          d="M3.94 19.49h16.118c.552 0 1-.447 1-1 0-.174-.046-.347-.134-.498l-8.06-13.99c-.274-.48-.886-.644-1.364-.368-.153.088-.28.214-.368.367L3.074 17.993c-.276.478-.112 1.09.367 1.365.153.088.325.134.5.134zM12 17c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm1-3.503h-2v-5h2v5z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </Icon>
  );
}
