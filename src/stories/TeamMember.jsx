import React from 'react'
import PropTypes from 'prop-types'

import AmpImage from './AmpImage'

import './team-member.css'

export const TeamMember = ({
  name,
  role,
  image,
  'favorite-album': favoriteAlbum,
  ...props
}) => {
  return (
    <section className="team-member">
      <h1>{name}</h1>

      <span>{role}</span>
      <span>{favoriteAlbum}</span>

      {image && <AmpImage image={image} />}
    </section>
  )
}

TeamMember.propTypes = {
  image: PropTypes.objectOf({
    id: PropTypes.string,
    name: PropTypes.string,
    endpoint: PropTypes.string,
    defaultHost: PropTypes.string,
  }),
  role: PropTypes.oneOf(['Lead', 'Developer', 'QA']),
  name: PropTypes.string.isRequired,
  'favorite-album': PropTypes.string,
  onClick: PropTypes.func,
}

TeamMember.defaultProps = {
  name: 'name',
}
