/* @flow */
import TextInput from '../../../../../library/TextInput/';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'icons',
  title: 'With Icons',
  description: `TextInputs can contain [Icons](/components/icon) at their start, end, or both.`,
  scope: { DemoLayout, IconCloud, TextInput },
  source: `
  () => {
    const icon = <IconCloud />;

    return(
      <DemoLayout>
        <TextInput iconStart={icon} />
        <TextInput iconEnd={icon} />
        <TextInput iconStart={icon} iconEnd={icon} />
      </DemoLayout>
    );
  }`
};
