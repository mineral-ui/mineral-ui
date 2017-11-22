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
import IconRefresh from 'mineral-ui-icons/IconRefresh';
import IconLocalPlay from 'mineral-ui-icons/IconLocalPlay';
import IconLocalOffer from 'mineral-ui-icons/IconLocalOffer';
import IconLocalLaundryService from 'mineral-ui-icons/IconLocalLaundryService';
import IconStoreMallDirectory from 'mineral-ui-icons/IconStoreMallDirectory';
import IconStreetview from 'mineral-ui-icons/IconStreetview';

export default [
  {
    type: 'do',
    description:
      'Use Icons with labels. Icons are used to reinforce a message.',
    example: (
      <Button iconStart={<IconRefresh />} primary>
        Refresh
      </Button>
    )
  },
  {
    type: 'dont',
    description: `Don't present an Icon without a label unless it is very simple
and well-known.`,
    example: <Button primary iconStart={<IconLocalPlay />} />
  },
  {
    type: 'dont',
    description: `Don't use Icons as decoration. In large lists of Buttons,
avoid using Icons on all elements, as they become visual noise.`,
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
    )
  }
];
