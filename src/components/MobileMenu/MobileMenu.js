import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import MenuList from '../MenuList'
import MobileHeader from '../MobileHeader'

// import CloseMenuIcon from '../CloseMenuIcon'
// import Button from '../Button'
// import MenuCreinLogoSvg from '../../logo/MenuCreinLogoSvg'

import classes from './styles.module.css'

export const MobileMenu = (props) => {
  const {
    className,
    headerClass,
    menuContainer,
    menuList,
    listItemClass,
    onCloseMenuClick,
    isMenuOpen,
    smoothScrollToElement,
    ...otherProps
  } = props

  const classMenuItem = classes[menuList]
  const classListItem = classes[listItemClass]

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container >
        <MobileHeader
          className={classes.headerClass}
          buttonClassName={classes.closeMenuButton}
          onCloseMenuClick={onCloseMenuClick}
        />

      </Container>

      <Container
        className={classes.menuContainer}
      >
        <MenuList
          className={classMenuItem}
          listItemClass={classListItem}
          isMenuOpen={isMenuOpen}
          smoothScrollToElement={smoothScrollToElement}
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
  listItemClass: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  onCloseMenuClick: PropTypes.func,
  smoothScrollToElement: PropTypes.func
}

export default MobileMenu
