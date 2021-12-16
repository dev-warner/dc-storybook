import React from 'react'
import { Car } from './Car'

export default {
  title: 'Car',
  component: Car,
  argTypes: {},
  parameters: {
    DynamicContent: {
      schema: 'https://game.com',
      transformer: (args, { content }) => content,
    },
  },
}

const Template = (args) => <Car {...args} />

export const Primary = Template.bind({})

Primary.args = {}
