import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const Row = (props) => {
  const {
    className,
    wrapperClassName,
    imgClassName,
    imgSrc,
    imgAlt,
    headerText,
    subHeaderText,
    descriptionClass,
    description,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={`${wrapperClassName ? ` ${wrapperClassName}` : ''}`}
      >
        <img
          className={`${imgClassName ? ` ${imgClassName}` : ''}`}
          src={imgSrc}
          alt={imgAlt}
        />
      </div>

      <div>
        <h2>
          {headerText}
        </h2>
        <h3>
          {subHeaderText}
        </h3>
        <p
          className={`${descriptionClass ? ` ${descriptionClass}` : ''}`}
        >
          {description}
        </p>
      </div>

    </div>
  )
}

Row.propTypes = {
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  headerText: PropTypes.string.isRequired,
  subHeaderText: PropTypes.string,
  descriptionClass: PropTypes.string,
  description: PropTypes.string
}

export default Row
