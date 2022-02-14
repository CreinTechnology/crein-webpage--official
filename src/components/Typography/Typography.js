import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Typography = (props) => {
  const {
    className,
    variant,
    children,
    ...otherProps
  } = props

  const variantClass = classes[variant]

  return (
    <p
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}`}
      {...otherProps}
    >
      {children}
    </p>
  )
}

Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['body1', 'body2', 'body3', 'body4'])
}

export default Typography
