/* @flow */
import Button from '../../../../../library/Button';
import DemoLayout from '../components/DemoLayout';
import { BrowserRouter, Link as RouterLink } from 'react-router-dom';
import Link from '../../../../../library/Link';

export default {
  id: 'element',
  title: 'Elements',
  hideFromProd: true,
  description: `Make sure this doesn't throw warnings in your console due to
innapropriate props being passed to 'a' tags.`,
  scope: { Button, BrowserRouter, DemoLayout, RouterLink, Link },
  source: `
    <DemoLayout>
      <Button element='a'>Anchor</Button>
      <Button element={Link} href='https://mineral-ui.com'>Mineral Link</Button>
      <BrowserRouter>
        <Button element={RouterLink} to='/'>React Router Link</Button>
      </BrowserRouter>
    </DemoLayout>`
};
