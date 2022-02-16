import React from 'react'
import PropTypes from 'prop-types'

import TextField from '../TextField'
import Container from '../Container'
import Button from '../Button'

import classes from './styles.module.css'

export const ContactForm = (props) => {
  const {
    className,
    containerClass,
    textFieldClass,
    contentClass,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <form
        action={'https://www.actionforms.io/e/r/crein-technology'}
        method={'POST'}
      >
        <Container
          className={containerClass}
        >
          <TextField
            className={textFieldClass}
            placeholder={'Imię'}
            type={'text'}
            name={'Imię'}
            required
          />

          <TextField
            className={textFieldClass}
            placeholder={'E-mail'}
            type={'text'}
            name={'E-mail'}
            required
          />
        </Container>

        <Container>
          <textarea
            className={contentClass}
            placeholder={'Tu wpisz swoją wiadomość …'}
            type={'text'}
            name={'Treść wiadomości'}
            required
          >
          </textarea>
        </Container>

        <Button
          type={'submit'}
          label={'WYŚLIJ'}
        />
      </form>
    </div>
  )
}

ContactForm.propTypes = {
  className: PropTypes.string,
  textFieldClass: PropTypes.string,
  containerClass: PropTypes.string,
  contentClass: PropTypes.string
}

export default ContactForm
