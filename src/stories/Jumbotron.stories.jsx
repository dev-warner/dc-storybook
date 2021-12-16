import React from "react";

import { Jumbotron } from "./Jumbotron";

export default {
  title: "Jumbotron",
  component: Jumbotron,
  argTypes: {},
  parameters: {
    DynamicContent: {
      schema: "https://jumbo.com",
      transformer: (args, { content }) => content,
      // sortKey: '/name',
    },
  },
};

const Template = (args) => <Jumbotron {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
