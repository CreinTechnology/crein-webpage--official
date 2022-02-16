import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Paragraph = (props) => {
  const {
    className,
    content,
    variant,
    ...otherProps
  } = props

  return (
    <p
      className={`${classes.root}${className ? ` ${className}` : ''}${variant ? ` ${variant}` : ''}`}
      {...otherProps}
    >
      {content}
    </p>
  )
}

Paragraph.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  variant: PropTypes.string
}

export default Paragraph
