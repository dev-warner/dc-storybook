import React from "react";
import { Carousel } from "react-responsive-carousel";

import { StoryCarousel } from "./StoryCarousel.jsx";

export default {
  title: "Example/StoryCarousel",
  component: StoryCarousel,
  argTypes: {},
};

const Template = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
