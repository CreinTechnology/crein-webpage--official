import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import MenuCreinLogoSvg from '../../logo/MenuCreinLogoSvg'
import MenuBarsIcon from '../MenuBarsIcon'

import classes from './styles.module.css'

export const Navbar = (props) => {
  const {
    className,
    onClick,
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
          <MenuBarsIcon
            className={classes.menuButton}
            onClick={onClick}
          />
        </Container>

      </Container>
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Navbar
