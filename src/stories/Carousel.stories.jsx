import React from 'react'
import { Carousel } from './Carousel'

export default {
  title: 'Carousel',
  component: Carousel,
  argTypes: {},
  parameters: {},
}

const Template = (args) => <Carousel {...args} />

export const Primary = Template.bind({})

Primary.args = {}
