import React from "react";

import { useArgs } from "@storybook/api";
import { useFilterSchemas } from "../hooks/useFilterSchemas";

import "./content.css";

export default function Content({
  client,
  schema = "",
  transformer = (args, content) => content,
}) {
  const { response, loading, nextPage, prevPage, hasNextPage, hasPrevPage } =
    useFilterSchemas(schema, client);
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
    <div className="dc-storybook grid">
      {hasNextPage && <button onClick={nextPage}>next</button>}
      {hasPrevPage && <button onClick={prevPage}>prev</button>}

      {response.map((item, index) => {
        const { content } = item;
        return (
          <section className="card__item" key={index}>
            <h1 className="card__title">{content._meta.name}</h1>
            <button
              className="card__button"
              onClick={() => updateArgs(transformer(args, item))}
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
              </svg>
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
