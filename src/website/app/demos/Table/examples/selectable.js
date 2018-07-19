/* @flow */
import Table from '../../../../../library/Table';
import sharedData from '../shared/data';

export default {
  id: 'selectable',
  title: 'Selectable Rows',
  description: `Allow users to select rows with the \`selectable\` prop.
Rows with a \`disabled\` property set to \`true\` will render a disabled
checkbox. You can set the initially selected rows with the
\`defaultSelectedRows\` prop. \`onToggleRow\` and \`onToggleAllRows\`
callbacks are also available.`,
  scope: { Table, sharedData },
  source: `
    () => {
      const data = [
        sharedData[0],
        sharedData[1],
        { ...sharedData[2], disabled: true }
      ];

      return (
        <Table
          selectable
          defaultSelectedRows={[data[1]]}
          data={data}
          rowKey="Fruits"
          title="Foods of the World"
          hideTitle />
      );
    }`
};
