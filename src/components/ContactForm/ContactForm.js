import React from 'react'
import PropTypes from 'prop-types'
import { useForm, ValidationError } from '@formspree/react'

import Container from '../Container'
import TextField from '../TextField'
import Textarea from '../Textarea'
import Button from '../Button'

import classes from './styles.module.css'

export const ContactForm = (props) => {
  const {
    className,
    formContainer,
    textField,
    messageContent,
    agreeContainer,
    checkboxContainer,
    checkboxField,
    labelContainer,
    labelField,
    buttonClass,
    ...otherProps
  } = props

  const [state, handleSubmit] = useForm('xyyowwle')
  if (state.succeeded) {
    return <p>Dziękuję za wiadomość!</p>
  }

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <form
        className={formContainer}
        onSubmit={handleSubmit}
      >
        <TextField
          className={textField}
          placeholder={'Imię'}
          type={'text'}
          name={'text'}
          required
        />

        <TextField
          className={textField}
          placeholder={'E-mail'}
          id={'email'}
          type={'email'}
          name={'email'}
          required
        />

        <ValidationError
          prefix={'Email'}
          field={'email'}
          errors={state.errors}
        />

        <Textarea
          className={messageContent}
          placeholder={'Tu wpisz swoją wiadomość …'}
          id={'message'}
          name={'message'}
          required
        />

        <Container
          className={agreeContainer}
        >
          <Container
            className={checkboxContainer}
          >
            <TextField
              className={checkboxField}
              type={'checkbox'}
              id={'agreeCheckbox'}
              required
            />
          </Container>

          <Container
            className={labelContainer}
          >
            <label
              htmlFor={'agreeCheckbox'}
              className={labelField}
            >
              Wyrażam zgodę na przetwarzanie przez Crein Technology, NIP: 6692464284, moich danych osobowych, zawartych w formularzu kontaktowym, w celu udzielenia odpowiedzi na przesłane przeze mnie zapytanie.
            </label>
          </Container>

        </Container>

        <Button
          className={buttonClass}
          disabled={state.submitting}
          colorVariant={'neon'}
          type={'submit'}
          label={'WYŚLIJ'}
        />
      </form>
    </div>
  )
}

ContactForm.propTypes = {
  className: PropTypes.string,
  formContainer: PropTypes.string,
  textField: PropTypes.string,
  agreeContainer: PropTypes.string,
  labelField: PropTypes.string,
  messageContent: PropTypes.string,
  checkboxContainer: PropTypes.string,
  checkboxField: PropTypes.string,
  labelContainer: PropTypes.string,
  buttonClass: PropTypes.string
}

export default ContactForm
