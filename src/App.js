import React from 'react'

import Container from './components/Container'
import Typography from './components/Typography'
import PagesHome from './pages/PagesHome'

import HelloIcon from './icons/HelloIcon'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <PagesHome />
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
export default App
