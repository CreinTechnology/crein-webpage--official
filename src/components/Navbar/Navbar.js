import React from 'react'
import PropTypes from 'prop-types'

import CreinLogoSvg from '../CreinLogoSvg'
import Container from '../Container'

import classes from './styles.module.css'

export const Navbar = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={'navbar__logo'}
      >
        <CreinLogoSvg />
      </Container>

      <Container
        className={'navbar__menu'}
      >
        Strona główna || O mnie || Oferta || Kontakt
      </Container>
    </div>
  )
}

Navbar.propTypes = {
  className: PropTypes.string
}

export default Navbar
