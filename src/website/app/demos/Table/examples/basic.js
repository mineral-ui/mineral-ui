/* @flow */
import Table from '../../../../../library/Table';

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Pass Table an array of row objects, where each property key
will be used as a column header. It's also recommended to pass a \`rowKey\`,
which is the row property key used to uniquely identify each row.`,
  scope: { Table },
  source: `
    () => {
      const data = [
        {
          Fruits: 'Pomello',
          Vegetables: 'Bok Choi',
          Grains: 'Chia',
          Dairy: 'Pule',
          Protein: 'Crickets'
        },
        {
          Fruits: 'Starfruit',
          Vegetables: 'Romanesco',
          Grains: 'Sorghum',
          Dairy: 'Casu marzu',
          Protein: 'Barnacles'
        },
        {
          Fruits: 'Durian',
          Vegetables: 'Ramps',
          Grains: 'Teff',
          Dairy: 'Vieux Lille',
          Protein: 'Inca nuts'
        },
        {
          Fruits: 'Persimmons',
          Vegetables: 'Fiddleheads',
          Grains: 'Quinoa',
          Dairy: 'Milbenkase',
          Protein: 'Spirulina'
        }
      ];

      return <Table
               data={data}
               rowKey="Fruits"
               title="Foods of the World"
               hideTitle />;
    }
    `
};
