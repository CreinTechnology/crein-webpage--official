import React from 'react'
import PropTypes from 'prop-types'

import Menu from '../Menu/Menu'

import classes from './styles.module.css'

export const AppBar = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Menu
        className={'Menu'}
      />
    </div>
  )
}

AppBar.propTypes = {
  className: PropTypes.string
}

export default AppBar
