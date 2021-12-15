import React from "react";
import PropTypes from "prop-types";

export const TestComponent = ({ title, text, ...props }) => {
  return (
    <section className="test-component">
      <h1>{title}</h1>

      <p>{text}</p>
    </section>
  );
};

TestComponent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

TestComponent.defaultProps = {
  title: "title",
};
