import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const DesktopHomePageCreinLogo = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (

    <svg
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      xmlns={'http://www.w3.org/2000/svg'}
      xmlnsXlink={'http://www.w3.org/1999/xlink'}
      width={189}
      height={220.314}
      {...otherProps}
    >
      <defs>
        <linearGradient
          id={'a'}
          x1={1.119}
          y1={1.22}
          x2={1.119}
          y2={0.247}
          gradientUnits={'objectBoundingBox'}
        >
          <stop
            offset={0}
            stopColor={'#175015'}
          />
          <stop
            offset={0}
            stopColor={'#426611'}
          />
          <stop
            offset={0}
            stopColor={'#73800d'}
          />
          <stop
            offset={0}
            stopColor={'#9e9609'}
          />
          <stop
            offset={0}
            stopColor={'#c0a806'}
          />
          <stop
            offset={0}
            stopColor={'#dbb503'}
          />
          <stop
            offset={0}
            stopColor={'#eebf01'}
          />
          <stop
            offset={0}
            stopColor={'#f9c500'}
          />
          <stop
            offset={0}
            stopColor={'#fdc700'}
          />
          <stop
            offset={0}
            stopColor={'#132919'}
          />
          <stop
            offset={0}
            stopColor={'#2a5131'}
          />
          <stop
            offset={0.18}
            stopColor={'#2d5534'}
          />
          <stop
            offset={0.38}
            stopColor={'#35623c'}
          />
          <stop
            offset={0.59}
            stopColor={'#447849'}
          />
          <stop
            offset={0.79}
            stopColor={'#58955b'}
          />
          <stop
            offset={1}
            stopColor={'#70ba72'}
          />
        </linearGradient>
        <linearGradient
          id={'b'}
          x1={-2.556}
          y1={-0.701}
          x2={-2.556}
          y2={-1.674}
          xlinkHref={'#a'}
        />
      </defs>
      <path
        d={'M29.324 0h10.308v95.13a25.252 25.252 0 0 1-25.253 25.252H0V29.324A29.324 29.324 0 0 1 29.324 0Z'}
        transform={'rotate(-44.93 71.833 -77.857)'}
        fill={'url(#a)'}
      />
      <path
        d={'m96.358 162.509 10.265 9.92 66.11-68.4c9.692-10.028 10.816-24.664 2.512-32.69l-46.48-46.495c30.434 50.587-3.526 71.351-29.491 99.7-11.254 11.646-12.56 28.642-2.916 37.965Z'}
        fill={'#00ff29'}
      />
      <path
        d={'M103.68 169.451c-9.644-9.321-8.339-26.317 2.916-37.962 25.81-28.179 59.518-48.863 30.027-98.8l-8.036-8.032c30.434 50.587-3.468 71.382-29.433 99.729-11.254 11.645-12.56 28.641-2.916 37.962l10.385 10.074.064-.067Z'}
        fill={'#00ff29'}
      />
      <path
        d={'M29.324 0h10.308v95.13a25.251 25.251 0 0 1-25.251 25.251H0V29.324A29.324 29.324 0 0 1 29.324 0Z'}
        transform={'rotate(135.15 16.804 119.5)'}
        fill={'url(#b)'}
      />
      <path
        d={'m92.755 57.823-10.249-9.937-66.216 68.3c-9.707 10.013-10.854 24.646-2.562 32.686l46.407 46.561c-30.354-50.638 3.637-71.347 29.646-99.655 11.272-11.624 12.603-28.618 2.974-37.955Z'}
        fill={'#00ff29'}
      />
      <path
        d={'m92.874 57.978-10.369-10.09-.065.067 3 2.912c9.629 9.336 8.3 26.33-2.975 37.958-25.854 28.139-59.6 48.771-30.179 98.75l8.023 8.045c-30.354-50.634 3.579-71.376 29.588-99.683 11.275-11.629 12.607-28.623 2.977-37.959Z'}
        fill={'#00ff29'}
      />
    </svg>
  )
}

DesktopHomePageCreinLogo.propTypes = {
  className: PropTypes.string
}

export default DesktopHomePageCreinLogo
