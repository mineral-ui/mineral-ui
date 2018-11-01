/* @flow */
import React, { Fragment } from 'react';
import IconBlurOn from 'mineral-ui-icons/IconBlurOn';
import IconDashboard from 'mineral-ui-icons/IconDashboard';
import IconInsertDriveFile from 'mineral-ui-icons/IconInsertDriveFile';
import IconShowChart from 'mineral-ui-icons/IconShowChart';
import PrimaryNav from '../common/PrimaryNav';
import SecondaryNav from '../common/SecondaryNav';

import type { BestPractices } from '../../../pages/ComponentDoc/types';

const bestPractices: BestPractices = [
  {
    type: 'do',
    description: `Choose the correct type of SecondaryNav to represent the
content. Use the tabs type for document-based navigation, and the pills type for
page/view navigation.`,
    example: (
      <SecondaryNav
        items={[
          {
            href: '/2018-04',
            text: 'Apr 18 Report'
          },
          {
            href: '/2018-08',
            text: 'Aug 18 Report'
          }
        ]}
        type="tabs"
      />
    )
  },
  {
    type: 'do',
    description: `Use SecondaryNav in conjunction with
  [PrimaryNav](/components/primary-nav) for applications that have two or more
  levels of hierarchy.`,
    example: (
      <Fragment>
        <PrimaryNav
          items={[
            {
              href: '/base-metals',
              text: 'Base Metals'
            },
            {
              href: '/beryl',
              text: 'Beryl'
            },
            {
              href: '/aggregates',
              text: 'Aggregates'
            }
          ]}
          selectedIndex={0}
        />
        <SecondaryNav
          items={[
            {
              href: '/bauxite',
              text: 'Bauxite'
            },
            {
              href: '/cassiterite',
              text: 'Cassiterite'
            },
            {
              href: '/chromite',
              text: 'Chromite'
            },
            {
              href: '/cinnabar',
              text: 'Cinnabar'
            }
          ]}
          selectedIndex={2}
        />
      </Fragment>
    )
  },
  {
    type: 'do',
    description: `Choose SecondaryNav when there are few items in a section. If
you have many items, prioritize the navigation items so the most important items
are first, so they are less likely to [overflow](#overflow) into the menu.`,
    example: (
      <SecondaryNav
        items={[
          {
            href: '/rhodium',
            text: 'Rhodium'
          },
          {
            href: '/platinum',
            text: 'Platinum'
          },
          {
            href: '/gold',
            text: 'Gold'
          },
          {
            href: '/silver',
            text: 'Silver'
          },
          {
            href: '/copper',
            text: 'Copper'
          },
          {
            href: '/steel',
            text: 'Steel'
          }
        ]}
        overflowAtIndex={3}
      />
    )
  },
  {
    type: 'do',
    description: `SecondaryNav items should be immediately recognizable. Use
short words or phrases for text labels, which consistently start with nouns or
verbs. Include icons if they assist the user in quick recognition of the
functionality.`,
    example: (
      <SecondaryNav
        items={[
          {
            href: '/dashboard',
            icon: <IconDashboard />,
            text: 'Dashboard'
          },
          {
            href: '/reports',
            icon: <IconInsertDriveFile />,
            text: 'Reports'
          },
          {
            href: '/analytics',
            icon: <IconShowChart />,
            text: 'Analytics'
          }
        ]}
      />
    )
  },
  {
    type: 'dont',
    description: `Avoid long titles which would force truncation.`,
    example: (
      <SecondaryNav
        items={[
          {
            href: '/reports',
            text: 'Reports and Device Analytics'
          },
          {
            href: '/automation',
            text: 'Automation Configuration Engine'
          }
        ]}
      />
    )
  },
  {
    type: 'dont',
    description: `Don't mix content types for [NavItem](/components/nav-item) \`title\`s.
  Be consistent with icon usage; either all or no NavItems should contain an icon.`,
    example: (
      <SecondaryNav
        items={[
          {
            href: '/malachite',
            text: 'Malachite'
          },
          {
            href: '/fluorite',
            icon: <IconBlurOn />,
            text: 'Fluorite'
          },
          {
            href: '/magnetite',
            text: 'Magnetite'
          }
        ]}
      />
    )
  },
  {
    type: 'dont',
    description: `Don't use SecondaryNav when there is only one [NavItem](/components/nav-item).`,
    example: (
      <SecondaryNav
        items={[
          {
            href: '/malachite',
            text: 'Malachite'
          }
        ]}
      />
    )
  }
];

export default bestPractices;
