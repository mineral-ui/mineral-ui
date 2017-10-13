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
import Button from '../../../../../Button';
import IconCloud from '../../../../../Icon/IconCloud';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'icon-only',
  title: 'Icon-Only Buttons',
  description: `Buttons that contain only [Icons](../icon) can use either \`iconStart\` or \`iconEnd\` props and must have an \`aria-label\` provided.

Use icon-only Buttons sparingly. The meaning of the Button can be diluted without a visual label.`,
  scope: { Button, IconCloud, DemoLayout },
  source: `
    () => {
      const icon = <IconCloud />;

      return (
        <DemoLayout>
          {/* Icon as prop; no text. aria-label applied to Button. */}
          <Button iconStart={icon} aria-label="Cloud" />
          {/* primary */}
          <Button iconStart={icon} primary aria-label="Cloud" />
          {/* minimal */}
          <Button iconStart={icon} minimal aria-label="Cloud" />
          {/* small */}
          <Button iconStart={icon} size="small" aria-label="Cloud" />
          {/* large */}
          <Button iconStart={icon} size="medium" aria-label="Cloud" />
          {/* jumbo */}
          <Button iconStart={icon} size="jumbo" aria-label="Cloud" />
        </DemoLayout>
      );
    }`
};
