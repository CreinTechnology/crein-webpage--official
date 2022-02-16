import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Avatar = (props) => {
  const {
    className,
    avatarUrl,
    avatarText,
    ...otherProps
  } = props

  return (
    <img
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      src={avatarUrl}
      alt={avatarText}
      {...otherProps}
    />
  )
}

Avatar.propTypes = {
  className: PropTypes.string,
  avatarUrl: PropTypes.string.isRequired,
  avatarText: PropTypes.string
}

export default Avatar
