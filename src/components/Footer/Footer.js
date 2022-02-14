import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Footer = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <footer
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
