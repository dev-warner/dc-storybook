import React from 'react'
import { Carousel } from './Carousel'

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {},
  parameters: {
    DynamicContent: {
      schema: 'https://carousel.com',
      transformer: (args, { content }) => content,
    },
  },
}

const Template = (args) => <Carousel {...args} />

export const Primary = Template.bind({})

Primary.args = {}
