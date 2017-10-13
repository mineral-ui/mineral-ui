/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React from 'react';
import rgba from 'polished/lib/color/rgba';
import { createStyledComponent, pxToEm } from '../../../../styles';
import { ThemeProvider } from '../../../../themes';
import IconCheck from '../../../../Icon/IconCheck';
import IconClose from '../../../../Icon/IconClose';
import Markdown from '../../Markdown';
import Heading from '../../SiteHeading';

type Props = {
  backgroundColor?: string,
  children?: string,
  className?: string,
  example?: React$Node,
  title?: string,
  type: 'do' | 'dont'
};

const styles = {
  root: ({ theme }) => ({
    [theme.bp_interior_bestPracticesMultiColumn]: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between'
    }
  }),
  example: ({ backgroundColor, theme }) => ({
    backgroundColor,
    border: `1px solid ${rgba(theme.borderColor, 0.3)}`,
    padding: theme.space_inset_md,

    [theme.bp_interior_bestPracticesMultiColumn]: {
      flex: `1 1 ${7 / 12 * 100}%`
    }
  }),
  header: ({ theme, type }) => ({
    backgroundColor:
      type === 'do'
        ? rgba(theme.borderColor_success, 0.1)
        : rgba(theme.borderColor_danger, 0.1),
    borderTop: `3px solid ${type === 'do'
      ? theme.borderColor_success
      : theme.borderColor_danger}`,
    padding: `${theme.baseline_1} ${theme.baseline_2}`,

    [theme.bp_interior_bestPracticesMultiColumn]: {
      borderLeft: `3px solid ${type === 'do'
        ? rgba(theme.borderColor_success, 0.6)
        : rgba(theme.borderColor_danger, 0.6)}`,
      borderTop: 0,
      flex: `1 1 ${5 / 12 * 100}%`
    },

    '& > [role="icon"]': {
      backgroundColor:
        type === 'do'
          ? rgba(theme.borderColor_success, 0.2)
          : rgba(theme.borderColor_danger, 0.2),
      borderRadius: theme.baseline_3,
      fill:
        type === 'do'
          ? rgba(theme.borderColor_success, 0.5)
          : rgba(theme.borderColor_danger, 0.5),
      float: 'left',
      height: theme.baseline_3,
      marginRight: theme.baseline_2,
      padding: `${parseFloat(theme.baseline_1) / 2}em`,
      width: theme.baseline_3
    },

    // Markdown
    '& > div': {
      overflow: 'hidden',

      '& code': {
        backgroundColor:
          type === 'do'
            ? rgba(theme.borderColor_success, 0.1)
            : rgba(theme.borderColor_danger, 0.1)
      },

      '& > p:last-child': {
        marginBottom: 0
      }
    }
  }),
  title: ({ theme, type }) => ({
    color: type === 'do' ? theme.borderColor_success : theme.borderColor_danger,
    fontSize: theme.SiteHeading_fontSize_4,
    lineHeight: 1.1,
    margin: 0,

    [theme.bp_moreSpacious]: {
      fontSize: theme.SiteHeading_fontSize_4_wide
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const Example = createStyledComponent('div', styles.example);
const Header = createStyledComponent('div', styles.header);
const Title = createStyledComponent(Heading, styles.title);

export default function DocPractice({
  backgroundColor,
  children,
  className,
  example,
  type
}: Props) {
  const iconProps = {
    size: pxToEm(50)
  };
  const icon =
    type === 'do' ? <IconCheck {...iconProps} /> : <IconClose {...iconProps} />;

  return (
    <Root className={className}>
      <Header type={type}>
        {icon}
        <Title level={4} type={type}>
          {type === 'do' ? 'Do' : 'Don’t'}
        </Title>
        <Markdown>{children}</Markdown>
      </Header>
      <Example backgroundColor={backgroundColor} type={type}>
        <ThemeProvider>
          {typeof example === 'string' ? (
            <Markdown>{example}</Markdown>
          ) : (
            example
          )}
        </ThemeProvider>
      </Example>
    </Root>
  );
}
