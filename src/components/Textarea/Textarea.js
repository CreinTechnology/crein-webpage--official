import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Textarea = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <textarea
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </textarea>
  )
}

Textarea.propTypes = {
  className: PropTypes.string
}

export default Textarea
