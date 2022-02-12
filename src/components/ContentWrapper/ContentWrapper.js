import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Typography from '../Typography'

import HelloIcon from '../../icons/HelloIcon'

import classes from './styles.module.css'

export const ContentWrapper = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.iconWrapper}
      >
        <HelloIcon
          className={classes.helloIcon}
        />
      </Container>

      <Container
        className={classes.introduceWrapper}
      >
        <Container
          className={classes.textWrapper}
        >
          <Typography
            className={classes.helloText}
            variant={'h1'}
          >
            Hej!
          </Typography>
        </Container>

        <Container
          className={classes.nameWrapper}
        >
          <Typography
            className={classes.nameText}
            variant={'h2'}
          >
            Mam na imię Paweł.
          </Typography>
        </Container>

        <Container
          className={classes.descriptionWrapper}
        >
          <Typography
            className={classes.descriptionText}
            variant={'h2'}
          >
            W Crein Technology
            produkujemy strony
            i aplikacje internetowe.
          </Typography>
        </Container>

      </Container>
    </div>
  )
}

ContentWrapper.propTypes = {
  className: PropTypes.string
}

export default ContentWrapper
