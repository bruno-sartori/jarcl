import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Card from '../../../src/components/Card'

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
  }
} as Meta

interface CardProps {
  title: string
}

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'Teste Card',
  children: (
    <div>teste</div>
  )
}
