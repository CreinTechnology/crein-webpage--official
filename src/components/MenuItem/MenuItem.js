import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'

import classes from './styles.module.css'

export const MenuItem = (props) => {
  const {
    className,
    text,
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={'textWrapper'}
      >
        <Typography
          className={'text'}
          variant={'body3'}
        >
          {text}
        </Typography>

      </Container>
    </li>
  )
}

MenuItem.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

export default MenuItem
