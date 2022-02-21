import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '../ListItem'

import classes from './styles.module.css'

export const MenuList = (props) => {
  const {
    className,
    listItemClass,
    isMenuOpen,
    smoothScrollToElement,
    ...otherProps
  } = props

  return (
    <ul
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <ListItem
        className={listItemClass}
        text={'Strona główna'}
        onClick={(e) => smoothScrollToElement('home')}
      />

      <ListItem
        className={listItemClass}
        text={'O mnie'}
        onClick={(e) => smoothScrollToElement('about')}
      />

      <ListItem
        className={listItemClass}
        text={'Oferta'}
        onClick={(e) => smoothScrollToElement('offer')}
      />

      <ListItem
        className={listItemClass}
        text={'Wycena'}
        onClick={(e) => smoothScrollToElement('estimate')}
      />

      <ListItem
        className={listItemClass}
        text={'Kontakt'}
        onClick={(e) => smoothScrollToElement('contact')}
      />

    </ul>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  listItemClass: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  smoothScrollToElement: PropTypes.func
}

export default MenuList
