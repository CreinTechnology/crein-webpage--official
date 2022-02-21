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
  const [windowScrollPos, setWindowScrollY] = React.useState(window.scrollY)

  const toggleMenuVisibility = (e) => {
    setIsMenuOpen(!isMenuOpen)
  }

  const smoothScrollToElement = (element) => {
    setIsMenuOpen(!isMenuOpen)
    const elementToScroll = document.querySelector(`#${element}`)
    elementToScroll.scrollIntoView()
  }

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.scrollY
      setWindowScrollY(window.scrollY)

      const headerElement = document.querySelector('#navbar')

      currentScrollPos > windowScrollPos ?
        headerElement.style.transform = 'translateY(-100%)' :
        headerElement.style.transform = 'translateY(0)'
    })
  }, [windowScrollPos])

  return (
    <div
      className={classes.app}
    >
      <Header
        className={classes.header}
        id={'navbar'}
      >
        <Navbar
          onClick={(e) => toggleMenuVisibility(e)}
        />
      </Header>

      {
        isMenuOpen ?
          <FullPageLayout
            className={'fullPageLayout'}
            onClick={(e) => toggleMenuVisibility(e)}
          >
            <MobileMenu
              headerClass={'header'}
              menuContainer={'menuContainer'}
              menuList={'menuList'}
              listItemClass={'listItemClass'}
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
