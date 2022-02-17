import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const MenuList = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <ul
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </ul>
  )
}

MenuList.propTypes = {
  className: PropTypes.string
}

export default MenuList
