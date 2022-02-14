import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const PageOffer = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <section
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </section>
  )
}

PageOffer.propTypes = {
  className: PropTypes.string
}

export default PageOffer
