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
import React, { createElement } from 'react';
import marksy from 'marksy/components';
import { createStyledComponent } from '../../utils';
import Heading from './Heading';
import Link from './Link';
import prism from './utils/prism';

type Props = {
  children: string,
  className?: string,
  scope?: {
    [string]: MnrlReactNode
  }
};

type mdCodeProps = {
  language?: string,
  children?: string,
  code?: string
};

type mdHeadingProps = {
  id?: string
};

type mdLinkProps = {
  href: string,
  title?: string,
  target?: string,
  children: MnrlReactNode
};

const Root = createStyledComponent('div', ({ theme }) => ({
  lineHeight: theme.lineHeight_prose,

  '& a:link': {
    color: theme.color_text_primary,
    textDecoration: 'none'
  },
  '& a:hover': {
    color: theme.color_text_primary_hover,
    textDecoration: 'underline'
  },
  '& a:focus': {
    color: theme.color_text_primary_focus,
    outline: `1px solid ${theme.borderColor_focus}`,
    outlineOffset: '2px'
  },
  // `:active` must be last, to follow LVHFA order:
  // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
  '& a:active': {
    color: theme.color_text_primary_active
  },

  '& :not(pre) > code': {
    backgroundColor: theme.color_gray_20,
    borderRadius: theme.borderRadius_1,
    fontFamily: theme.fontFamily_monospace,
    padding: theme.spacing_half
  },

  // Specificity silliness due to having to style markdown content off of the
  // container
  '& h2,& h3,& h4,& h5,& h6': {
    '& > a:link': {
      color: theme.color_caption
    },
    '& > a:hover': {
      color: theme.color_text_primary_hover
    },
    '& > a:focus': {
      color: theme.color_text_primary_focus
    },
    // `:active` must be last, to follow LVHFA order:
    // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
    '& > a:active': {
      color: theme.color_text_primary_active
    }
  },

  '& pre': {
    fontSize: theme.fontSize_ui,
    maxHeight: `${parseFloat(theme.spacing_quad) * 10}em`,
    overflow: 'auto'
  }
}));
const Em = createStyledComponent('em', ({ theme }) => ({
  color: theme.color_caption
}));

function replaceHeading(level, children, headingProps: mdHeadingProps) {
  // Render the same props and children that were passed in, but prepend a
  // link to this title with the text '#'.
  return (
    <Heading level={level} id={headingProps.id}>
      {children}
    </Heading>
  );
}

/**
 * Matches if:
 * (doesn't start with one or more dots &&
 *    (contains dot anywhere but the first character || starts with a hash)
 * )
 *
 * Should match:
 * http://non-routed-link.com,
 * http://non-routed-link.com#anchor
 * #non-routed-anchor
 *
 * Shouldn't match
 * routed-link
 * /routed-link
 * ../routed-link
 * routed-link#anchor
 * /routed-link#anchor
 * ../routed-link#anchor
 */

// eslint-disable-next-line no-useless-escape
const REGEX_IS_NON_ROUTED_LINK = /(?=^[^\.+])(?=[^\.]+\.|^#)/;

function isNormalLink(url) {
  return REGEX_IS_NON_ROUTED_LINK.test(url);
}

export default function Markdown({ children, className, scope }: Props) {
  const compile = marksy({
    createElement,
    elements: {
      a({ href, children }: mdLinkProps) {
        const linkProps = isNormalLink(href) ? { href } : { to: href };
        return (
          <Link {...linkProps}>
            {children}
          </Link>
        );
      },
      code({ language = 'jsx', code, children }: mdCodeProps) {
        return code
          ? <div>
              {language &&
                <Em>
                  {language}
                </Em>}
              <pre className={`prism-code language-${language}`}>
                <code
                  dangerouslySetInnerHTML={{ __html: prism(code, language) }}
                />
              </pre>
            </div>
          : <code>
              {children}
            </code>;
      },
      h1({ children }) {
        return replaceHeading(1, children, {});
      },
      h2({ id, children }) {
        return replaceHeading(2, children, { id });
      },
      h3({ id, children }) {
        return replaceHeading(3, children, { id });
      },
      h4({ id, children }) {
        return replaceHeading(4, children, { id });
      },
      h5({ id, children }) {
        return replaceHeading(5, children, { id });
      },
      h6({ id, children }) {
        return replaceHeading(6, children, { id });
      }
    },
    components: {
      ...scope
    }
  });

  const compiled = compile(children);

  return (
    <Root className={className}>
      {compiled.tree}
    </Root>
  );
}
