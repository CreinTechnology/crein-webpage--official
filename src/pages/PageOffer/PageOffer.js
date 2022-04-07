import React from 'react'
import PropTypes from 'prop-types'

import Row from '../../components/Row'
import Container from '../../components/Container'
import Button from '../../components/Button'
import Estimate from '../../components/Estimate/'
import FullPageLayout from '../../components/FullPageLayout'

import laptopUser from '../../images/laptopUser.png'
import chilloutIcon from '../../images/chilloutIcon.png'
import ideaIcon from '../../images/ideaIcon.png'
import htmlLovers from '../../images/htmlLovers.png'
import thinkingIcon from '../../images/thinkingIcon.png'

import classes from './styles.module.css'

export const PageOffer = (props) => {
  const {
    className,
    onCloseMenuClick,
    ...otherProps
  } = props

  const [isEstimateViewed, setIsEstimateViewed] = React.useState(false)

  const toggleEstimateView = () => {
    setIsEstimateViewed(!isEstimateViewed)
  }

  return (
    <section
      className={`${classes.offer}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <div
        className={classes.contentWrapper}
      >
        <h2
          className={classes.headerText}
        >
          OFERTA
        </h2>

        <div
          className={classes.wrapper}
        >
          <div
            className={classes.imageWrapper}
          >
            <img
              className={classes.image}
              src={laptopUser}
              alt={'Internet users use mobile and notebook'}
            />
          </div>

          <div
            className={classes.textWrapper}
          >
            <h2
              className={classes.descriptionHeader}
            >
              Produkty tworzone na urządzenia mobilne i desktopowe.
            </h2>

            <h3>
              Tryby: online i offline
            </h3>

            <p
              className={classes.description}
            >
              W kraju nad Wisłą aktywni użytkownicy
              internetu stanowią ponad 84% populacji
              kraju. Ponad 52% z nich korzysta z internetu
              na urządzeniach mobilnych. Natomiast z
              urządzeń desktopowych (laptop, komputer
              stacjonarny) korzysta ponad 46%.
              Dlatego już na etapie planowania projektu implementuję rozwiązania RWD.
            </p>
          </div>
        </div>

      </div>

      <Row
        wrapperClassName={classes.imageWrapper}
        imgClassName={classes.image}
        imgSrc={chilloutIcon}
        imgAlt={'Zachowaj spokój - w Crein zajmę się resztą.'}
        headerText={'Opieka na każdym etapie projektu.'}
        descriptionClass={classes.description}
        description={`Niezależnie, czy tworzę stronę czy aplikację 
        - robię to dla Ciebie. To Twój projekt. 
        Dlatego dbam o regularny kontakt, 
        raportując postępy prac. Oprócz tego 
        oddaję do Twojej dyspozycji całą swoją 
        wiedzę - możesz konsultować wszelkie 
        nurtujące Cię kwestie! Dzięki temu realizacja 
        projektu nie pozbawi Cię spokoju.`}
      />

      <Row
        wrapperClassName={classes.imageWrapper}
        imgClassName={classes.image}
        imgSrc={ideaIcon}
        imgAlt={'Wiem, jak zapewnić Ci bezpieczeństwo.'}
        headerText={'Optymalizacja kodu i bezpieczeństwo.'}
        descriptionClass={classes.description}
        description={`Kod jest napisany dokładnie pod Twój projekt!
        Unikam więc zbędnych linijek kodu. Dzięki 
        temu realizowany dla Ciebie projekt uzyska 
        lekkość i szybkość. I co ważne - tak 
        przygotowany kod jest wyraźnie 
        bezpieczniejszy!`}
      />

      <Row
        wrapperClassName={classes.imageWrapper}
        imgClassName={classes.image}
        imgSrc={htmlLovers}
        imgAlt={'Bardzo lubię programować.'}
        headerText={'JavaScript, React i HTMLover.'}
        descriptionClass={classes.description}
        description={`Programowanie sprawia mi wiele frajdy. 
        Naprawdę lubię tę pracę!
        Do realizacji projektu wykorzystuję język 
        programowania JavaScript i technologię 
        React. Oczywiście wszystko to jest 
        oparte na fundamentach HTML i CSS.
        `}
      />

      <Row
        wrapperClassName={classes.imageWrapper}
        imgClassName={classes.image}
        imgSrc={thinkingIcon}
        imgAlt={'Czym różni się strona od aplikacji?.'}
        headerText={'Czym różni się strona od aplikacji?'}
        descriptionClass={classes.description}
        description={`Tłumacząc najprościej: strona prezentuje 
        treści, aplikacja natomiast pozwala na 
        interakcję z użytkownikiem. Na pewno miałeś już kontakt z aplikacjami. Najbardziej znanymi ich przykładami są Fb, Instagram, Netflix, Discord.
        Wartość zleconego projektu rośnie wraz z 
        poziomem jego złożoności. Im więcej 
        funkcjonalności posiadać ma Twój projekt, 
        tym więcej środków pochłonie jego 
        przygotowanie.
        `}
      />

      <Container
        className={classes.contentWrapper}
        id={'estimate'}
      >
        <h2>
          Policz, ile może kosztować Twój projekt.
        </h2>
        <p
          className={classes.description}
        >
          Pamiętaj, że uzyskana wartość nie stanowi oferty w
          rozumieniu zapisów art. 66 Kodeksu Cywilnego. Jest
          to raczej szacunkowa wycena, która może pomóc
          Ci w określeniu budżetu projektu.
        </p>

        <h3>
          Wskaż, czego potrzebujesz:
        </h3>

        <Container
          className={classes.buttonWrapper}
        >
          <Button
            className={classes.button}
            colorVariant={'neon'}
            sizeVariant={'l'}
            label={'STRONA WWW'}
            onClick={toggleEstimateView}
          />

          <Button
            className={classes.button}
            sizeVariant={'l'}
            label={'APLIKACJA'}
          />
        </Container>
      </Container>

      {
        isEstimateViewed ?
          <FullPageLayout
            className={classes.fullPageLayout__black}
          >
            <Estimate
              headerClass={classes.headerClass}
              buttonClassName={classes.closeMenuButton}
              onCloseMenuClick={toggleEstimateView}
              onBackToMainPageButtonClick={toggleEstimateView}
            />
          </FullPageLayout> :
          null
      }

    </section>
  )
}

PageOffer.propTypes = {
  className: PropTypes.string,
  toggleMenuVisibility: PropTypes.func,
  onCloseMenuClick: PropTypes.func
}

export default PageOffer
