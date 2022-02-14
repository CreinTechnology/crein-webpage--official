import React from 'react'

import Header from './components//Header'
import MainSection from './components//MainSection'
import Footer from './components//Footer'
import Navbar from './components//Navbar'

import PageHome from './pages/PageHome'
// import PageOffer from './pages/PageOffer'
import laptopUser from './images/laptopUser.png'

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

        <div>
          <img
            src={laptopUser}
            alt={'Laptop user'}
            width={'100px'}
            height={'100px'}
          />
        </div>

        <p>
          Produkty idealnie dopasowane do urządzeń mobilnych i desktopowych.
        </p>
        <p>
          W kraju nad Wisłą aktywni użytkownicy internetu stanowią ponad 84% populacji kraju. <br />
          Ponad 52% z nich korzysta z internetu na urządzeniach mobilnych. Natomiast z urządzeń desktopowych (laptop, komputer stacjonarny) korzysta ponad 46%.
          Biorąc to pod uwagę tworzymy takie aplikacje, które potrafią dostosować się do typu urządzenia.
        </p>

      </MainSection>

      <Footer
        className={classes.footer}
      >

      </Footer>
    </div>
  )
}
export default App
