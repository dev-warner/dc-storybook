import React from 'react'
import { Features } from './Features'

export default {
  title: 'Features',
  component: Features,
  argTypes: {},
  parameters: {
    DynamicContent: {
      schema: 'https://features.com',
      transformer: (args, { content }) => content,
    },
  },
}

const Template = (args) => <Features {...args} />

export const Primary = Template.bind({})

Primary.args = {}
