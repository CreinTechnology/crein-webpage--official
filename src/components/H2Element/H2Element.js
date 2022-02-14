import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const H2Element = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <h2
      className={`${classes.h2}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </h2>
  )
}

H2Element.propTypes = {
  className: PropTypes.string
}

export default H2Element
