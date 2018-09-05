/* @flow */
import React, { createElement } from 'react';
import marksy from 'marksy/components';
import darken from 'polished/lib/color/darken';
import rgba from 'polished/lib/color/rgba';
import {
  createStyledComponent,
  getNormalizedValue,
  pxToEm
} from '../../library/styles';
import Text from '../../library/Text';
import Heading from './SiteHeading';
import Link from './SiteLink';
import MarkdownTable from './MarkdownTable';
import getCodeBlockStyles from './utils/getCodeBlockStyles';
import prism from './utils/prism';
import _Label from './Label';

const REGEX_LABEL_DELIMITER = /\s*~\s*/;

type Props = {
  anchors?: boolean,
  children: React$Node,
  className?: string,
  scope?: {
    [string]: React$ComponentType<*>
  },
  standalone?: boolean
};

type mdCodeProps = {
  language?: string,
  children?: string,
  code?: string
};

type mdHeadingProps = {
  id?: string
};

type mdImageProps = {
  src?: string,
  alt?: string
};

type mdLinkProps = {
  href: string,
  title?: string,
  target?: string,
  children: React$Node
};

const styles = {
  blockquote: ({ theme }) => {
    return {
      borderLeft: `${theme.space_inline_sm} solid ${rgba(
        theme.color_theme,
        0.15
      )}`,
      margin: 0,
      marginLeft: theme.space_inline_md,
      paddingLeft: theme.space_inset_md
    };
  },
  codeBlock: ({ theme }) => ({
    marginBottom: theme.space_stack_xl
  }),
  image: {
    '@media(max-width: 60rem)': {
      width: '100%'
    }
  },
  label: ({ theme }) => ({
    marginLeft: theme.space_inline_sm
  }),
  listItem: ({ theme }) => ({
    marginBottom: theme.space_stack_sm
  }),
  root: ({ theme }) => ({
    lineHeight: theme.lineHeight_prose,
    position: 'relative', // for baseline grid,

    '& p, & ol, & ul': {
      margin: `${parseFloat(theme.fontSize_prose) *
        theme.lineHeight_prose}em 0`,
      maxWidth: theme.maxTextWidth,

      '&:first-child': {
        marginTop: 0
      }
    },

    '& h2': {
      fontSize: theme.SiteHeading_fontSize_2,
      margin: `${getNormalizedValue(
        pxToEm(21), // to baseline
        theme.SiteHeading_fontSize_2
      )} 0`,

      [theme.bp_moreSpacious]: {
        fontSize: theme.SiteHeading_fontSize_2_wide,
        margin: `${getNormalizedValue(
          pxToEm(19), // to baseline
          theme.SiteHeading_fontSize_2_wide
        )} 0`,
        maxWidth: getNormalizedValue(
          theme.maxTextWidth,
          theme.SiteHeading_fontSize_2_wide
        )
      },

      '& + p': {
        marginTop: 0
      }
    },

    '& h3': {
      fontSize: theme.SiteHeading_fontSize_3,
      margin: `${getNormalizedValue(
        pxToEm(21), // to baseline
        theme.SiteHeading_fontSize_3
      )} 0 ${getNormalizedValue(
        pxToEm(21 - 12), // to mid-baseline
        theme.SiteHeading_fontSize_3
      )}`,

      [theme.bp_moreSpacious]: {
        fontSize: theme.SiteHeading_fontSize_3_wide,
        margin: `${getNormalizedValue(
          pxToEm(19), // to baseline
          theme.SiteHeading_fontSize_3_wide
        )} 0 ${getNormalizedValue(
          pxToEm(19 - 12), // to mid-baseline
          theme.SiteHeading_fontSize_3_wide
        )}`,
        maxWidth: getNormalizedValue(
          theme.maxTextWidth,
          theme.SiteHeading_fontSize_3_wide
        )
      },

      '& + p': {
        marginTop: 0
      }
    },

    '& * + h2': {
      marginTop: getNormalizedValue(
        pxToEm(83), // to baseline
        theme.SiteHeading_fontSize_2
      ),

      [theme.bp_moreSpacious]: {
        marginTop: getNormalizedValue(
          pxToEm(101), // to baseline
          theme.SiteHeading_fontSize_2_wide
        )
      }
    },

    '& * + h3': {
      marginTop: getNormalizedValue(
        pxToEm(65), // to baseline
        theme.SiteHeading_fontSize_3
      ),

      [theme.bp_moreSpacious]: {
        marginTop: getNormalizedValue(
          pxToEm(82), // to baseline
          theme.SiteHeading_fontSize_3_wide
        )
      }
    },

    '& h2 + h3': {
      marginTop: getNormalizedValue(
        pxToEm(55), // to baseline
        theme.SiteHeading_fontSize_3
      ),

      [theme.bp_moreSpacious]: {
        marginTop: getNormalizedValue(
          pxToEm(55), // to baseline
          theme.SiteHeading_fontSize_3_wide
        )
      }
    },

    // Specificity silliness due to having to style markdown content off of the
    // container
    '& h2,& h3,& h4,& h5,& h6': {
      '& > a:link': {
        color: theme.color_mouse,
        fontWeight: 'inherit'
      },
      '& > a:hover': {
        color: theme.SiteLink_color_hover || theme.color_theme_hover
      },
      '& > a:focus': {
        color: theme.SiteLink_color_focus || theme.color_theme_focus
      },
      // `:active` must be last, to follow LVHFA order:
      // https://developer.mozilla.org/en-US/docs/Web/CSS/:active
      '& > a:active': {
        color: theme.SiteLink_color_active || theme.color_theme_active
      },

      '& code': {
        wordBreak: 'break-all'
      }
    },

    '& pre': {
      ...getCodeBlockStyles(theme),
      // to baseline
      margin: `${getNormalizedValue(pxToEm(31), theme.fontSize_ui)} 0
        ${getNormalizedValue(pxToEm(42), theme.fontSize_ui)}`
    },

    '& :not(pre) > code': {
      backgroundColor: rgba(theme.color_theme, 0.15),
      color: darken(0.1, theme.color_theme),
      direction: 'ltr',
      fontFamily: theme.fontFamily_monospace,
      fontSize: '0.8em',
      fontWeight: '500',
      hyphens: 'none',
      padding: `${parseFloat(theme.space_inset_sm) / 2}em`,
      wordBreak: 'normal',
      wordSpacing: 'normal',
      wordWrap: 'normal'
    },

    '& > p > img': {
      maxWidth: '100%'
    }
  })
};

const Blockquote = createStyledComponent('blockquote', styles.blockquote);
const CodeBlock = createStyledComponent('div', styles.codeBlock);
const Image = createStyledComponent('img', styles.image);
const Label = createStyledComponent(_Label, styles.label);
const LI = createStyledComponent('li', styles.listItem);
const Root = createStyledComponent('div', styles.root);

function replaceHeading(
  level,
  children,
  headingProps: mdHeadingProps,
  anchors
) {
  // Render the same props and children that were passed in, but prepend a
  // link to this title with the text '#'.
  return (
    <Heading anchor={anchors} level={level} id={headingProps.id}>
      {children}
    </Heading>
  );
}

type ListItemProps = {
  children: Array<any>
};

function ListItem({ children }: ListItemProps) {
  const newChildren = children.map((child) => {
    if (child && child.split) {
      const [preLabelText, labelText] = child.split(REGEX_LABEL_DELIMITER);

      if (!labelText) {
        return child;
      }

      const labelProps = {
        ...(labelText === 'done' ? { variant: 'success' } : undefined)
      };

      return [
        preLabelText,
        <Label key={1} {...labelProps}>
          {labelText}
        </Label>
      ];
    } else {
      return child;
    }
  });
  return <LI>{newChildren}</LI>;
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

const Markdown = (props: Props) => {
  const {
    anchors,
    children,
    className,
    scope,
    standalone,
    ...restProps
  } = props;
  const rootProps = {
    className: className ? `markdown ${className}` : 'markdown',
    ...restProps
  };

  const compile = marksy({
    createElement,
    elements: {
      a({ href, children }: mdLinkProps) {
        let linkProps = { to: href };
        if (isNormalLink(href)) {
          if (standalone && href.startsWith('#')) {
            // When viewing a standalone example, convert any same-page anchor
            // links to routed ones
            linkProps = { to: href.replace('#', '') };
          } else {
            linkProps = { href };
          }
        }
        return <Link {...linkProps}>{children}</Link>;
      },
      blockquote(props) {
        return <Blockquote {...props} />;
      },
      code({ language = 'jsx', code, children }: mdCodeProps) {
        return code ? (
          <CodeBlock>
            <pre className={`prism-code language-${language}`}>
              <code
                dangerouslySetInnerHTML={{ __html: prism(code, language) }}
              />
            </pre>
          </CodeBlock>
        ) : (
          <code>{children}</code>
        );
      },
      img({ src, alt }: mdImageProps) {
        return <Image src={src} alt={alt} />;
      },
      h1({ children }) {
        return replaceHeading(1, children, {}, anchors);
      },
      h2({ id, children }) {
        return replaceHeading(2, children, { id }, anchors);
      },
      h3({ id, children }) {
        return replaceHeading(3, children, { id }, anchors);
      },
      h4({ id, children }) {
        return replaceHeading(4, children, { id }, anchors);
      },
      h5({ id, children }) {
        return replaceHeading(5, children, { id }, anchors);
      },
      h6({ id, children }) {
        return replaceHeading(6, children, { id }, anchors);
      },
      p({ children }) {
        return <Text appearance="prose">{children}</Text>;
      },
      table(props) {
        return <MarkdownTable {...props} />;
      },
      li(props) {
        return <ListItem {...props} />;
      }
    },
    components: {
      ...scope
    }
  });

  const compiled = compile(children, { smartypants: false });

  return <Root {...rootProps}>{compiled.tree}</Root>;
};

Markdown.defaultProps = {
  anchors: true
};

export default Markdown;
