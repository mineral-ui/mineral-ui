/* @flow */
import React from 'react';
import { createStyledComponent } from '../../library/styles';
import IconInfo from 'mineral-ui-icons/IconInfo';
import Button from '../../library/Button';
import Popover from '../../library/Popover';
import Markdown from './Markdown';
import { Table, TableCell, TableHeaderCell, TableRow } from './Table';

type Props = {
  propDoc: Object
};

type PropTableRowProps = {
  defaultValue?: any,
  description?: string,
  name: string,
  type: any,
  required?: boolean
};

const styles = {
  codeValue: ({ theme }) => ({
    fontFamily: theme.fontFamily_monospace
  }),
  propName: ({ theme }) => ({
    fontWeight: theme.fontWeight_semiBold
  }),
  propP: {
    '& p': {
      margin: 0
    }
  },
  propRequired: ({ theme }) => ({
    backgroundColor: theme.backgroundColor_dangerPrimary,
    borderRadius: theme.borderRadius_1,
    color: theme.color_white,
    display: 'inline-block',
    fontFamily: theme.fontFamily_monospace,
    padding: `${parseFloat(theme.space_inset_sm) / 2}em ${theme.space_inset_sm}`
  }),
  propType: ({ theme }) => ({
    color: theme.color_theme_90,
    fontFamily: theme.fontFamily_monospace
  }),
  propTypeButton: ({ theme }) => ({
    fontFamily: 'inherit',
    height: 'auto',
    padding: 0,

    '& > span > span': {
      lineHeight: theme.lineHeight,
      paddingLeft: theme.direction === 'ltr' ? 0 : null,
      paddingRight: theme.direction === 'rtl' ? 0 : null
    }
  }),
  propTypePopoverContent: ({ theme }) => ({
    fontFamily: theme.fontFamily_monospace,
    fontSize: theme.fontSize_ui,
    maxWidth: '80vw',
    overflowX: 'auto',
    whiteSpace: 'pre'
  }),
  propValue: ({ theme }) => ({
    border: `1px solid ${theme.borderColor}`,
    height: '100%',
    resize: 'vertical',
    width: '100%'
  }),
  root: ({ theme }) => ({
    margin: `${theme.space_stack_xl} 0 0`,
    overflowX: 'auto'
  })
};

const Root = createStyledComponent('div', styles.root);
const CodeValue = createStyledComponent('span', styles.codeValue);
const PropName = createStyledComponent('span', styles.propName);
const PropP = createStyledComponent(Markdown, styles.propP);
const PropRequired = createStyledComponent('span', styles.propRequired);
const PropType = createStyledComponent('span', styles.propType);
const PropTypeButton = createStyledComponent(Button, styles.propTypeButton);
const PropTypePopoverContent = createStyledComponent(
  'div',
  styles.propTypePopoverContent
);

const PropTypePopover = ({ content, trigger }: Object) => (
  <Popover content={<PropTypePopoverContent>{content}</PropTypePopoverContent>}>
    <PropTypeButton iconEnd={<IconInfo />} minimal size="medium">
      {trigger}
    </PropTypeButton>
  </Popover>
);

function DefaultValue({
  defaultValue,
  required
}: {
  defaultValue?: any,
  required?: boolean
}) {
  return required ? (
    <PropRequired>required</PropRequired>
  ) : (
    <CodeValue>{defaultValue}</CodeValue>
  );
}

function getDefaultValue(propDescription: Object): any {
  let { defaultValue: { value } = {} } = propDescription;

  if (value === undefined) {
    return;
  }

  const { flowType } = propDescription;
  let { name, type } = flowType;
  let usePopover = ['Array', 'signature'].includes(name) && value.length > 25;

  if (name === 'Array') {
    type = 'Array';
  } else if (name === 'signature' && type === 'function') {
    type = 'Function';
  } else if (name === 'signature' && type === 'object') {
    type = 'Object';
  }

  return usePopover ? (
    <PropTypePopover trigger={type} content={value} />
  ) : (
    value
  );
}

function getFlowType(propDescription: Object): any {
  const { flowType } = propDescription;
  let { name, raw, type } = flowType;
  let usePopover = raw && raw.length > 25;

  if (name === 'Array') {
    type = 'Array';
  } else if (name === 'signature' && type === 'function') {
    type = 'Function';
  } else if (name === 'signature' && type === 'object') {
    type = 'Object';
  } else if (name === 'union') {
    type = 'Union';
    usePopover = flowType.elements.length > 4 || raw.startsWith('|');
    raw = raw.startsWith('|')
      ? raw
          .split('\n| ')
          .join(',\n')
          .replace('| ', '')
      : raw.split(' | ').join(',\n');
  } else if (name === 'undefined') {
    return 'unknown';
  } else {
    raw = name;
  }

  return usePopover ? <PropTypePopover trigger={type} content={raw} /> : raw;
}

function getPropTableRows(propDoc) {
  return Object.keys(propDoc)
    .sort()
    .map((name) => {
      const propDescription = propDoc[name];

      // Filter out private props
      if (propDescription.description.startsWith('@Private')) {
        return null;
      }

      return (
        <PropTableRow
          key={name}
          defaultValue={getDefaultValue(propDescription)}
          description={propDescription.description}
          name={name}
          required={propDescription.required}
          type={getFlowType(propDescription)}
        />
      );
    });
}

function PropTableRow({
  defaultValue,
  description,
  name,
  required,
  type
}: PropTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <PropName>{name}</PropName>
      </TableCell>
      <TableCell>
        <PropType>{type}</PropType>
      </TableCell>
      <TableCell>
        <DefaultValue defaultValue={defaultValue} required={required} />
      </TableCell>
      <TableCell>
        <PropP>{description}</PropP>
      </TableCell>
    </TableRow>
  );
}

const PropTable = (props: Props) => {
  const { propDoc } = props;
  return (
    <Root>
      <Table>
        <thead>
          <tr>
            <TableHeaderCell key="prop" width="10rem">
              Name
            </TableHeaderCell>
            <TableHeaderCell key="type" width="15rem">
              Type
            </TableHeaderCell>
            <TableHeaderCell key="default" width="10rem">
              Default
            </TableHeaderCell>
            <TableHeaderCell key="description">Description</TableHeaderCell>
          </tr>
        </thead>
        <tbody>{getPropTableRows(propDoc)}</tbody>
      </Table>
    </Root>
  );
};

PropTable.defaultProps = {
  propDoc: {}
};

export default PropTable;
