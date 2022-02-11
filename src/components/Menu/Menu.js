import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Menu = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <ul
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {children}
    </ul>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Menu
