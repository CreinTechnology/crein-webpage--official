import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/Container'
import Typography from '../../components/Typography'

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
        className={classes.contentWrapper}
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

      </Container>
    </div>
  )
}

PageHome.propTypes = {
  className: PropTypes.string
}

export default PageHome
