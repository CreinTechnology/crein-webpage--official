import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const HeaderH2 = (props) => {
  const {
    className,
    content,
    ...otherProps
  } = props

  return (
    <h2
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      {content}
    </h2>
  )
}

HeaderH2.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string
}

export default HeaderH2
