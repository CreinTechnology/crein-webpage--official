import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'
import Paragraph from '../Paragraph'

import classes from './styles.module.css'

export const Footer = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <footer
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.contentWrapper}
      >
        <Container
          className={classes.wrapper}
        >
          <Container
            className={classes.flexWrapper}
          >
            <Container
              className={classes.textWrapper}
            >
              <Paragraph
                className={classes.colorGreen}
                content={'Dane firmy:'}
              />

              <Paragraph
                className={classes.colorWhite}
                variant={classes.sizeVariant}
                content={'Crein Technology Paweł Czerniak'}
              />

              <Paragraph
                className={classes.colorWhite}
                variant={classes.sizeVariant}
                content={'NIP: 669-246-42-84'}
              />
            </Container>

            <Container
              className={classes.textWrapper}
            >
              <Paragraph
                className={classes.colorGreen}
                content={'Pracujemy:'}
              />

              <Paragraph
                className={classes.colorWhite}
                variant={classes.sizeVariant}
                content={'100% zdalnie'}
              />

              <Paragraph
                className={classes.colorWhite}
                variant={classes.sizeVariant}
                content={'Realizujemy zlecenia „white-label”'}
              />
            </Container>

            <Container
              className={classes.textWrapper}
            >
              <Paragraph
                className={classes.colorGreen}
                content={'Polityka prywatności'}
              />

              <Paragraph
                className={classes.colorWhite}
                variant={classes.sizeVariant}
                content={'Dowiesz się, kto jest administratorem Twoich danych oraz jak je przetwarzamy.'}
              />
            </Container>

            <Container
              className={classes.textWrapper}
            >
              <Paragraph
                className={classes.colorGreen}
                content={'Polityka cookies'}
              />

              <Paragraph
                className={classes.colorWhite}
                variant={classes.sizeVariant}
                content={'Dowiesz się, jakich plików cookies używamy oraz w jaki sposób możesz nimi zarządzać.'}
              />
            </Container>

          </Container>
        </Container>
      </Container>

    </footer>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
