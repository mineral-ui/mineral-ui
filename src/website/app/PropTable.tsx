/* @flow */
import React, { Component } from 'react';
import styled from '@emotion/styled';
import IconInfo from 'mineral-ui-icons/IconInfo';
import Button from '../../library/Button';
import Popover from '../../library/Popover';
import Markdown from './Markdown';
import { Table, TableCell, TableHeaderCell, TableRow } from './Table';

import type {
  ComponentPropDocs,
  ComponentPropDoc
} from './pages/ComponentDoc/types';

type PropsTableProps = {
  propDocs: ComponentPropDocs
};

type DefaultValueProps = {
  defaultValue?: React$Node,
  required?: boolean
};

type PropTypePopoverProps = {
  children: React$Node,
  content: React$Node
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
    textTransform: 'capitalize',

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

const Root = styled('div')(styles.root);
const CodeValue = styled('span')(styles.codeValue);
const PropName = styled('span')(styles.propName);
const PropP = styled(Markdown)(styles.propP);
const PropRequired = styled('span')(styles.propRequired);
const PropType = styled('span')(styles.propType);
const PropTypeButton = styled(Button)(styles.propTypeButton);
const PropTypePopoverContent = styled('div')(styles.propTypePopoverContent);

const PropTypePopover = ({ content, children }: PropTypePopoverProps) => (
  <Popover content={<PropTypePopoverContent>{content}</PropTypePopoverContent>}>
    <PropTypeButton iconEnd={<IconInfo />} minimal size="medium">
      {children}
    </PropTypeButton>
  </Popover>
);

const DefaultValue = ({ defaultValue, required }: DefaultValueProps) => {
  return required ? (
    <PropRequired>required</PropRequired>
  ) : (
    <CodeValue>{defaultValue}</CodeValue>
  );
};

export default class PropTable extends Component<PropsTableProps> {
  static defaultProps = {
    propDocs: {}
  };

  render() {
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
          <tbody>{this.renderRows()}</tbody>
        </Table>
      </Root>
    );
  }

  renderRows = (): Array<React$Element<*>> => {
    const { propDocs } = this.props;

    return Object.keys(propDocs)
      .sort()
      .map((key) => {
        const propDoc = propDocs[key];

        return (
          <TableRow key={key}>
            <TableCell>
              <PropName>{key}</PropName>
            </TableCell>
            <TableCell>
              <PropType>{this.getType(propDoc)}</PropType>
            </TableCell>
            <TableCell>
              <DefaultValue
                defaultValue={this.getDefaultValue(propDoc)}
                required={propDoc.required}
              />
            </TableCell>
            <TableCell>
              <PropP>{propDoc.description}</PropP>
            </TableCell>
          </TableRow>
        );
      });
  };

  getDefaultValue = (propDoc: ComponentPropDoc): ?React$Node => {
    const { defaultValue, type } = propDoc;

    const name = typeof type === 'string' ? type : type.name;
    const value = defaultValue || '';

    const usePopover =
      (name === 'object' && value.length) ||
      (['array', 'function'].includes(name) && value.length > 25);

    return usePopover ? (
      <PropTypePopover content={value}>{name}</PropTypePopover>
    ) : (
      value
    );
  };

  getType(propDoc: ComponentPropDoc): ?React$Node {
    const { type } = propDoc;
    const name = typeof type === 'string' ? type : type.name;
    let value = typeof type === 'string' ? undefined : type.value;

    if (!value) {
      return name;
    }

    let usePopover = value.length > 25;

    if (name === 'union') {
      const values = value.replace(/\|\s/g, '|').split('|');
      usePopover = values.length > 4;
      value = usePopover ? `| ${values.join('\n| ')}` : value;
    }

    if (name === 'object') {
      usePopover = true;
    }

    return usePopover ? (
      <PropTypePopover content={value}>{name}</PropTypePopover>
    ) : (
      value
    );
  }
}
