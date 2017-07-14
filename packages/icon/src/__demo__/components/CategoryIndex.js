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

import ActionIcons from './categories/ActionIcons';
import AlertIcons from './categories/AlertIcons';
import AvIcons from './categories/AvIcons';
import CommunicationIcons from './categories/CommunicationIcons';
import ContentIcons from './categories/ContentIcons';
import DeviceIcons from './categories/DeviceIcons';
import EditorIcons from './categories/EditorIcons';
import FileIcons from './categories/FileIcons';
import HardwareIcons from './categories/HardwareIcons';
import ImageIcons from './categories/ImageIcons';
import MapsIcons from './categories/MapsIcons';
import NavigationIcons from './categories/NavigationIcons';
import NotificationIcons from './categories/NotificationIcons';
import PlacesIcons from './categories/PlacesIcons';
import SocialIcons from './categories/SocialIcons';
import ToggleIcons from './categories/ToggleIcons';

export default function CategoryIndex() {
  return (
    <div>
      <ActionIcons />
      <AlertIcons />
      <AvIcons />
      <CommunicationIcons />
      <ContentIcons />
      <DeviceIcons />
      <EditorIcons />
      <FileIcons />
      <HardwareIcons />
      <ImageIcons />
      <MapsIcons />
      <NavigationIcons />
      <NotificationIcons />
      <PlacesIcons />
      <SocialIcons />
      <ToggleIcons />
    </div>
  );
}
