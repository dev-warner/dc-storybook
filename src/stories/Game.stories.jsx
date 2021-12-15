import React from 'react'
import { Game } from './Game'

export default {
  title: 'Boring/Game',
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
