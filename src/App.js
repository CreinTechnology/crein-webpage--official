import React from 'react'

import CreinLogoSvg from './components/CreinLogoSvg'
import Container from './components/Container'
import Typography from './components/Typography'

import MenuBarsIcon from './components/MenuBarsIcon'
import HelloIcon from './icons/HelloIcon'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <Container
        className={'menuWrapper'}
      >
        <Container
          className={'logoWrapper'}
        >
          <CreinLogoSvg
            className={'logo'}
          />
        </Container>

        <Container
          className={'menuIconWrapper'}
        >
          <MenuBarsIcon />
        </Container>
      </Container>

      <Container
        className={'mainContent'}
      >
        <Container
          className={'imageWrapper'}
        >
          <HelloIcon />
        </Container>

        <Container
          className={'textWrapper'}
        >
          <Typography></Typography>
        </Container>

      </Container>
    </div>
  )
}
export default App
