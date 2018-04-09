/* @flow */
import { mineralTheme } from '../../../../../../library/themes';
import Card, {
  CardBlock,
  CardTitle,
  CardTitleMenu
} from '../../../../../../library/Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'actions-menu',
  title: 'With an Actions Menu',
  backgroundColor: mineralTheme.color_gray_10,
  description: `To display a menu of actions in CardTitle, pass a CardTitleMenu
or [Dropdown](/components/dropdown) to the \`actions\` prop.

<Callout title="Note">
  <p key={0}>
    To help with styling and using the correct <a href="/components/icon" key="0">Icon</a>,
    Card provides a CardTitleMenu component, as used in the example below. In
    addition to accepting <a href="/components/dropdown#props" key="1">any prop accepted by Dropdown</a>,
    it also accepts <code key="2">triggerTitle</code>, which is used for the
    Icon's title. You can import it like so:
  </p>
</Callout>

\`\`\`
import { CardTitleMenu } from 'mineral-ui/Card';
\`\`\``,
  scope: {
    Card,
    CardBlock,
    CardTitle,
    CardTitleMenu,
    loremIpsum,
    DemoLayout
  },
  source: `
    () => {
      const menuData = [
        {
          items: [
            { onClick: () => { console.log('Clicked 1') }, text: 'MenuItem 1' },
            { onClick: () => { console.log('Clicked 2') }, text: 'MenuItem 2' },
            { divider: true },
            { onClick: () => { console.log('Clicked 3') }, text: 'MenuItem 3' }
          ]
        }
      ];

      return (
        <DemoLayout>
          <Card>
            <CardTitle actions={<CardTitleMenu data={menuData} />}>Card Title</CardTitle>
            <CardBlock>{loremIpsum}</CardBlock>
          </Card>
        </DemoLayout>
      );
    }`
};
