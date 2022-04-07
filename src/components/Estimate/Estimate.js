import React from 'react'
import PropTypes from 'prop-types'

import MobileHeader from '../MobileHeader'

import classes from './styles.module.css'
import Button from '../Button'

export const Estimate = (props) => {
  const {
    className,
    headerClass,
    buttonClassName,
    onCloseMenuClick,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <MobileHeader
        className={headerClass}
        buttonClassName={buttonClassName}
        onCloseMenuClick={onCloseMenuClick}
      />

      <Button
        label={'Back to main page'}
        sizeVariant
        colorVariant
      />
    </div>
  )
}

Estimate.propTypes = {
  className: PropTypes.string,
  headerClass: PropTypes.string,
  buttonClassName: PropTypes.string,
  onCloseMenuClick: PropTypes.func.isRequired
}

export default Estimate
