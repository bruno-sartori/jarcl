import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import GridContainer from '../../../src/components/GridContainer';
import GridItem from '../../../src/components/GridItem';

export default {
  title: 'Example/GridItem',
  component: GridItem,
  argTypes: {
  }
} as Meta

interface GridItemProps {
  children: any;
  colSpan: number;
  rowSpan?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Template: Story<GridItemProps> = (args) => (
  <GridContainer>
    <GridItem {...args[0]} >Test 01</GridItem>
    <GridItem {...args[1]} >Test 02</GridItem>
    <GridItem {...args[2]} >Test 03</GridItem>
    <GridItem {...args[3]} >Test 04</GridItem>
    <GridItem {...args[4]} >Test 05</GridItem>
    <GridItem {...args[5]} >Test 06</GridItem>
  </GridContainer>
);

export const Default = Template.bind({})
Default.args = [
  {
    colSpan: 6,
    style: { backgroundColor: '#f00' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#abeafe' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#ccc' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#75AAFF' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#000', color: '#fff' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#27AE60' }
  },
];


export const RowChange = Template.bind({})
RowChange.args = [
  {
    colSpan: 6,
    rowSpan: 2,
    style: { backgroundColor: '#f00' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#abeafe' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#ccc' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#75AAFF' }
  },
  {
    colSpan: 6,
    rowSpan: 2,
    style: { backgroundColor: '#000', color: '#fff' }
  },
  {
    colSpan: 6,
    style: { backgroundColor: '#27AE60' }
  },
];
