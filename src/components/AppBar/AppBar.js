import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../Navbar/Navbar'

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
      <Navbar
        className={'navbar'}
      />
    </div>
  )
}

AppBar.propTypes = {
  className: PropTypes.string
}

export default AppBar
