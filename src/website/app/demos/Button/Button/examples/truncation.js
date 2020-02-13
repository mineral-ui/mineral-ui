/* @flow */
import styled from '@emotion/styled';
import IconCloud from 'mineral-ui-icons/IconCloud';
import Button from '../../../../../../library/Button';
import _DemoLayout from '../../common/DemoLayout';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const FixedWidthLayout: StyledComponent<{ [key: string]: any }> = styled(
  _DemoLayout
)({
  '&[class][class] > *': {
    width: '10rem'
  }
});

export default {
  id: 'truncation',
  title: 'Truncation',
  description: 'Long button text is truncated when necessary.',
  scope: { Button, FixedWidthLayout, IconCloud },
  source: `
    () => {
      const  icon = <IconCloud />;

      return (
        <FixedWidthLayout>
          <Button>Supercalifragilisticexpialidocious</Button>
          <Button iconStart={icon}>Start icon truncation</Button>
          <Button iconEnd={icon}>End icon truncation</Button>
          <Button iconStart={icon} iconEnd={icon}>Both icons truncation</Button>
        </FixedWidthLayout>
      )
    }
  `
};
