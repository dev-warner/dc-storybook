import React from 'react'
import { Car } from './Car'

export default {
  title: 'Definitely a Carousel',
  component: Car,
  argTypes: {},
  parameters: {
    DynamicContent: {
      schema: 'https://demo-hack21.com',
      transformer: (args, { content }) => content,
    },
  },
}

const Template = (args) => <Car {...args} />

export const Primary = Template.bind({})

Primary.args = {}
