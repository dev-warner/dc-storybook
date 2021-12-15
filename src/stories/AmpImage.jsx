import React from 'react'
import PropTypes from 'prop-types'

import { useImage } from '../hooks/useImage'

export default function AmpImage({ image, fallback, ...props }) {
  const src = useImage(image)

  return <img src={src || fallback} {...props} />
}

AmpImage.propTypes = {
  image: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string,
    endpoint: PropTypes.string,
    defaultHost: PropTypes.string,
    _meta: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
}
