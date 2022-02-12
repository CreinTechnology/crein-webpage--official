import React from 'react'
import PropTypes from 'prop-types'

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
