import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/Container'

import helloImage from '../../images/helloImage.png'

import classes from './styles.module.css'

export const PageAbout = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <section
      className={`${classes.about}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.aboutContentWrapper}
      >

        <Container
          className={classes.imageWrapper}
        >
          <img
            className={classes.image}
            src={helloImage}
            alt={'Laptop user'}
            width={'150px'}
            height={'150px'}
          />
        </Container>

        <Container
          className={classes.textWrapper}
        >
          <h2
            className={classes.headerText}
          >
            Cześć! Nazywam się Paweł Czerniak.
          </h2>

          <p
            className={classes.description}
          >
            Zawodowo jestem programistą, prywatnie - pasjonatem Formuły 1.
          </p>

          <p
            className={classes.description}
          >
            Prowadzę firmę Crein Technology, w której odpowiadam za wytwarzanie aplikacji.
          </p>

          <p
            className={classes.description}
          >
            W procesie producji wykorzystuję język JavaScript, który
            w ostatnich latach bardzo się rozwinął, jego najpopularniejszą bibliotekę,
            stworzoną przez Facebooka -  React oraz fundamentalne HTML i CSS.
          </p>

          <div
            className={classes.iconsWrapper}
          >
            <div>
              <svg
                className={classes.techstackIcon}
                xmlns={'http://www.w3.org/2000/svg'}
                width={'30.857'}
                height={'36'}
                viewBox={'0 0 30.857 36'}
              >
                <path
                  id={'Icon_awesome-html5'}
                  data-name={'Icon awesome-html5'}
                  d={'M0,2.25,2.8,34.055,15.388,38.25l12.664-4.195,2.8-31.805ZM24.766,12.528H10l.329,3.97H24.437L23.344,28.422l-7.867,2.17v.024h-.088L7.457,28.422l-.482-6.091h3.833l.281,3.062,4.3,1.165L19.7,25.393l.482-5H6.774L5.746,8.695H25.12l-.354,3.833Z'}
                  transform={'translate(0 -2.25)'}
                  fill={'#fff'}
                />
              </svg>
            </div>

            <div>
              <svg
                className={classes.techstackIcon}
                xmlns={'http://www.w3.org/2000/svg'}
                width={'38.571'}
                height={'36'}
                viewBox={'0 0 38.571 36'}
              >
                <path
                  id={'Icon_awesome-css3'}
                  data-name={'Icon awesome-css3'}
                  d={'M38.571,2.25,33.429,31.821,15.485,38.25,0,31.821,1.575,24.2H8.164l-.643,3.262,9.354,3.568,10.776-3.568,1.511-7.8H2.371l1.286-6.589H30.471l.844-4.235H4.524L5.834,2.25H38.571Z'}
                  transform={'translate(0 -2.25)'}
                  fill={'#fff'}
                />
              </svg>
            </div>

            <div>
              <svg
                className={classes.techstackIcon}
                xmlns={'http://www.w3.org/2000/svg'}
                width={'36'}
                height={'36'}
                viewBox={'0 0 36 36'}
              >
                <path
                  id={'Icon_simple-javascript'}
                  data-name={'Icon simple-javascript'}
                  d={'M0,0H36V36H0ZM33.051,27.414c-.263-1.642-1.332-3.023-4.5-4.309-1.1-.517-2.331-.878-2.7-1.71a1.771,1.771,0,0,1-.069-1.058,1.719,1.719,0,0,1,2.273-.99,2.44,2.44,0,0,1,1.464,1.35c1.551-1.014,1.551-1.014,2.632-1.687a6.191,6.191,0,0,0-.879-1.17,5.038,5.038,0,0,0-4.251-1.551l-1.058.133A4.835,4.835,0,0,0,23.4,17.929a4.706,4.706,0,0,0,.854,6.706c2.048,1.53,5.042,1.866,5.424,3.307.36,1.755-1.305,2.318-2.949,2.115a3.949,3.949,0,0,1-2.632-2L21.35,29.631a6.066,6.066,0,0,0,1.215,1.663c2.61,2.634,9.135,2.5,10.306-1.506a5.077,5.077,0,0,0,.111-2.475l.069.1ZM19.576,16.546H16.2c0,2.907-.014,5.8-.014,8.708,0,1.848.094,3.545-.207,4.066-.495,1.034-1.77.9-2.349.72a2.894,2.894,0,0,1-1.245-1.282,1.287,1.287,0,0,0-.191-.294L9.462,30.151a5.306,5.306,0,0,0,1.986,2.275,6.6,6.6,0,0,0,4.81.607,4.213,4.213,0,0,0,2.716-2.117c.765-1.4.6-3.1.6-5.019.018-3.081,0-6.163,0-9.269l.006-.084Z'}
                  fill={'#fff'}
                />
              </svg>
            </div>

            <div>
              <svg
                className={classes.techstackIcon}
                xmlns={'http://www.w3.org/2000/svg'}
                width={'41.141'}
                height={'36'}
                viewBox={'0 0 41.141 36'}
              >
                <path
                  id={'Icon_awesome-react'}
                  data-name={'Icon awesome-react'}
                  d={'M33.6,13.917q-.651-.217-1.3-.41c.072-.3.137-.595.2-.892.988-4.789.337-8.638-1.856-9.908-2.113-1.213-5.56.048-9.048,3.086-.346.3-.683.611-1,.924-.217-.209-.442-.418-.667-.619-3.656-3.246-7.32-4.612-9.514-3.335C8.308,3.985,7.682,7.609,8.566,12.141c.088.45.185.892.3,1.342-.514.145-1.02.305-1.495.474C3.078,15.444,0,17.79,0,20.217c0,2.507,3.278,5.022,7.738,6.549.362.121.723.241,1.093.346-.121.482-.225.956-.321,1.446-.844,4.46-.185,8,1.92,9.208,2.17,1.254,5.818-.032,9.369-3.142.281-.249.562-.506.844-.779.354.346.723.675,1.093,1C25.175,37.8,28.573,39,30.671,37.782c2.17-1.254,2.877-5.054,1.961-9.683q-.108-.53-.241-1.085c.257-.072.506-.153.755-.233,4.636-1.535,8-4.018,8-6.565,0-2.435-3.166-4.8-7.537-6.3ZM22.732,7.1c2.989-2.6,5.777-3.624,7.047-2.893,1.358.779,1.88,3.929,1.029,8.067-.056.273-.112.538-.185.8a41.134,41.134,0,0,0-5.408-.852,40.6,40.6,0,0,0-3.423-4.267c.313-.3.619-.579.94-.86Zm-9.3,17.292c.41.7.828,1.4,1.27,2.081a36.385,36.385,0,0,1-3.728-.6,37.536,37.536,0,0,1,1.31-3.576c.37.707.747,1.406,1.149,2.1ZM11,14.721c1.157-.257,2.386-.466,3.664-.627-.426.667-.844,1.35-1.237,2.041s-.779,1.382-1.141,2.089c-.506-1.2-.932-2.37-1.286-3.5Zm2.2,5.536c.53-1.109,1.109-2.194,1.72-3.262s1.27-2.105,1.961-3.126c1.205-.088,2.435-.137,3.688-.137s2.491.048,3.688.137q1.024,1.519,1.953,3.11t1.744,3.246q-.808,1.663-1.736,3.278c-.611,1.069-1.262,2.105-1.945,3.134-1.2.088-2.443.129-3.7.129s-2.483-.04-3.664-.112q-1.049-1.531-1.977-3.134c-.619-1.069-1.189-2.153-1.728-3.262Zm14.512,4.114c.41-.707.8-1.422,1.173-2.145a37.3,37.3,0,0,1,1.358,3.56,35.294,35.294,0,0,1-3.777.643C26.9,25.753,27.312,25.062,27.714,24.371Zm1.157-6.147c-.378-.707-.763-1.414-1.165-2.105s-.8-1.358-1.229-2.025a36.977,36.977,0,0,1,3.688.643,35.56,35.56,0,0,1-1.294,3.487Zm-8.284-9.04a35.284,35.284,0,0,1,2.378,2.877c-1.591-.072-3.19-.072-4.781,0C18.971,11.024,19.783,10.06,20.586,9.184ZM11.265,4.259c1.35-.787,4.347.337,7.5,3.134.2.177.4.37.611.562a40.824,40.824,0,0,0-3.447,4.267,42.356,42.356,0,0,0-5.4.836c-.1-.41-.193-.828-.281-1.245C9.5,7.923,10,4.99,11.265,4.259ZM9.3,25.44c-.337-.1-.667-.2-1-.313a16.388,16.388,0,0,1-5.062-2.507,3.606,3.606,0,0,1-1.511-2.4c0-1.47,2.539-3.351,6.2-4.628.458-.161.924-.305,1.39-.442a42.727,42.727,0,0,0,1.969,5.11A43.923,43.923,0,0,0,9.3,25.44Zm9.369,7.875a14.707,14.707,0,0,1-4.532,2.836,3.556,3.556,0,0,1-2.836.1c-1.278-.739-1.808-3.576-1.085-7.392.088-.45.185-.9.3-1.342a40.2,40.2,0,0,0,5.456.787A42.4,42.4,0,0,0,19.437,32.6C19.18,32.848,18.923,33.089,18.666,33.314Zm1.969-1.953C19.815,30.478,19,29.5,18.2,28.445c.771.032,1.567.048,2.37.048.828,0,1.639-.016,2.443-.056a34.652,34.652,0,0,1-2.378,2.925Zm10.5,2.411a3.571,3.571,0,0,1-1.326,2.515c-1.278.739-4-.225-6.942-2.748-.337-.289-.675-.6-1.02-.924a39.75,39.75,0,0,0,3.391-4.307,39.611,39.611,0,0,0,5.48-.844c.08.329.153.659.217.98a14.648,14.648,0,0,1,.2,5.327ZM32.6,25.134c-.225.072-.45.145-.683.209a40.819,40.819,0,0,0-2.049-5.127,40.615,40.615,0,0,0,1.969-5.054c.418.121.82.249,1.205.378,3.744,1.286,6.372,3.2,6.372,4.66,0,1.575-2.8,3.608-6.814,4.934ZM20.57,23.929a3.68,3.68,0,1,0-3.68-3.68A3.68,3.68,0,0,0,20.57,23.929Z'}
                  transform={'translate(0 -2.251)'}
                  fill={'#fff'}
                />
              </svg>
            </div>
          </div>

          <p
            className={classes.description}
          >
            Lubię programować!
          </p>
          <p
            className={classes.description}
          >
            Daje mi to wiele satysfakcji i ogrom frajdy.
          </p>

        </Container>

      </Container>

    </section>
  )
}

PageAbout.propTypes = {
  className: PropTypes.string
}

export default PageAbout
