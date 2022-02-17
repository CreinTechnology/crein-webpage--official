import React from 'react'

import Header from './components//Header'
import MainSection from './components//MainSection'
import Footer from './components//Footer'
import Navbar from './components//Navbar'
// import FullPageLayout from './components/FullPageLayout'
// import MobileMenu from './components/MobileMenu'

import PageHome from './pages/PageHome'
import PageAbout from './pages/PageAbout'
import PageOffer from './pages/PageOffer'
import PageContact from './pages/PageContact'

import classes from './styles.module.css'

export const App = () => {
  // const [isMenuOpen, setIsMenuOpen] = React.useState()

  return (
    <div
      className={classes.app}
    >
      <Header
        className={classes.header}
      >
        <Navbar
          onClick={() => console.log('You clicked navbar button!')}
        />
      </Header>

      <MainSection
        className={classes.main}
      >
        <PageHome />
        <PageAbout />
        <PageOffer />
        <PageContact />

      </MainSection>

      <Footer
        className={classes.footer}
      >

      </Footer>

      {/* <FullPageLayout
        className={'fullPageLayout'}
      >
        <MobileMenu
          headerClass={'header'}
          menuContainer={'menuContainer'}
          menuList={'menuList'}
          listItemClass={'listItemClass'}
        />
      </FullPageLayout> */}
    </div>
  )
}
export default App
