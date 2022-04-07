import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import CloseMenuIcon from '../CloseMenuIcon'
import Button from '../Button'

import MenuCreinLogoSvg from '../../logo/MenuCreinLogoSvg'

import classes from './styles.module.css'

export const MobileHeader = (props) => {
  const {
    className,
    buttonClassName,
    onCloseMenuClick,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container>
        < MenuCreinLogoSvg/>
      </Container>

      <Button
        className={buttonClassName}
        onClick={onCloseMenuClick}
      >
        <CloseMenuIcon />
      </Button>

    </div>
  )
}

MobileHeader.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  onCloseMenuClick: PropTypes.func
}

export default MobileHeader
