import React from "react";

import { useArgs } from "@storybook/api";
import { useFilterSchemas } from "../hooks/useFilterSchemas";

export default function Content({
  client,
  schema = "",
  transformer = (args, content) => content,
}) {
  const { response, loading, refetch } = useFilterSchemas(schema, client);
  const [args, updateArgs, resetArgs] = useArgs();

  if (!schema) {
    return <NoSchema />;
  }

  if (loading) {
    return <Loading />;
  }

  if (response.length === 0) {
    return <NoContent />;
  }

  return (
    <div className="grid">
      {response.map((item, index) => {
        const { content } = item;
        return (
          <section className="card__item" key={index}>
            <h1 className="card__title">{content._meta.name}</h1>
            <button
              className="card__button"
              onClick={() => updateArgs(transformer(args, item))}
            >
              Select
            </button>
          </section>
        );
      })}
    </div>
  );
}

const NoSchema = () => <div>No schema</div>;
const Loading = () => <div>Loading...</div>;
const NoContent = () => <div>No content</div>;
