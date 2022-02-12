import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import CreinLogoSvg from '../CreinLogoSvg'
import MenuBarsIcon from '../MenuBarsIcon'

import classes from './styles.module.css'

export const Menu = (props) => {
  const {
    className,
    children,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.logoWrapper}
      >
        <CreinLogoSvg
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
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Menu
