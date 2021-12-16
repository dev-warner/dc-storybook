import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import React from 'react'

const img = (image) =>
  `https://${image.defaultHost}/i/${image.endpoint}/${image.name}?w=600&q=0.6`

export const Features = ({ title = '', features = [] }) => {
  return (
    <div className="container px-4 py-5" id="custom-cards">
      <h2 className="pb-2 border-bottom">{title}</h2>

      <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
        {features.map((feature) => {
          return (
            <div className="col">
              <div
                className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
                style={{
                  backgroundImage: `url(${img(feature.image)})`,
                  backgroundSize: 'cover',
                }}
              >
                <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                  <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                    {feature.title}
                  </h2>
                  <ul className="d-flex list-unstyled mt-auto">
                    <li className="me-auto">
                      <img
                        src={img(feature.logo)}
                        alt="Bootstrap"
                        width="32"
                        height="32"
                        className="rounded-circle border border-white"
                      />
                    </li>
                    <li className="d-flex align-items-center me-3">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#geo-fill"></use>
                      </svg>
                      <small>{feature.location}</small>
                    </li>
                    <li className="d-flex align-items-center">
                      <svg className="bi me-2" width="1em" height="1em">
                        <use xlinkHref="#calendar3"></use>
                      </svg>
                      <small>{feature.date}</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
