import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const ListItem = (props) => {
  const {
    className,
    text,
    onCloseMenuClick,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      onClick={onCloseMenuClick}
      {...otherProps}
    >
      {text}
    </li>
  )
}

ListItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  onCloseMenuClick: PropTypes.func
}

export default ListItem
