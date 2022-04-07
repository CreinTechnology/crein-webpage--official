import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'

import MobileHeader from '../MobileHeader'

import classes from './styles.module.css'
// import Button from '../Button'

export const Estimate = (props) => {
  const {
    className,
    headerClass,
    buttonClassName,
    onCloseMenuClick,
    onBackToMainPageButtonClick,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <MobileHeader
        className={headerClass}
        buttonClassName={buttonClassName}
        onCloseMenuClick={onCloseMenuClick}
      />

      <Button
        style={{ backgroundColor: 'white', color: 'black' }}
        variant={'contained'}
      >
        System CMS
      </Button>
      <br />
      <div>
        <Button
          style={{ backgroundColor: 'white', color: 'black' }}
          variant={'contained'}
        >
          Ilość podstron
        </Button>
        <Button
          style={{ backgroundColor: 'white', color: 'black' }}
          variant={'contained'}
          startIcon={<AddIcon />}
        >

        </Button>
      </div>
      <br />
      <Button
        style={{ backgroundColor: 'white', color: 'black' }}
        variant={'contained'}
      >
        Hosting
      </Button>
      <br />
      <Button
        style={{ backgroundColor: 'white', color: 'black' }}
        variant={'contained'}
      >
        Domena
      </Button>
      <br />
      <Button
        style={{ backgroundColor: 'white', color: 'black' }}
        variant={'contained'}
      >
        Poczta
      </Button>
      <br />
      <Button
        style={{ backgroundColor: 'white', color: 'black' }}
        variant={'contained'}
      >
        Grafika
      </Button>
    </div>
  )
}

Estimate.propTypes = {
  className: PropTypes.string,
  headerClass: PropTypes.string,
  buttonClassName: PropTypes.string,
  onCloseMenuClick: PropTypes.func.isRequired,
  onBackToMainPageButtonClick: PropTypes.func.isRequired
}

export default Estimate
