/* @flow */
import { BrowserRouter, Link as ReactRouterLink } from 'react-router-dom';
import Link from '../../../../../library/Link';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'other',
  title: 'Other Components',
  description: `Any component that generate an \`<a />\` element may be styled
using the \`element\` prop, such as a
[ReactRouter Link](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/Link.md).`,
  scope: { BrowserRouter, DemoLayout, Link, ReactRouterLink },
  source: `
    <DemoLayout>
      <BrowserRouter>
        <Link element={ReactRouterLink} to="/components/link">ReactRouter Link</Link>
      </BrowserRouter>
    </DemoLayout>
  `
};
