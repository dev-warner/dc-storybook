import React from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const StoryCarousel = ({ text1, text2, text3, ...props }) => {
  return (
    <section className="story-carousel">
      <Carousel>
        <div>
          <img src="assets/ampy.png" />
          <p>{text1}</p>
        </div>
        <div>
          <img src="assets/sharpei.png" />
          <p>{text2}</p>
        </div>
        <div>
          <img src="assets/timfish.png" />
          <p>{text3}</p>
        </div>
      </Carousel>
      <p>u wot m8</p>
    </section>
  );
};

StoryCarousel.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};

StoryCarousel.defaultProps = {
  text1: "hello",
  test2: "world",
  text3: "derp",
};
