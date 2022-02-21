import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import MenuCreinLogoSvg from '../../logo/MenuCreinLogoSvg'
import MenuOpenButton from '../MenuOpenButton'

import classes from './styles.module.css'

export const Navbar = (props) => {
  const {
    className,
    toggleMenuVisibility,
    ...otherProps
  } = props

  return (
    <nav
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.menuWrapper}
      >
        <Container
          className={classes.logoWrapper}
        >
          <MenuCreinLogoSvg
            className={classes.logo}
          />
        </Container>

        <Container
          className={classes.menuIconWrapper}
        >
          <MenuOpenButton
            className={classes.menuButton}
            onClick={toggleMenuVisibility}
          />
        </Container>

      </Container>
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  toggleMenuVisibility: PropTypes.func
}

export default Navbar
