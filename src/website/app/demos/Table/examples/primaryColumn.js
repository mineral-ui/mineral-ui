/* @flow */
import Table from '../../../../../library/Table';

export default {
  id: 'primary-column',
  title: 'Primary Column',
  description: `It's recommended to identify a column as the primary column
(typically the first in the \`columns\` array) with the \`primary\` column
definition property. This will render cells in that column as
\`<th scope="row">\`, which can provide helpful context to users of some
assistive technologies.`,
  scope: { Table },
  source: `
    () => {
      const data = [
        {
          Fruit: 'Pomello',
          Etymology: 'big citrus',
          Family: 'Rutaceae',
          Color: 'lime',
          Taste: 'mild, sweet grapefruit'
        },
        {
          Fruit: 'Starfruit',
          Etymology: 'fruit of actions',
          Family: 'Oxalidaceae',
          Color: 'dark yellow',
          Taste: 'sweet or sour'
        },
        {
          Fruit: 'Durian',
          Etymology: 'thorn',
          Family: 'Malvaceae',
          Color: 'brown',
          Taste: 'unique'
        },
        {
          Fruit: 'Persimmon',
          Etymology: 'divine fruit',
          Family: 'Ebenaceae',
          Color: 'red-orange',
          Taste: 'sweet'
        }
      ];

      const columns = [
        { content: 'Fruit', key: 'Fruit', primary: true },
        { content: 'Family', key: 'Family' },
        { content: 'Etymology', key: 'Etymology' },
        { content: 'Color', key: 'Color' },
        { content: 'Taste', key: 'Taste' }
      ];

      return (
        <Table
          columns={columns}
          data={data}
          title="Fruits"
          hideTitle />
      );
    }`
};
