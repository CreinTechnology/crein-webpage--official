import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import CloseMenuIcon from '../CloseMenuIcon'
import MenuList from '../MenuList'

import MenuCreinLogoSvg from '../../logo/MenuCreinLogoSvg'

import classes from './styles.module.css'

export const MobileMenu = (props) => {
  const {
    className,
    headerClass,
    menuContainer,
    menuList,
    listItemClass,
    ...otherProps
  } = props

  const classMenuItem = classes[menuList]
  const classListItem = classes[listItemClass]

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.headerClass}
      >
        <Container>
          < MenuCreinLogoSvg/>
        </Container>

        <Container>
          <CloseMenuIcon />
        </Container>
      </Container>

      <Container
        className={classes.menuContainer}
      >
        <MenuList
          className={classMenuItem}
          listItemClass={classListItem}
        />
      </Container>
    </div>
  )
}

MobileMenu.propTypes = {
  className: PropTypes.string,
  headerClass: PropTypes.string,
  menuContainer: PropTypes.string,
  menuList: PropTypes.string,
  listItemClass: PropTypes.string
}

export default MobileMenu
