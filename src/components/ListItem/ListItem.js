import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const ListItem = (props) => {
  const {
    className,
    text,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {text}
    </li>
  )
}

ListItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default ListItem
