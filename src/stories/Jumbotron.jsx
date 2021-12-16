import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import AmpImage from "./AmpImage";

export const Jumbotron = ({ title, logo, content, ...props }) => {
  const img = (image) =>
    `https://${image.defaultHost}/i/${image.endpoint}/${image.name}`;
  return (
    <>
      {content ? (
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <img
                src={img(logo)}
                style={{ width: "50px", marginRight: "15px" }}
              />
              <span className="fs-4">{title}</span>
            </a>
          </header>

          <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
              <h1 className="display-5 fw-bold">{content[0].title}</h1>
              <p className="col-md-8 fs-4">{content[0].content}</p>
              <button className="btn btn-primary btn-lg" type="button">
                {content[0].callToAction}
              </button>
            </div>
          </div>

          <div className="row align-items-md-stretch">
            <div className="col-md-6">
              <div className="h-100 p-5 text-white bg-dark rounded-3">
                <h2>{content[1].title}</h2>
                <p>{content[1].content}</p>
                <button className="btn btn-outline-light" type="button">
                  {content[1].callToAction}
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-light border rounded-3">
                <h2>{content[2].title}</h2>
                <p>{content[2].content}</p>
                <button className="btn btn-outline-secondary" type="button">
                  {content[2].callToAction}
                </button>
              </div>
            </div>
          </div>

          <footer className="pt-3 mt-4 text-muted border-top">© 2021</footer>
        </div>
      ) : (
        <p>Hello world</p>
      )}
    </>
  );
};
