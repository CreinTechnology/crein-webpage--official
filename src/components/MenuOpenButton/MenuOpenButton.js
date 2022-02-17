import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const MenuOpenButton = (props) => {
  const {
    className,
    onClick,
    ...otherProps
  } = props

  return (
    <button
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      onClick={onClick}
    >
      <svg
        xmlns={'http://www.w3.org/2000/svg'}
        width={27}
        height={15.75}
        {...otherProps}
      >
        <g fill={'#00ff29'}>
          <path d={'M25.875 2.25H1.125A1.128 1.128 0 0 1 0 1.125 1.128 1.128 0 0 1 1.125 0h24.75A1.128 1.128 0 0 1 27 1.125a1.128 1.128 0 0 1-1.125 1.125ZM25.875 9H1.125A1.128 1.128 0 0 1 0 7.875 1.128 1.128 0 0 1 1.125 6.75h24.75A1.128 1.128 0 0 1 27 7.875 1.128 1.128 0 0 1 25.875 9ZM25.875 15.75H1.125A1.128 1.128 0 0 1 0 14.625 1.128 1.128 0 0 1 1.125 13.5h24.75A1.128 1.128 0 0 1 27 14.625a1.128 1.128 0 0 1-1.125 1.125Z'} />
        </g>
      </svg>
    </button>
  )
}

MenuOpenButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default MenuOpenButton
