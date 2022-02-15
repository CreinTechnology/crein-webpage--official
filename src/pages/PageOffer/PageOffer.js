import React from 'react'
import PropTypes from 'prop-types'

import H2Element from '../../components/H2Element'
import Container from '../../components/Container'

import laptopUser from '../../images/laptopUser.png'

import classes from './styles.module.css'

export const PageOffer = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <section
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <H2Element
        className={classes.headerText}
      >
        Oferta
      </H2Element>

      <Container>
        <Container>
          <img
            className={classes.image}
            src={laptopUser}
            alt={'Laptop user'}
            width={'150px'}
            height={'150px'}
          />
        </Container>

        <Container>
          <p
            className={classes.descriptText}
          >
            Produkty idealnie dopasowane do urządzeń mobilnych i desktopowych.
          </p>
          <p>
            W kraju nad Wisłą aktywni użytkownicy internetu stanowią ponad 84% populacji kraju. <br />
            Ponad 52% z nich korzysta z internetu na urządzeniach mobilnych. Natomiast z urządzeń desktopowych (laptop, komputer stacjonarny) korzysta ponad 46%.
            Biorąc to pod uwagę tworzymy takie aplikacje, które potrafią dostosować się do typu urządzenia.
          </p>
        </Container>

      </Container>

    </section>
  )
}

PageOffer.propTypes = {
  className: PropTypes.string
}

export default PageOffer
