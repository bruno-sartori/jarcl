import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Button from '../../../src/components/Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
  }
} as Meta

interface ButtonProps {
  title: string
}

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Click me',
  onClick: () => alert('You have clicked me')
}

export const Primary = Template.bind({})
Primary.args = {
  title: 'Click me',
  onClick: () => alert('You have clicked me'),
  type: 'primary',
}
