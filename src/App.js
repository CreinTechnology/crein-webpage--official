import React from 'react'

import Container from './components/Container'
import FullPageLayout from './components/FullPageLayout'
import Navbar from './components//Navbar'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <Container
        className={classes.header}
      >
        <Navbar />
      </Container>

      <Container
        className={classes.main}
      >
        <FullPageLayout />
      </Container>

      <Container
        className={classes.footer}
      >

      </Container>
    </div>
  )
}
export default App
