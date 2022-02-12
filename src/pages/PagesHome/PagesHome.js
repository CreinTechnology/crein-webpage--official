import React from 'react'
import PropTypes from 'prop-types'

import Menu from '../../components/Menu'

import classes from './styles.module.css'

export const PagesHome = (props) => {
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
        className={classes.menuWrapper}
      />

    </div>
  )
}

PagesHome.propTypes = {
  className: PropTypes.string
}

export default PagesHome
