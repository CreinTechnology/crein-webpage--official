import React from 'react'
import PropTypes from 'prop-types'

import Navbar from '../../components/Navbar'
import ContentWrapper from '../../components/ContentWrapper'

import classes from './styles.module.css'

export const PageHome = (props) => {
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
        className={classes.navbar}
      />

      <ContentWrapper
        className={classes.contentWrapper}
      />

    </div>
  )
}

PageHome.propTypes = {
  className: PropTypes.string
}

export default PageHome
