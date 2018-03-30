/* @flow */
import React from 'react';
import { createStyledComponent } from '../../../../library/styles';
import Button from '../../../../library/Button';
import Card, { CardBlock, CardTitle } from '../../../../library/Card';
import Tooltip from '../../../../library/Tooltip';
import IconHelp from 'mineral-ui-icons/IconHelp';
import IconFormatBold from 'mineral-ui-icons/IconFormatBold';
import IconFormatItalic from 'mineral-ui-icons/IconFormatItalic';
import IconFormatUnderlined from 'mineral-ui-icons/IconFormatUnderlined';
import IconFormatAlignCenter from 'mineral-ui-icons/IconFormatAlignCenter';
import IconFormatAlignJustify from 'mineral-ui-icons/IconFormatAlignJustify';
import IconFormatAlignLeft from 'mineral-ui-icons/IconFormatAlignLeft';
import IconFormatAlignRight from 'mineral-ui-icons/IconFormatAlignRight';
import IconKeyboardArrowDown from 'mineral-ui-icons/IconKeyboardArrowDown';
import IconKeyboardArrowUp from 'mineral-ui-icons/IconKeyboardArrowUp';
import IconCheck from 'mineral-ui-icons/IconCheck';
import FormField from '../../../../library/Form/FormField';
import TextInput from '../../../../library/TextInput/';

const DemoCardLayout = createStyledComponent('div', {
  width: '250px'
});

const VerticalLayout = createStyledComponent('div', {
  '& > * + *': {
    marginTop: '1em'
  }
});

const StackedButtons = createStyledComponent(VerticalLayout, {
  width: '50px',
  textAlign: 'center'
});

const HorizontalLayout = createStyledComponent('div', {
  '& > *': {
    marginRight: '0.5em'
  }
});

const shortLorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
est laborum.
`;

const tooltipEveryFifthWord = (words) => {
  return words.split(/\s/).reduce((acc, word, index) => {
    const possiblyTooltippedWord =
      index > 0 && 0 === index % 5 ? (
        <Tooltip key={index} content={word} placement="top">
          {word}
        </Tooltip>
      ) : (
        ` ${word} `
      );
    return acc.concat(possiblyTooltippedWord);
  }, []);
};

export default [
  {
    type: 'do',
    description: `Use Tooltips to provide supplemental information
for a user control, such as titles and keyboard shortcuts, when the interface
design doesn't allow space for a text label.`,
    example: (
      <div>
        {[
          {
            content: 'Bold (⌘B)',
            icon: IconFormatBold
          },
          {
            content: 'Italic (⌘I)',
            icon: IconFormatItalic
          },
          {
            content: 'Underlined (⌘U)',
            icon: IconFormatUnderlined
          },
          {
            content: 'Left align (⌘+Shift+L)',
            icon: IconFormatAlignLeft
          },
          {
            content: 'Center align (⌘+Shift+E)',
            icon: IconFormatAlignCenter
          },
          {
            content: 'Right align (⌘+Shift+R)',
            icon: IconFormatAlignRight
          },
          {
            content: 'Justify (⌘+Shift+J)',
            icon: IconFormatAlignJustify
          }
        ].map(({ content, icon }, index) => {
          return (
            <Tooltip content={content} key={index}>
              <Button minimal iconStart={React.createElement(icon)} />
            </Tooltip>
          );
        })}
      </div>
    )
  },
  {
    type: 'do',
    description: `Use Tooltips to annotate the controls for rarely used features
or features that can be interpreted in several ways. For instance, these buttons 
are for voting, not scrolling or prioritizing.`,
    example: (
      <StackedButtons>
        <Tooltip content="Mark this answer as helpful" placement="right">
          <Button circular iconStart={<IconKeyboardArrowUp />} />
        </Tooltip>
        <Tooltip
          content="115 people found this answer helpful"
          placement="right">
          <span>115</span>
        </Tooltip>
        <Tooltip content="Mark this answer as unhelpful" placement="right">
          <Button circular iconStart={<IconKeyboardArrowDown />} />
        </Tooltip>
        <Tooltip content="This is the correct answer" placement="right">
          <Button
            circular
            variant="success"
            primary
            iconStart={<IconCheck />}
          />
        </Tooltip>
      </StackedButtons>
    )
  },
  {
    type: 'dont',
    description: `Don't use Tooltips to hide important information. Information
hidden inside a Tooltip is much less likely to be discovered by the user.
`,
    example: (
      <DemoCardLayout>
        <Card>
          <CardTitle
            actions={
              <Tooltip content="Freidrich Mohs was a German geologist and mineralogist">
                <IconHelp title="more info" />
              </Tooltip>
            }>
            Friedrich Mohs
          </CardTitle>
          <CardBlock>
            <b>Born</b>: January 29, 1773<br />
            <b>Died</b>: September 29, 1839
          </CardBlock>
        </Card>
      </DemoCardLayout>
    )
  },
  {
    type: 'dont',
    description: `Don't place Tooltips such that they prevent the
user from reviewing their input.`,
    example: (
      <VerticalLayout>
        <FormField input={TextInput} label="Name" placeholder="Steve123" />
        <Tooltip
          content="We'll check to see if you can have that name."
          placement="top">
          <Button>Check Availability</Button>
        </Tooltip>
      </VerticalLayout>
    )
  },
  {
    type: 'dont',
    description: `Don't place useless or redundant content in a Tooltip.
Tooltip content should be helpful.`,
    example: (
      <HorizontalLayout>
        <Tooltip content="Click to Print">
          <Button>Print</Button>
        </Tooltip>
        <Tooltip content="Save">
          <Button>Save</Button>
        </Tooltip>
      </HorizontalLayout>
    )
  },
  {
    type: 'dont',
    description: `Don't put large strings of text inside a Tooltip's content.
Tooltips are intended for short, simple content.`,
    example: (
      <Tooltip content={shortLorem}>
        <IconHelp title="more info" />
      </Tooltip>
    )
  },
  {
    type: 'dont',
    description: `Don't litter your prose with Tooltips. They
clutter the text and make it hard to read.`,
    example: <div>{tooltipEveryFifthWord(shortLorem)}</div>
  }
];
