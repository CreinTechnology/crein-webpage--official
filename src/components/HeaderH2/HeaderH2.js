import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const HeaderH2 = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <h2
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {children}
    </h2>
  )
}

HeaderH2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default HeaderH2
