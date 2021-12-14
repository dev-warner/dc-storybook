import React from 'react'
import PropTypes from 'prop-types'

import { useImage } from '../hooks/useImage'

export default function AmpImage({ image }) {
  const src = useImage(image)

  return <img src={src} />
}

AmpImage.propTypes = {
  image: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string,
    endpoint: PropTypes.string,
    defaultHost: PropTypes.string,
  }).isRequired,
}
