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
import Button from '../../../../Button';
import IconRefresh from '../../../../Icon/IconRefresh';
import IconLocalPlay from '../../../../Icon/IconLocalPlay';
import IconLocalOffer from '../../../../Icon/IconLocalOffer';
import IconLocalLaundryService from '../../../../Icon/IconLocalLaundryService';
import IconStoreMallDirectory from '../../../../Icon/IconStoreMallDirectory';
import IconStreetview from '../../../../Icon/IconStreetview';

export default [
  {
    type: 'do',
    title: 'use Icons with labels',
    example: (
      <Button iconStart={<IconRefresh />} primary>
        Refresh
      </Button>
    ),
    description: 'Icons are used to reinforce a message.'
  },
  {
    type: 'dont',
    title: 'use Icons without context',
    example: <Button primary iconStart={<IconLocalPlay />} />,
    description:
      'Icons can be small and should not be presented without labels unless they are very simple and well-known.'
  },
  {
    type: 'dont',
    title: 'use Icons as decoration',
    example: (
      <div>
        <Button minimal iconStart={<IconLocalOffer />}>
          Local Offer
        </Button>
        <Button minimal iconStart={<IconLocalLaundryService />}>
          Laundry Service
        </Button>
        <Button minimal iconStart={<IconStoreMallDirectory />}>
          Store Directory
        </Button>
        <Button minimal iconStart={<IconStreetview />}>
          Street View
        </Button>
      </div>
    ),
    description:
      'In large lists of Buttons, avoid using Icons on all elements, as they become visual noise.'
  }
];
