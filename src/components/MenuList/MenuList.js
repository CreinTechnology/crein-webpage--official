import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '../ListItem'

import classes from './styles.module.css'

export const MenuList = (props) => {
  const {
    className,
    listItemClass,
    onCloseMenuClick,
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
        onCloseMenuClick={onCloseMenuClick}
      />

      <ListItem
        className={listItemClass}
        text={'O mnie'}
        onCloseMenuClick={onCloseMenuClick}
      />

      <ListItem
        className={listItemClass}
        text={'Oferta'}
        onCloseMenuClick={onCloseMenuClick}
      />

      <ListItem
        className={listItemClass}
        text={'Wycena'}
        onCloseMenuClick={onCloseMenuClick}
      />

      <ListItem
        className={listItemClass}
        text={'Kontakt'}
        onCloseMenuClick={onCloseMenuClick}
      />

    </ul>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  listItemClass: PropTypes.string,
  onCloseMenuClick: PropTypes.func
}

export default MenuList
