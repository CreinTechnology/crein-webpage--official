import React from 'react'

import Header from './components//Header'
import MainSection from './components//MainSection'
import Footer from './components//Footer'
import Navbar from './components//Navbar'

import PageHome from './pages/PageHome'
import PageOffer from './pages/PageOffer'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <Header
        className={classes.header}
      >
        <Navbar />
      </Header>

      <MainSection
        className={classes.main}
      >
        <PageHome />
        <PageOffer />

      </MainSection>

      <Footer
        className={classes.footer}
      >

      </Footer>
    </div>
  )
}
export default App
