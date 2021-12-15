import React from "react";

import { addons, types } from "@storybook/addons";
import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { ContentClient } from "dc-delivery-sdk-js";

import Content from "./components/Content";

const FORM_ID = "dynamicContentControls";

const panelID = (addonId) => `${addonId}/panel`;

const client = new ContentClient({
  hubName: process.env.HUB_NAME,
  baseUrl: process.env.BASE_URL,
  stagingEnvironment: process.env.STAGING_ENVIRONMENT,
});

const ContentSelect = () => {
  const value = useParameter("DynamicContent", {});

  return (
    <Content
      schema={value.schema}
      transformer={value.transformer}
      sortKey={value.sortKey}
      client={client}
    />
  );
};

addons.register(FORM_ID, (api) => {
  addons.add(panelID(FORM_ID), {
    type: types.PANEL,
    title: "Dynamic Content",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <ContentSelect />
      </AddonPanel>
    ),
  });
});
