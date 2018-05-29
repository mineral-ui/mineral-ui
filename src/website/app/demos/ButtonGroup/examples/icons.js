/* @flow */
import IconFormatAlignCenter from 'mineral-ui-icons/IconFormatAlignCenter';
import IconFormatAlignLeft from 'mineral-ui-icons/IconFormatAlignLeft';
import IconFormatAlignRight from 'mineral-ui-icons/IconFormatAlignRight';
import IconFormatBold from 'mineral-ui-icons/IconFormatBold';
import IconFormatItalic from 'mineral-ui-icons/IconFormatItalic';
import IconFormatUnderlined from 'mineral-ui-icons/IconFormatUnderlined';
import IconSentimentSatisfied from 'mineral-ui-icons/IconSentimentSatisfied';
import IconSentimentNeutral from 'mineral-ui-icons/IconSentimentNeutral';
import IconSentimentDissatisfied from 'mineral-ui-icons/IconSentimentDissatisfied';
import Button from '../../../../../library/Button';
import ButtonGroup from '../../../../../library/ButtonGroup';
import DemoLayout from '../../shared/DemoLayout';

export default {
  id: 'icons',
  title: 'Icons',
  description: `Buttons within ButtonGroup can contain [Icons](/components/icon),
just as they do in [Button](/components/button#icons)`,
  scope: {
    Button,
    ButtonGroup,
    DemoLayout,
    IconFormatAlignCenter,
    IconFormatAlignLeft,
    IconFormatAlignRight,
    IconFormatBold,
    IconFormatItalic,
    IconFormatUnderlined,
    IconSentimentDissatisfied,
    IconSentimentNeutral,
    IconSentimentSatisfied
  },
  source: `
    <DemoLayout>
      <ButtonGroup aria-label="Align text" mode="radio">
        <Button defaultChecked iconStart={<IconFormatAlignLeft />}>Left</Button>
        <Button iconStart={<IconFormatAlignCenter />}>Center</Button>
        <Button iconStart={<IconFormatAlignRight />}>Right</Button>
      </ButtonGroup>

      <ButtonGroup aria-label="Format text" mode="checkbox">
        <Button iconEnd={<IconFormatBold />} aria-label="Bold" />
        <Button iconEnd={<IconFormatItalic />} aria-label="Italic" />
        <Button iconEnd={<IconFormatUnderlined />} aria-label="Underlined" />
      </ButtonGroup>

      <ButtonGroup aria-label="Sentiments" mode="radio">
        <Button
          variant="success"
          iconEnd={<IconSentimentSatisfied />}
          aria-label="Satisfied" />
        <Button
          variant="warning"
          iconEnd={<IconSentimentNeutral />}
          aria-label="Neutral" />
        <Button
          variant="danger"
          iconEnd={<IconSentimentDissatisfied />}
          aria-label="Unsatisfied" />
      </ButtonGroup>
    </DemoLayout>
  `
};
