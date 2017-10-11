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

export default function IconWarning(props: Props) {
  const iconProps = {
    rtl: false,
    ...props
  };

  return (
    <Icon {...iconProps}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0" />
        <path
          d="M13.414 2.718l7.868 7.868c.78.78.78 2.047 0 2.828l-7.868 7.868c-.78.78-2.047.78-2.828 0l-7.868-7.868c-.78-.78-.78-2.047 0-2.828l7.868-7.868c.78-.78 2.047-.78 2.828 0zM12 17c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1zm1-3.958V8h-2v5.042h2z"
          fill="currentColor"
          fillRule="nonzero"
        />
      </g>
    </Icon>
  );
}
