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
/* eslint-disable */
import React from 'react';
import { createStyledComponent } from '../../../../utils';
import GuidelinePage from '../../GuidelinePage';
import Markdown from '../../Markdown';
import Heading from '../../Heading';
import content from './content.md';
import milestones from './milestones';

export default function Roadmap() {
  return (
    <GuidelinePage>
      <Markdown scope={{ StatusBar }}>{content}</Markdown>
      <IncrementList>
        <li>
          <Heading level={3}>Publish CA's Design System</Heading>
          <MilestoneList>
            <MilestoneRoot>
              Color Page <Chip state="CLOSED" />
            </MilestoneRoot>
            <MilestoneRoot>
              Typography Page <Chip state="CLOSED" />
            </MilestoneRoot>
            <MilestoneRoot>
              Theme Page <Chip state="OPEN" />
            </MilestoneRoot>
            <MilestoneRoot>
              Community Page <Chip state="OPEN" />
            </MilestoneRoot>
            <MilestoneRoot>
              Resources Page <Chip state="OPEN" />
            </MilestoneRoot>
          </MilestoneList>
        </li>
        <li>
          <Heading level={3}>Build Components</Heading>
          <MilestoneList>
            <MilestoneRoot>
              Proof of Concept <Chip state="CLOSED" />
            </MilestoneRoot>
            <MilestoneRoot>
              Base Components <Chip state="OPEN" />
            </MilestoneRoot>
            <MilestoneRoot>
              Macro Components <Chip state="OPEN" />
            </MilestoneRoot>
          </MilestoneList>
        </li>
        <li>
          <Heading level={3}>Adoption Across CA's Products</Heading>
          <MilestoneList>
            <MilestoneRoot>
              APIM <Chip state="CLOSED" />
            </MilestoneRoot>
            <MilestoneRoot>
              Agile Central <Chip state="OPEN" />
            </MilestoneRoot>
            <MilestoneRoot>
              AXA <Chip state="OPEN" />
            </MilestoneRoot>
            <MilestoneRoot>
              TDM <Chip state="OPEN" />
            </MilestoneRoot>
            <MilestoneRoot>
              PAM <Chip state="OPEN" />
            </MilestoneRoot>
            <MilestoneRoot>
              ARD <Chip state="OPEN" />
            </MilestoneRoot>
            <MilestoneRoot>
              DCD <Chip state="OPEN" />
            </MilestoneRoot>
          </MilestoneList>
        </li>
      </IncrementList>
    </GuidelinePage>
  );
}

const styles = {
  statusBarRoot: ({ theme }) => ({
    width: '5em',
    borderRadius: theme.borderRadius_1,
    border: `2px solid black`
  }),
  statusIndicator: ({ percent, theme }) => ({
    backgroundColor:
      percent > 70
        ? theme.backgroundColor_success_activeMuted
        : percent > 50
          ? theme.backgroundColor_warning_activeMuted
          : theme.backgroundColor_danger_activeMuted,
    borderRadius: theme.borderRadius_1,
    width: `${percent}%`,
    textAlign: 'center',
    fontWeight: theme.fontWeight_bold,
    fontSize: theme.fontSize_ui
  }),
  incrementList: () => ({
    listStyle: 'none',
    paddingLeft: '0px'
  }),
  milestonesList: () => ({
    listStyleType: 'disc'
  }),
  milestoneRoot: ({ theme }) => ({
    marginBottom: theme.space_stack_sm
  }),
  chip: ({ state, theme }) => ({
    backgroundColor:
      'OPEN' === state
        ? theme.color_theme_20
        : theme.backgroundColor_success_activeMuted,
    marginLeft: theme.space_inline_sm,
    padding: `0 ${theme.space_inline_sm}`,
    borderRadius: theme.borderRadius_1,
    fontWeight: theme.fontWeight_bold,
    textDecoration: 'none',
    color: theme.color_text,
    fontSize: theme.fontSize_ui
  })
};

const IncrementList = createStyledComponent('ul', styles.incrementList);
const MilestoneList = createStyledComponent('ul', styles.milestonesList);
const MilestoneRoot = createStyledComponent('li', styles.milestoneRoot);
const ChipRoot = createStyledComponent('a', styles.chip);
const StatusBarRoot = createStyledComponent('div', styles.statusBarRoot);
const StatusIndicator = createStyledComponent('div', styles.statusIndicator);

function StatusBar({ percent }) {
  return (
    <StatusBarRoot>
      <StatusIndicator percent={percent}>{`${percent}%`}</StatusIndicator>
    </StatusBarRoot>
  );
}

type Node = {
  id: string,
  number: number,
  state: string,
  title: string,
  url: string
};

type Nodes = Array<Node>;

type IncrementsProps = {
  data: {
    repository: {
      milestones: {
        nodes: Nodes
      }
    }
  }
};

type IncrementProps = {
  milestones: Array<number>,
  nodes: Nodes,
  number: number,
  title: string
};

type MilestonesProps = {
  nodes: Nodes
};

type IncrementDef = {
  milestones: Array<number>,
  title: string,
  nodes?: Nodes
};

type IncrementDefs = Array<IncrementDef>;

function Increments({ data }: IncrementsProps) {
  const incrementDefs: IncrementDefs = [
    {
      milestones: [3, 7, 9, 10],
      title: `Build a Website that Documents CA's Design Philosophy`
    },
    {
      milestones: [12, 13, 15],
      title: 'Build Components'
    },
    {
      milestones: [],
      title: 'Adoption',
      nodes: [
        {
          id: 'adoption1',
          number: 0,
          state: 'OPEN',
          title: 'APIM',
          url: 'http://mineral-ui.com'
        }
      ]
    }
  ];
  const increments = data.repository.milestones.nodes.reduce(
    (incrementDefs, milestone) => {
      return incrementDefs.reduce((incrementsWithNodes, incrementDef) => {
        const incrementContainsMilestone =
          incrementDef.milestones.indexOf(milestone.number) !== -1;

        return incrementsWithNodes.concat({
          milestones: incrementDef.milestones,
          nodes: incrementContainsMilestone
            ? Array.prototype.concat(incrementDef.nodes || [], milestone)
            : incrementDef.nodes,
          title: incrementDef.title
        });
      }, []);
    },
    incrementDefs
  );

  return (
    <IncrementList>
      {increments.map((increment, index) => (
        <Increment key={index} number={index + 1} {...increment} />
      ))}
    </IncrementList>
  );
}

function Increment({ nodes, number, title }: IncrementProps) {
  return (
    <li>
      <Heading level={3}>{`Goal ${number} - ${title}`}</Heading>
      <Milestones nodes={nodes} />
    </li>
  );
}

function Milestones({ nodes }: MilestonesProps) {
  return (
    <MilestoneList>
      {nodes.map(milestone => <Milestone key={milestone.id} {...milestone} />)}
    </MilestoneList>
  );
}

function Milestone({ state, title, url }: Node) {
  return (
    <MilestoneRoot>
      {title}
      <Chip state={state} />
    </MilestoneRoot>
  );
}

function Chip({ state }) {
  return (
    <ChipRoot state={state}>
      {'OPEN' === state ? 'IN-PROGRESS' : 'DONE'}
    </ChipRoot>
  );
}
