import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '../Avatar'

import classes from './styles.module.css'

export const ImageWrapper = (props) => {
  const {
    className,
    avatarClassName,
    avatarUrl,
    avatarText,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Avatar
        className={avatarClassName}
        avatarUrl={avatarUrl}
        avatarText={avatarText}
      />

    </div>
  )
}

ImageWrapper.propTypes = {
  className: PropTypes.string,
  avatarClassName: PropTypes.string,
  avatarUrl: PropTypes.string,
  avatarText: PropTypes.string
}

export default ImageWrapper
