import React from 'react'

import { TeamMember } from './TeamMember'

export default {
  title: 'Example/TeamMember',
  component: TeamMember,
  argTypes: {},
  parameters: {
    DynamicContent: {
      schema: 'https://amplience.com/team-ternary-member',
      transformer: (args, { content }) => content,
      // sortKey: '/name',
    },
  },
}

const Template = (args) => <TeamMember {...args} />

export const Primary = Template.bind({})

Primary.args = {}
