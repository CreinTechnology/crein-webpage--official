import React from 'react'
import PropTypes from 'prop-types'

import ListItem from '../ListItem'

import classes from './styles.module.css'

export const MenuList = (props) => {
  const {
    className,
    listItemClass,
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
      />

      <ListItem
        className={listItemClass}
        text={'O mnie'}
      />

      <ListItem
        className={listItemClass}
        text={'Oferta'}
      />

      <ListItem
        className={listItemClass}
        text={'Wycena'}
      />

      <ListItem
        className={listItemClass}
        text={'Kontakt'}
      />

    </ul>
  )
}

MenuList.propTypes = {
  className: PropTypes.string,
  listItemClass: PropTypes.string
}

export default MenuList
