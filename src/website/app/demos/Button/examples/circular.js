/* @flow */
import IconCloud from 'mineral-ui-icons/IconCloud';
import Button from '../../../../../library/Button';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'circular',
  title: 'Circular Buttons',
  description:
    'Buttons can be made circular. Such Buttons should not have any text.',
  scope: { Button, IconCloud, DemoLayout },
  source: `
    () => {
      const icon = <IconCloud />;

      return (
        <DemoLayout>
          <Button iconStart={icon} circular aria-label="Cloud" />
          {/* primary */}
          <Button iconStart={icon} circular primary aria-label="Cloud" />
          {/* minimal */}
          <Button iconStart={icon} circular minimal aria-label="Cloud" />
          {/* small */}
          <Button iconStart={icon} circular size="small" aria-label="Cloud" />
          {/* large */}
          <Button iconStart={icon} circular size="medium" aria-label="Cloud" />
          {/* jumbo */}
          <Button iconStart={icon} circular size="jumbo" aria-label="Cloud" />
        </DemoLayout>
      );
    }`
};
