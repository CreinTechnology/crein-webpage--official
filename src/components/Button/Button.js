import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Button = (props) => {
  const {
    className,
    children,
    label,
    sizeVariant,
    colorVariant,
    ...otherProps
  } = props

  const variantClass = classes[sizeVariant]
  const background = classes[colorVariant]

  return (
    <button
      className={`${classes.root}${className ? ` ${className}` : ''}${variantClass ? ` ${variantClass}` : ''}${background ? ` ${background}` : ''}`}
      {...otherProps}
    >
      {label}
      {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  colorVariant: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
  sizeVariant: PropTypes.oneOf(['xs', 's', 'l', 'xl'])
}

export default Button
