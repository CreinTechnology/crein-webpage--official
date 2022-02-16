import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import MenuCreinLogoSvg from '../../logo/MenuCreinLogoSvg'
import MenuBarsIcon from '../MenuBarsIcon'

import classes from './styles.module.css'

export const Navbar = (props) => {
  const {
    className,
    children,
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
            className={classes.menuIcon}
          />
        </Container>

      </Container>
    </nav>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Navbar
