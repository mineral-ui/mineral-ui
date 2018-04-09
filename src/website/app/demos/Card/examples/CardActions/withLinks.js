/* @flow */
import React from 'react';
import { mineralTheme } from '../../../../../../library/themes';
import _Link from '../../../../../../library/Link';
import Card, { CardBlock, CardActions } from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

const Link = (props: {}) => <_Link target="_blank" {...props} />;

export default {
  id: 'with-links',
  title: 'With Links',
  backgroundColor: mineralTheme.color_gray_10,
  description: `Place [Links](/components/links) in CardActions when your Card needs to
point the users to another location.`,
  scope: { Link, Card, CardActions, CardBlock, loremIpsum, DemoLayout },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardActions>
          <Link href="https://example.com">Link 1</Link>
          <Link href="https://example.com">Link 2</Link>
        </CardActions>
      </Card>
    </DemoLayout>`
};
