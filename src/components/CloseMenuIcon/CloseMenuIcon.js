import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const CloseMenuIcon = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <svg
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      xmlns={'http://www.w3.org/2000/svg'}
      width={27}
      height={27}
      {...otherProps}
    >
      <g fill={'#00ff29'}>
        <path d={'m18.796 17.206-3.706-3.705 3.705-3.705a1.124 1.124 0 0 0-1.589-1.589l-3.705 3.705-3.705-3.705a1.124 1.124 0 0 0-1.589 1.589l3.705 3.705-3.705 3.705a1.086 1.086 0 0 0 0 1.589 1.116 1.116 0 0 0 1.589 0l3.705-3.705 3.705 3.705a1.129 1.129 0 0 0 1.589 0 1.116 1.116 0 0 0 .001-1.589Z'} />
        <path d={'M13.5 1.817a11.678 11.678 0 1 1-8.262 3.42 11.605 11.605 0 0 1 8.262-3.42M13.5 0A13.5 13.5 0 1 0 27 13.5 13.5 13.5 0 0 0 13.5 0Z'} />
      </g>
    </svg>
  )
}

CloseMenuIcon.propTypes = {
  className: PropTypes.string
}

export default CloseMenuIcon
