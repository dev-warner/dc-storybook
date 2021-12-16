import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import './core.css'

import React from 'react'

const img = (image) =>
  `https://${image.defaultHost}/i/${image.endpoint}/${image.name}`

export const Carousel = ({ items = [], onClick = () => {} }) => {
  return (
    <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {items.map((item, index) => {
          return (
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={index}
              className=""
              className={index === 0 ? 'active' : ''}
              aria-current="true"
              aria-label={`Slide ${index + 1}`}
            />
          )
        })}
      </div>
      <div className="carousel-inner">
        {items.map((item, index) => {
          return (
            <div className={'carousel-item ' + (index === 0 ? 'active' : '')}>
              <svg
                className="bd-placeholder-img"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                {item.image ? (
                  <image href={img(item.image)}></image>
                ) : (
                  <rect width="100%" height="100%" fill="#777"></rect>
                )}
              </svg>

              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                  <p>
                    <a className="btn btn-lg btn-primary" onClick={onClick}>
                      {item.cta}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
