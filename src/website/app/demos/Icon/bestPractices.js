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
