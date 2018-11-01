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
    description: `Use PrimaryNav in conjunction with
[SecondaryNav](/components/secondary-nav) for applications that have two or more
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
    description: `PrimaryNav items should be immediately recognizable. Use short
words or phrases for text labels, which consistently start with nouns or verbs.
Include icons if they assist the user in quick recognition of the functionality.`,
    example: (
      <PrimaryNav
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
      <PrimaryNav
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
      <PrimaryNav
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
    description: `Don't use PrimaryNav when there is only one [NavItem](/components/nav-item).`,
    example: (
      <PrimaryNav
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
