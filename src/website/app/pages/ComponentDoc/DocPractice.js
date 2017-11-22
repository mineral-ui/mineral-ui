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
import darken from 'polished/lib/color/darken';
import rgba from 'polished/lib/color/rgba';
import { createStyledComponent, pxToEm } from '../../../../styles';
import { mineralTheme, ThemeProvider } from '../../../../themes';
import IconCheck from 'mineral-ui-icons/IconCheck';
import IconClose from 'mineral-ui-icons/IconClose';
import Markdown from '../../Markdown';

type Props = {
  backgroundColor?: string,
  children?: string,
  className?: string,
  example?: React$Node,
  title?: string,
  type: 'do' | 'dont'
};

const themes = {
  do: {
    borderColor: darken(0.1, mineralTheme.borderColor_success),
    color_text_primary: mineralTheme.color_text_success,

    SiteLink_borderColor_focus: mineralTheme.color_text_success,
    SiteLink_color: mineralTheme.color_text_success,
    SiteLink_color_active: mineralTheme.color_text_success,
    SiteLink_color_hover: mineralTheme.color_text_success,
    SiteLink_color_focus: mineralTheme.color_text_success
  },
  dont: {
    borderColor: mineralTheme.borderColor_danger,
    color_text_primary: darken(0.1, mineralTheme.color_text_danger),

    SiteLink_borderColor_focus: darken(0.1, mineralTheme.color_text_danger),
    SiteLink_color: darken(0.1, mineralTheme.color_text_danger),
    SiteLink_color_active: darken(0.1, mineralTheme.color_text_danger),
    SiteLink_color_hover: darken(0.1, mineralTheme.color_text_danger),
    SiteLink_color_focus: darken(0.1, mineralTheme.color_text_danger)
  }
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
    },

    // Specificity hack
    '& pre[class]': {
      margin: 0
    }
  }),
  header: ({ theme }) => ({
    backgroundColor: rgba(theme.borderColor, 0.1),
    borderTop: `3px solid ${rgba(theme.borderColor, 0.6)}`,
    padding: `${theme.baseline_1} ${theme.baseline_2}`,

    [theme.bp_interior_bestPracticesMultiColumn]: {
      borderLeft: `3px solid ${rgba(theme.borderColor, 0.6)}`,
      borderTop: 0,
      flex: `1 1 ${5 / 12 * 100}%`
    },

    '& ::selection': {
      backgroundColor: rgba(theme.color_text_primary, 0.2)
    },

    '& > [role="img"]': {
      backgroundColor: rgba(theme.borderColor, 0.2),
      borderRadius: theme.baseline_3,
      fill: theme.borderColor,
      float: 'left',
      height: theme.baseline_3,
      marginRight: theme.baseline_2,
      padding: `${parseFloat(theme.baseline_1) / 2}em`,
      position: 'relative',
      top: pxToEm(4), // Optical alignment
      width: theme.baseline_3
    },

    // Markdown
    '& > div': {
      overflow: 'hidden',

      '& > p:last-child': {
        marginBottom: 0
      }
    }
  })
};

const Root = createStyledComponent('div', styles.root);
const Example = createStyledComponent('div', styles.example);
const Header = createStyledComponent('div', styles.header);

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
      <ThemeProvider theme={themes[type]}>
        <Header>
          {icon}
          <Markdown>{children}</Markdown>
        </Header>
      </ThemeProvider>
      <Example backgroundColor={backgroundColor}>
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
