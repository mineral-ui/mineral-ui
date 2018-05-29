/* @flow */
import React from 'react';
import IconAdd from 'mineral-ui-icons/IconAdd';
import IconArchive from 'mineral-ui-icons/IconArchive';
import IconDelete from 'mineral-ui-icons/IconDelete';
import Button from '../../../../library/Button';
import ButtonGroup from '../../../../library/ButtonGroup';
import Flex, { FlexItem } from '../../../../library/Flex';

export default [
  {
    type: 'do',
    description: `Where space allows, add text to accompany icons in order to
  clarify purpose.`,
    example: (
      <ButtonGroup aria-label="File Actions">
        <Button iconStart={<IconAdd />}>Add</Button>
        <Button iconStart={<IconDelete />}>Delete</Button>
        <Button iconStart={<IconArchive />}>Archive</Button>
      </ButtonGroup>
    )
  },
  {
    type: 'dont',
    description: `Don't use ButtonGroup for unrelated buttons.`,
    example: (
      <ButtonGroup aria-label="Mixed-use Actions">
        <Button>Go Back</Button>
        <Button>Edit</Button>
        <Button>Favorite</Button>
      </ButtonGroup>
    )
  },
  {
    type: 'dont',
    description: `Don't use long words or more than three words to describe a
  ButtonGroup Button; instead, be as descriptive and concise as possible.`,
    example: (
      <ButtonGroup aria-label="Lengthy Actions">
        <Button>Save</Button>
        <Button>Invalidate/Disentangle</Button>
        <Button>Click To View Previous Changes</Button>
      </ButtonGroup>
    )
  },
  {
    type: 'dont',
    description: `Don't use varying \`sizes\` for adjacent ButtonGroups.`,
    example: (
      <Flex marginTop="-1rem" wrap>
        <FlexItem marginTop="1rem">
          <ButtonGroup size="small" aria-label="Small Buttons" mode="radio">
            <Button defaultChecked>List</Button>
            <Button>Grid</Button>
          </ButtonGroup>
        </FlexItem>
        <FlexItem marginTop="1rem">
          <ButtonGroup aria-label="Default Buttons" mode="radio">
            <Button defaultChecked>Light</Button>
            <Button>Dark</Button>
          </ButtonGroup>
        </FlexItem>
      </Flex>
    )
  },
  {
    type: 'dont',
    description: `Don't use ButtonGroups for navigation; use tabs instead.`,
    example: (
      <ButtonGroup aria-label="Galaxies">
        <Button>Home</Button>
        <Button>Blog</Button>
        <Button>Photos</Button>
      </ButtonGroup>
    )
  }
];
