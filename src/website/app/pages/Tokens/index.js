/* @flow */
import React, { Component, Fragment } from 'react';
import { createStyledComponent } from '../../../../library/styles';
import Box from '../../../../library/Box';
import { FormField } from '../../../../library/Form';
import { RadioGroup } from '../../../../library/Radio';
import categorizedJsTokens from '../../generated/categorizedJsTokens';
import categorizedSassTokens from '../../generated/categorizedSassTokens';
import _Callout from '../../Callout';
import Button from '../../SiteButton';
import Markdown from '../../Markdown';
import SubHeading from '../../SiteSubHeading';
import VariableTable from '../../VariableTable';
import content from './tokens.md';

type Props = {};

type State = {
  format: { [string]: { [string]: string | number } },
  value: string
};

type Theme = { [string]: string };

type Variable = string;

const Callout = createStyledComponent(_Callout, ({ theme }) => ({
  marginTop: theme.space_stack_xxl
}));

const REGEX_IS_COLOR = /^#/;

export const getColor = (theme: Theme, variable: Variable) =>
  REGEX_IS_COLOR.test(theme[variable]) && theme[variable];

export const getValue = (theme: Theme, variable: Variable) => theme[variable];

const formats = {
  categorizedJsTokens,
  categorizedSassTokens
};

const data = [
  { label: 'JavaScript', value: 'categorizedJsTokens' },
  { label: 'Sass', value: 'categorizedSassTokens' }
];

export default class Tokens extends Component<Props, State> {
  state = { format: categorizedJsTokens, value: data[0].value };

  render() {
    return (
      <div {...this.props}>
        <Markdown scope={{ Button }}>{content}</Markdown>
        <Callout title="Select a token format to display correct token names in the table below:">
          <Box paddingTop="md">
            <FormField
              input={RadioGroup}
              label="Select a token format"
              hideLabel
              name="format"
              data={data}
              defaultChecked={this.state.value}
              onChange={this.handleFormatChange}
              inline
            />
          </Box>
        </Callout>
        {Object.keys(this.state.format).map((title) => {
          const values = this.state.format[title];
          const themeGroup = typeof values === 'function' ? values() : values;
          return (
            <Fragment key={title}>
              <SubHeading id={title}>{title}</SubHeading>
              <VariableTable
                themeToDisplay={themeGroup}
                value={getValue}
                valueColor={getColor}
              />
            </Fragment>
          );
        })}
      </div>
    );
  }

  handleFormatChange = (event: SyntheticInputEvent<>) => {
    this.setState({
      format: formats[event.target.value],
      value: event.target.value
    });
  };
}
