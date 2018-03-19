/* @flow */
import TextInput from '../../../../../library/TextInput/';
import IconCloud from 'mineral-ui-icons/IconCloud';
import DemoLayout from '../components/DemoLayout';

export default {
  id: 'prefix-and-suffix',
  title: 'Prefix & Suffix',
  description: `TextInputs can have a prefix and/or suffix, most commonly used
for specifying units.`,
  scope: { DemoLayout, IconCloud, TextInput },
  source: `
  () => {
    const icon = <IconCloud />;

    return(
      <DemoLayout>
        <TextInput type="number" prefix="$" />
        <TextInput type="number" suffix="cm" />
      </DemoLayout>
    );
  }`
};
