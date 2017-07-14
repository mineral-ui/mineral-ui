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

import IconAttachment from '../../../lib/IconAttachment';
import IconCloud from '../../../lib/IconCloud';
import IconCloudCircle from '../../../lib/IconCloudCircle';
import IconCloudDone from '../../../lib/IconCloudDone';
import IconCloudDownload from '../../../lib/IconCloudDownload';
import IconCloudOff from '../../../lib/IconCloudOff';
import IconCloudQueue from '../../../lib/IconCloudQueue';
import IconCloudUpload from '../../../lib/IconCloudUpload';
import IconCreateNewFolder from '../../../lib/IconCreateNewFolder';
import IconFileDownload from '../../../lib/IconFileDownload';
import IconFileUpload from '../../../lib/IconFileUpload';
import IconFolder from '../../../lib/IconFolder';
import IconFolderOpen from '../../../lib/IconFolderOpen';
import IconFolderShared from '../../../lib/IconFolderShared';

export default function FileIcons() {
  return (
    <div>
      <CategoryHeader>file</CategoryHeader>
      <FigContainer>
        <Figure tabIndex={0}>
          <IconAttachment />
          <FigCaption>
            IconAttachment
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCloud />
          <FigCaption>
            IconCloud
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCloudCircle />
          <FigCaption>
            IconCloudCircle
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCloudDone />
          <FigCaption>
            IconCloudDone
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCloudDownload />
          <FigCaption>
            IconCloudDownload
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCloudOff />
          <FigCaption>
            IconCloudOff
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCloudQueue />
          <FigCaption>
            IconCloudQueue
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCloudUpload />
          <FigCaption>
            IconCloudUpload
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconCreateNewFolder />
          <FigCaption>
            IconCreateNewFolder
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFileDownload />
          <FigCaption>
            IconFileDownload
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFileUpload />
          <FigCaption>
            IconFileUpload
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFolder />
          <FigCaption>
            IconFolder
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFolderOpen />
          <FigCaption>
            IconFolderOpen
          </FigCaption>
        </Figure>
        <Figure tabIndex={0}>
          <IconFolderShared />
          <FigCaption>
            IconFolderShared
          </FigCaption>
        </Figure>
      </FigContainer>
    </div>
  );
}
