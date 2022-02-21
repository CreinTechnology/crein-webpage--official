import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const FullPageLayout = (props) => {
  const {
    className,
    children,
    onClick,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </div>
  )
}

FullPageLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default FullPageLayout
