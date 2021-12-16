import React from 'react'
import { Game } from './Game'

export default {
  title: 'Boring/IgnoreMe',
  component: Game,
  argTypes: {},
  parameters: {
    DynamicContent: {
      schema: 'https://game.com',
      transformer: (args, { content }) => content,
    },
  },
}

const Template = (args) => <Game {...args} />

export const Primary = Template.bind({})

Primary.args = {}
