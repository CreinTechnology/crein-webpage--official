import React from 'react'

import Container from './components/Container'
import CreinLogoSvg from './components/CreinLogoSvg'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <Container>
        <CreinLogoSvg
          className={'logo'}
        />
      </Container>
    </div>
  )
}
export default App
