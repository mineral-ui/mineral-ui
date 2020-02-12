/* @flow */
import styled from '@emotion/styled';
import React from 'react';
import _Link from '../../../../../../library/Link';
import { componentStyleReset } from '../../../../../../library/styles';
import _DemoLayout from '../../../common/DemoLayout';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const Root: StyledComponent<{ [key: string]: any }> = styled(_DemoLayout)(
  ({ theme }) => componentStyleReset(theme)
);

const DemoLayout = (props: Object) => <Root marginRight="1em" {...props} />;

const Link = (props: {}) => <_Link target="_blank" {...props} />;

export default {
  id: 'variants',
  title: 'Variants',
  description: 'Style Links with these variants to help communicate purpose.',
  scope: { DemoLayout, Link },
  source: `
    <DemoLayout>
      <Link href="http://example.com">Default</Link>
      <Link variant="danger" href="http://example.com">Danger</Link>
      <Link variant="success" href="http://example.com">Success</Link>
      <Link variant="warning" href="http://example.com">Warning</Link>
    </DemoLayout>`
};
