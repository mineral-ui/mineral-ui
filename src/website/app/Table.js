/* @flow */
import styled from '@emotion/styled';
import rgba from 'polished/lib/color/rgba';
import { ignoreSsrWarning } from '../../library/utils/emotion';
import siteColors from './siteColors';
import type { StyledComponent } from '@emotion/styled-base/src/utils';

const styles = {
  cell: ({ theme }) => ({
    padding: `${theme.space_inset_md} ${theme.space_inset_sm}`,

    ['&:first-child' + ignoreSsrWarning]: {
      paddingLeft: 0
    },

    '&:last-child': {
      paddingRight: 0
    }
  }),
  headerCell: ({ theme, width }) => ({
    borderBottom: `3px solid ${rgba(theme.borderColor, 0.3)}`,
    color: siteColors.slateDarker,
    fontWeight: theme.fontWeight_bold,
    padding: `0 ${theme.space_inset_sm} ${theme.space_inset_sm}`,
    textAlign: 'left',
    width: width && width,

    ['&:first-child' + ignoreSsrWarning]: {
      paddingLeft: 0
    },

    '&:last-child': {
      paddingRight: 0
    }
  }),
  row: ({ theme }) => ({
    borderBottom: `1px solid ${rgba(theme.borderColor, 0.3)}`
  }),
  table: ({ theme }) => ({
    borderCollapse: 'collapse',
    borderSpacing: 0,
    fontSize: theme.fontSize_ui,
    width: '100%'
  })
};

export const Table: StyledComponent<{ [key: string]: any }> = styled('table')(
  styles.table
);
export const TableCell: StyledComponent<{ [key: string]: any }> = styled('td')(
  styles.cell
);
export const TableHeaderCell: StyledComponent<{ [key: string]: any }> = styled(
  'th'
)(styles.headerCell);
export const TableRow: StyledComponent<{ [key: string]: any }> = styled('tr')(
  styles.row
);
