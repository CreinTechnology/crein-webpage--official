import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/Container'
import HeaderH2 from '../../components/HeaderH2'
import ContentWrapper from '../../components/ContentWrapper'
import ImageWrapper from '../../components/ImageWrapper'
import Paragraph from '../../components/Paragraph'
import ContactForm from '../../components/ContactForm'

import contactIcon from '../../images/contactIcon.png'

import classes from './styles.module.css'

export const PageContact = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <section
      className={`${classes.contact}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <HeaderH2
        className={classes.mainHeader}
        content={'Kontakt'}
      />

      <ContentWrapper
        className={classes.contentWrapper}
      >
        <Container
          className={classes.textWrapper}
        >

          <ImageWrapper
            className={classes.imageWrapper}
            avatarClassName={classes.avatar}
            avatarUrl={contactIcon}
            avatarText={'Avatar zachęcający do kontaktu z Crein Technology.'}
          />

          <HeaderH2
            className={classes.textHeader}
            content={'Zadzwoń lub napisz - jak Ci wygodnie!'}
          />

          <Paragraph
            className={classes.colorGreen}
            variant={classes.bold}
            content={'Adres e-mail:'}
          />

          <Paragraph
            variant={classes.semiBold}
            content={'kontakt@crein.pl'}
          />

          <Paragraph
            className={classes.colorGreen}
            variant={classes.bold}
            content={'Telefon:'}
          />

          <Paragraph
            variant={classes.semiBold}
            content={'+48 575 06 77 08'}
          />

          <Paragraph
            className={classes.colorGreen}
            variant={classes.bold}
            content={'Poniedziałek - piątek:'}
          />

          <Paragraph
            variant={classes.semiBold}
            content={'09:00 - 17:00'}
          />

        </Container>

        <Container
          className={classes.formWrapper}
        >
          <ContactForm
            className={classes.contactFormWrapper}
            formContainer={classes.formContainer}
            textField={classes.textField}
            messageContent={classes.messageContent}
            agreeContainer={classes.agreeContainer}
            checkboxContainer={classes.checkboxContainer}
            checkboxField={classes.checkboxField}
            labelContainer={classes.labelContainer}
            labelField={classes.labelField}
            buttonClass={classes.buttonClass}
          />
        </Container>

      </ContentWrapper>
    </section>
  )
}

PageContact.propTypes = {
  className: PropTypes.string
}

export default PageContact
