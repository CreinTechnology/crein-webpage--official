import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const CreinLogoSvg = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <svg
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      xmlns={'http://www.w3.org/2000/svg'}
      width={124.222}
      height={27.24}
      {...otherProps}
    >
      <g fill={'#00ff29'}>
        <path d={'m112.811.899.902-.9 8.304 8.328a3.122 3.122 0 0 1-.006 4.415l-1.259 1.255-7.948-7.97a3.625 3.625 0 0 1 .007-5.128Z'} />
        <path d={'m112.772 20.093 1.27 1.227 8.174-8.458a2.892 2.892 0 0 0 .311-4.042l-5.755-5.748c3.763 6.255-.436 8.822-3.646 12.327-1.389 1.44-1.554 3.541-.354 4.694Z'} />
        <path d={'M113.673 20.952c-1.192-1.153-1.031-3.254.361-4.694 3.191-3.484 7.359-6.042 3.713-12.216l-.994-.993c3.763 6.255-.429 8.826-3.639 12.331-1.392 1.44-1.553 3.541-.361 4.694l1.284 1.246.008-.008ZM112.25 26.342l-.903.898-8.292-8.339a3.122 3.122 0 0 1 .012-4.414l1.26-1.254 7.938 7.982a3.625 3.625 0 0 1-.015 5.127Z'} />
        <path d={'m112.322 7.15-1.267-1.229-8.187 8.445a2.892 2.892 0 0 0-.317 4.041l5.738 5.757c-3.753-6.261.45-8.822 3.665-12.322 1.394-1.437 1.559-3.538.368-4.692Z'} />
        <path d={'m112.337 7.169-1.282-1.248-.008.008.371.36c1.19 1.154 1.025 3.256-.368 4.693-3.2 3.479-7.368 6.03-3.732 12.21l.992.995c-3.753-6.26.443-8.825 3.658-12.325 1.395-1.438 1.56-3.539.369-4.693ZM5.369 17.845a1.186 1.186 0 0 0 1.342 1.342v4.025Q0 23.212 0 17.844V9.79q0-5.369 6.711-5.369h5.369v4.027H6.711A1.185 1.185 0 0 0 5.369 9.79Zm8.053 5.368H8.053v-4.026h5.369a1.186 1.186 0 0 0 1.342-1.341V15.16h5.369v2.685q0 5.369-6.711 5.368Zm1.342-13.422a1.186 1.186 0 0 0-1.342-1.342V4.422q6.711 0 6.711 5.369v2.685h-5.369Z'} />
        <path d={'M36.232 8.449H22.81l-2.685-4.027h16.106q6.712 0 6.711 5.369v1.342q0 4.31-4.322 5.154l4.322 6.926h-6.711l-6.71-10.738h6.71a1.185 1.185 0 0 0 1.342-1.342V9.791a1.186 1.186 0 0 0-1.341-1.342Zm-8.053 14.764H22.81V9.791h5.369Z'} />
        <path d={'M64.409 8.449h-18.79l-2.685-4.027h21.475Zm-18.79 1.342h5.369v9.4H64.41v4.026H45.619Zm18.791 6.711h-8.053l-4.023-4.03h12.08ZM67.087 4.422h5.369v18.791h-5.369ZM75.137.396l20.132 20.133v6.711L75.137 7.107Zm5.369 13.958v8.859h-5.369V8.986Zm9.4-1.073V4.423h5.369V18.65Z'} />
      </g>
    </svg>
  )
}

CreinLogoSvg.propTypes = {
  className: PropTypes.string
}

export default CreinLogoSvg