/* @flow */
import Table from '../../../../../library/Table';
import data from '../shared/data';

export default {
  id: 'alignment',
  title: 'Alignment',
  hideFromProd: true,
  hideSource: true,
  scope: { Table, data },
  source: `
    () => {
      const columns = [
        { content: 'Fruits', key: 'Fruits' },
        { content: 'Vegetables Are Good For You And You Should Eat Lots Of Them', key: 'Vegetables', textAlign: 'end' },
        { content: 'Grains Make For Hearty Filler', key: 'Grains', textAlign: 'center' },
        { content: 'Dairy', key: 'Dairy',  textAlign: 'justify' }
      ];

      const wrappingData = [
        data[0],
        {
          Fruits: 'Starfruit is a fruit in which I wish to partake',
          Vegetables: 'Romanesco',
          Grains: 'Sorghum',
          Dairy: 'Casu marzu is cheeeeeeeeeeeeeeeeeese',
          Protein: 'Barnacles'
        },
        data[2],
        data[3]
      ];

      return (
        <Table
          columns={columns}
          data={wrappingData}
          sortable
          defaultSort={{ key: 'Vegetables' }}
          title="Foods of the World"
          hideTitle />
      );
    }`
};
