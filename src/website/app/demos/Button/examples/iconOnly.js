/* @flow */
import IconCloud from 'mineral-ui-icons/IconCloud';
import Button from '../../../../../library/Button';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'icon-only',
  title: 'Icon-Only Buttons',
  description: `Buttons that contain only [Icons](/components/icon) can use either \`iconStart\` or \`iconEnd\` props and must have an \`aria-label\` provided.

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
