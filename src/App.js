import React from 'react'

import Header from './components//Header'
import MainSection from './components//MainSection'
import Footer from './components//Footer'
import Navbar from './components//Navbar'
import FullPageLayout from './components/FullPageLayout'
import MobileMenu from './components/MobileMenu'

import PageHome from './pages/PageHome'
import PageAbout from './pages/PageAbout'
import PageOffer from './pages/PageOffer'
import PageContact from './pages/PageContact'

import classes from './styles.module.css'

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenuVisibility = (e) => {
    setIsMenuOpen(!isMenuOpen)
  }

  const smoothScrollToElement = (element) => {
    setIsMenuOpen(!isMenuOpen)
    const elementToScroll = document.querySelector(`#${element}`)
    elementToScroll.scrollIntoView()
  }

  return (
    <div
      className={classes.app}
    >
      <Header
        className={classes.header}
        id={'navbar'}
      >
        <Navbar
          toggleMenuVisibility={(e) => toggleMenuVisibility(e)}
        />
      </Header>

      {
        isMenuOpen ?
          <FullPageLayout
            className={'fullPageLayout'}
            onClick={(e) => toggleMenuVisibility(e)}
          >
            <MobileMenu
              menuList={'menuList'}
              listItemClass={'listItemClass'}
              onCloseMenuClick={toggleMenuVisibility}
              isMenuOpen={isMenuOpen}
              smoothScrollToElement={smoothScrollToElement}
            />
          </FullPageLayout> :
          null
      }

      <MainSection
        className={classes.main}
      >
        <PageHome
          id={'home'}
        />
        <PageAbout
          id={'about'}
        />
        <PageOffer
          id={'offer'}
          onCloseMenuClick={toggleMenuVisibility}
        />
        <PageContact
          id={'contact'}
        />

      </MainSection>

      <Footer
        className={classes.footer}
      >

      </Footer>

    </div>
  )
}
export default App
