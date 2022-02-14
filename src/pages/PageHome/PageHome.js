import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/Container'

import HelloIcon from '../../icons/HelloIcon'

import classes from './styles.module.css'

export const PageHome = (props) => {
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
        className={classes.homeContentWrapper}
      >
        <Container
          className={classes.iconContainer}
        >
          <HelloIcon
            className={classes.helloIcon}
          />
        </Container>

        <Container
          className={classes.textWrapper}
        >

          <h1
            className={classes.h1Element}
          >
            Hej!
          </h1>

          <h2
            className={classes.nameText}
          >
            Mam na imię Paweł.
          </h2>

          <h2
            className={classes.descriptionText}
          >
            W Crein Technology produkujemy aplikacje <br />
            i strony internetowe.
          </h2>

        </Container>

      </Container>
    </div>
  )
}

PageHome.propTypes = {
  className: PropTypes.string
}

export default PageHome
