import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const MainSection = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <main
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </main>
  )
}

MainSection.propTypes = {
  className: PropTypes.string
}

export default MainSection
