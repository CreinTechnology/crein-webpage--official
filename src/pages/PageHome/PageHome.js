import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/Container'
import Button from '../../components/Button'

import classes from './styles.module.css'

export const PageHome = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <section
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Container
        className={classes.contentWrapper}
      >
        <span>
          <svg
            className={classes.overlayer}
            xmlns={'http://www.w3.org/2000/svg'}
            xmlnsXlink={'http://www.w3.org/1999/xlink'}
            width={82.614}
            height={111.104}
            {...props}
          >
            <defs>
              <pattern
                id={'a'}
                preserveAspectRatio={'xMidYMid slice'}
                width={'100%'}
                height={'100%'}
                viewBox={'0 0 38 56'}
              >
                <image
                  width={38}
                  height={56}
                  xlinkHref={'data:image/png;base64,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'}
                />
              </pattern>
              <pattern
                id={'b'}
                preserveAspectRatio={'xMidYMid slice'}
                width={'100%'}
                height={'100%'}
                viewBox={'0 0 40 57'}
              >
                <image
                  width={40}
                  height={57}
                  xlinkHref={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAA5CAYAAABEdGlTAAAABHNCSVQICAgIfAhkiAAABKJJREFUaIHFmF+IVFUcxz+/c2fWZe8km7N37jKlQUbuiJYVSFEpaCsqy+5sYD5FQiC99NB7T2U9Fz0EgUGIECy4f+yh1BbDCLPS/soI9geJtbszylLda65z7+lhnXV2nB13Zs5dP2/3/PnOhzP3nvs7FxrQO+zscfPO243GxI21WIc7nN6GljFga1fO/iMoBD8so9c8Uq/RHXY3EEWnEeybTSE62umNXzmxjG5AHcHswL1rwkTiDODWdPlo9ZQ37v20PGpzqOqL7nx3dzmRmOR2OQAb0cfTA+n7lkdtjgWCHZIcF1i7+HDtJhLWsVW7Vq2MW6zCvKA75BwQzZY7T9HrOzqto+wnGadYBQvAyTubRDjcxLwHUn5qrV/wj8TkNY8FsDJnvwesb3LuxlTOTvqFYNK81i0kO7RqdSjWpdYTeNkbLX5o0GkBqixqVzsBWusP3CH3OVNCtShBtrcTIIgF0Zg75G40JVWNAt1+sGAj0fH0HvN7pALJGMpyE7PqhOk9UgFpY2lCX3KFNWEsj7kVLJkMBLa6eedjU2EKoqKpsCr2unnnTRNBSpDzJoLq8HrvsPNSuyEKONm+S3205mC7e6QKIz41JVQHC4nGM8OZR1sNUMWJ4kXgqEGpWrpE689arSPnyi2l4j4YtVxHKgDviHcaeMe41gJaqyPnC1ZvrPiahrPmxW6hNVt6p3sONjNnQcmflI4daN166bUENPJibz7zxlLH33aqy+QzawX9NSZfgfV+WNj312jxozuOq9eYHXQeC4VTVedi42h0KNra6Y17Dc/adQWh8mVBHaPB14e20fjQ+KytFuvwRq9MamRfLGIVBBsa15ENV8cv+D+m1tk3ENqquhsipFQou1c82Hno2sVr15sSBPAvBKdSffZq4PFYBAGEHmWpp/2twWG+I6ruWvQvrsbbVNyPiNFCtBYRtrjTzqHa9qU9ACfRzpPOWPm/8nZgtWm5KjbYfV3iF4KTlYZFn+J6dOe7uztJntawzrhaNVr1V7afpgQBegZ7spaSb4CscbGbCFJSYSI3dXSqtKR7sJrSRGnKivQ24J8Y3ADQ6J4wUT4ALaxgBWfYecZCPtdad5hTq0bPSjJxf8tviaAQXOpaZ/8iwl6TWrcQi1DPtvUa8y/4BfvhLk9EBkxpVSOC2/Z71r8QfJvK2R3AswacaukxUgj4hWAy1df1EMgjJvKqafopXgwvWdoHYvxjpjFBRggJZFBrzhnLxKQg4B3z/KTq6Ad+NZXZ8j7YiOxAdk2YuHEWA8cGoytYYeqTqUtRRD/gt5sViyBAcaJ4DlGDWutyOznxnTcAv+D/bq9P/SbwfEsBmkKsggB+wf/pnlwqAPqbniy8G7sgwL8F/ys7ZzsCm5uYdu06N/bGdg/WMj1afLWZY4Og358Zm5lZNkFApxPTewS+XMLQq4nk7FsQ41Ncj/MjzJYjvRvk50bjROSVP0f+vgoxbdR3IjOYcUVxBvSaOt0j3ljxhcrFsq5ghemJaS+Moh3ATE3X98nkigUf3u/KClbozac3a7G+QOtO4HKo9BOlI6XLd9PpNpxBZ6ebzwRO3tlUr/9/z75XzpGV4uwAAAAASUVORK5CYII='}
                />
              </pattern>
            </defs>
            <path
              d={'M9.117 3.54 12.293 0l28.554 34.318a13 13 0 0 1 2.3 4.147 14.608 14.608 0 0 1-.013 9.342 12.687 12.687 0 0 1-2.311 4.1l-4.254 5L9.088 24.438a15.572 15.572 0 0 1-2.808-4.967 17.064 17.064 0 0 1-.933-5.6A16.565 16.565 0 0 1 6.3 8.328 14.4 14.4 0 0 1 9.117 3.54Z'}
              transform={'translate(34.385)'}
              fill={'url(#a)'}
            />
            <path
              d={'m43.349 81.769 4.463 4.9 28.07-34.3a14.909 14.909 0 0 0 2.343-4.03 14.676 14.676 0 0 0 .976-4.358 12.283 12.283 0 0 0-.422-4.183 9.244 9.244 0 0 0-1.855-3.5L57.342 12.822c3.244 6.4 4.767 11.8 5.06 16.527a25.8 25.8 0 0 1-2.329 12.531 48.685 48.685 0 0 1-6.868 10.483c-2.74 3.365-5.765 6.689-8.586 10.265a17.879 17.879 0 0 0-2.862 4.826 17.312 17.312 0 0 0-1.2 5.222 14.168 14.168 0 0 0 .518 4.983 10.523 10.523 0 0 0 2.274 4.11Z'}
              fill={'#00ff29'}
            />
            <path
              d={'M46.535 85.2a10.471 10.471 0 0 1-2.263-4.094 14.153 14.153 0 0 1-.516-4.97 17.334 17.334 0 0 1 1.191-5.213 17.91 17.91 0 0 1 2.853-4.817c2.791-3.553 5.783-6.859 8.5-10.2a49.28 49.28 0 0 0 6.825-10.4 25.846 25.846 0 0 0 2.39-12.4c-.247-4.667-1.694-9.987-4.823-16.273l-3.427-4.104c3.245 6.4 4.769 11.8 5.065 16.53a25.835 25.835 0 0 1-2.32 12.536 48.628 48.628 0 0 1-6.861 10.489c-2.738 3.367-5.762 6.692-8.583 10.268a17.876 17.876 0 0 0-2.862 4.825 17.3 17.3 0 0 0-1.2 5.222 14.173 14.173 0 0 0 .518 4.983 10.529 10.529 0 0 0 2.27 4.11l4.516 4.975.028-.034Z'}
              fill={'#00ff29'}
            />
            <path
              d={'m41.517 53.556-3.205 3.8L8.21 23.687a13.023 13.023 0 0 1-2.536-4.294A14.636 14.636 0 0 1 5.7 9.555a13.305 13.305 0 0 1 2.56-4.322L12.924 0l28.65 32.627a14.649 14.649 0 0 1 2.8 4.833 16.617 16.617 0 0 1 .92 5.533 17.093 17.093 0 0 1-.95 5.582 15.777 15.777 0 0 1-2.825 4.981Z'}
              transform={'translate(0 53.753)'}
              fill={'url(#b)'}
            />
            <path
              d={'m41.775 28.979-4.496-5.116L7.517 58.504a15.655 15.655 0 0 0-2.6 4.253 14.937 14.937 0 0 0-1.092 4.61 12.238 12.238 0 0 0 .463 4.407 9.3 9.3 0 0 0 2.055 3.646l21.022 23.441c-3.4-6.364-5-11.842-5.3-16.7a26.262 26.262 0 0 1 2.477-12.945 50.345 50.345 0 0 1 7.172-10.774c2.82-3.411 5.906-6.752 8.76-10.318a17.568 17.568 0 0 0 2.874-4.785 17.073 17.073 0 0 0 1.2-5.184 14.3 14.3 0 0 0-.509-4.986 11 11 0 0 0-2.264-4.19Z'}
              fill={'#00ff29'}
            />
            <path
              d={'m41.827 29.058-4.548-5.194-.029.033 1.32 1.5a11.051 11.051 0 0 1 2.273 4.207 14.314 14.314 0 0 1 .511 5 17.053 17.053 0 0 1-1.2 5.193 17.546 17.546 0 0 1-2.887 4.789c-2.853 3.545-5.935 6.867-8.753 10.257a50.816 50.816 0 0 0-7.192 10.7 26.263 26.263 0 0 0-2.569 12.851c.261 4.818 1.794 10.249 5.101 16.557l3.59 4c-3.395-6.363-5-11.841-5.3-16.7a26.287 26.287 0 0 1 2.464-12.948 50.3 50.3 0 0 1 7.162-10.78c2.817-3.413 5.9-6.754 8.755-10.321a17.571 17.571 0 0 0 2.874-4.785 17.073 17.073 0 0 0 1.2-5.183 14.3 14.3 0 0 0-.509-4.986 10.994 10.994 0 0 0-2.263-4.19Z'}
              fill={'#00ff29'}
            />
          </svg>
        </span>

        <Container
          className={classes.wrapper}
        >

          <div
            className={classes.layersWrapper}
          >
            <svg
              xmlns={'http://www.w3.org/2000/svg'}
              width={'135.517'}
              height={'107.5'}
              viewBox={'0 0 135.517 107.5'}
            >
              <g
                id={'Group_97'}
                data-name={'Group 97'}
                transform={'translate(-63 -248)'}
              >
                <path
                  id={'Path_54'}
                  data-name={'Path 54'}
                  d={'M135.329,30.482,82.616,6.455c-5.716-2.611-15.066-2.611-20.782,0L9.157,30.482c-6.21,2.823-6.21,7.445,0,10.267L61.376,64.566c5.963,2.717,15.771,2.717,21.734,0L135.329,40.75C141.539,37.927,141.539,33.3,135.329,30.482Z'}
                  transform={'translate(58.5 243.504)'}
                  fill={'#fff'}
                />
                <path
                  id={'Path_55'}
                  data-name={'Path 55'}
                  d={'M61.376,39.638,26.164,23.585a5.726,5.726,0,0,0-4.693,0L9.157,29.195c-6.21,2.823-6.21,7.445,0,10.267L61.376,63.278c5.963,2.717,15.771,2.717,21.734,0l52.219-23.816c6.21-2.823,6.21-7.445,0-10.267l-12.314-5.61a5.726,5.726,0,0,0-4.693,0L83.11,39.638C77.147,42.355,67.339,42.355,61.376,39.638Z'}
                  transform={'translate(58.5 290.185)'}
                  fill={'#00ba1a'}
                />
                <path
                  id={'Path_56'}
                  data-name={'Path 56'}
                  d={'M135.357,21.458l-11.185-5.081a5.644,5.644,0,0,0-4.657,0L81.41,33.631a31.149,31.149,0,0,1-18.312,0L24.992,16.378a5.644,5.644,0,0,0-4.657,0L9.15,21.458c-6.21,2.823-6.21,7.445,0,10.267L61.369,55.542c5.963,2.717,15.771,2.717,21.734,0l52.219-23.816C141.567,28.9,141.567,24.281,135.357,21.458Z'}
                  transform={'translate(58.507 274.62)'}
                  fill={'#00ff29'}
                />
              </g>
            </svg>

          </div>

          <div
            className={classes.textWrapper}
          >
            <h2
              className={`${classes.text} ${classes.textSize}`}
            >
              APLIKACJE
            </h2>
            <h2
              className={`${classes.text} ${classes.textSize}`}
            >
              PWA
            </h2>
            <h2
              className={`${classes.text} ${classes.textSmall}`}
            >
              STRONY WWW
            </h2>
          </div>

        </Container>

        <Container
          className={classes.svgWrapper}
        >
          <div
            className={classes.svgFirstName}
          >
            <svg
              className={classes.cmpFirstName}
              id={'Group_89'}
              data-name={'Group 89'}
              xmlns={'http://www.w3.org/2000/svg'}
              width={'106.504'}
              height={'30.009'}
              viewBox={'0 0 106.504 30.009'}
            >
              <path
                id={'Path_80'}
                data-name={'Path 80'}
                d={'M1362.512,5101.254a1.326,1.326,0,0,0,1.5,1.5v4.5q-7.5,0-7.5-6v-9q0-6,7.5-6h6v4.5h-6a1.326,1.326,0,0,0-1.5,1.5Zm9,6h-6v-4.5h6a1.327,1.327,0,0,0,1.5-1.5v-3h6v3Q1379.017,5107.258,1371.514,5107.256Zm1.5-15a1.327,1.327,0,0,0-1.5-1.5v-4.5q7.5,0,7.5,6v3h-6Z'}
                transform={'translate(-1356.51 -5081.748)'}
                fill={'#fff'}
              />
              <path
                id={'Path_81'}
                data-name={'Path 81'}
                d={'M2321.875,5090.751h-15l-3-4.5h18.005q7.5,0,7.5,6v1.5q0,4.816-4.832,5.762l4.832,7.742h-7.5l-7.5-12h7.5a1.327,1.327,0,0,0,1.5-1.5v-1.5A1.326,1.326,0,0,0,2321.875,5090.751Zm-9,16.5h-6v-15h6Z'}
                transform={'translate(-2281.372 -5081.748)'}
                fill={'#fff'}
              />
              <path
                id={'Path_82'}
                data-name={'Path 82'}
                d={'M3401.608,5090.751H3380.6l-3-4.5h24.008Zm-21.006,1.5h6v10.5h15v4.5H3380.6Zm21.006,7.5h-9l-4.5-4.5h13.5Z'}
                transform={'translate(-3329.604 -5081.748)'}
                fill={'#fff'}
              />
              <path
                id={'Path_83'}
                data-name={'Path 83'}
                d={'M4514.549,5086.249h6v21.007h-6Z'}
                transform={'translate(-4439.553 -5081.748)'}
                fill={'#fff'}
              />
              <path
                id={'Path_84'}
                data-name={'Path 84'}
                d={'M4893.52,4896.709l22.507,22.507v7.5l-22.507-22.506Zm6,15.6v9.9h-6v-15.9Zm10.5-1.2v-9.9h6v15.9Z'}
                transform={'translate(-4809.522 -4896.709)'}
                fill={'#fff'}
              />
            </svg>

          </div>

          <div
            className={classes.svgLastName}
          >
            <svg
              className={classes.cmpLastName}
              id={'Group_88'}
              data-name={'Group 88'}
              xmlns={'http://www.w3.org/2000/svg'}
              width={'249.42'}
              height={'30.037'}
              viewBox={'0 0 249.42 30.037'}
            >
              <path
                id={'Path_70'}
                data-name={'Path 70'}
                d={'M1379.758,6208.663h-21.026l-3-4.5h24.029Zm-13.516,1.5h6v15.019h-6Z'}
                transform={'translate(-1355.73 -6199.652)'}
                fill={'#fff'}
              />
              <path
                id={'Path_71'}
                data-name={'Path 71'}
                d={'M1862.975,6208.663h-21.023v-4.5h21.026Zm-21.025,1.5h6v10.513h15.018v4.5h-21.02Zm21.025,7.509H1852.46l-3-4.5h13.516Z'}
                transform={'translate(-1814.919 -6199.652)'}
                fill={'#fff'}
              />
              <path
                id={'Path_72'}
                data-name={'Path 72'}
                d={'M2280.167,6219.138a1.327,1.327,0,0,0,1.5,1.5v4.5q-7.509,0-7.509-6.008v-9.007q0-6.005,7.509-6.007h6.008v4.5h-6.007a1.327,1.327,0,0,0-1.5,1.5Zm9.011,6.008h-6.007v-4.5h6.007a1.327,1.327,0,0,0,1.5-1.5v-3h6v3Q2296.687,6225.146,2289.178,6225.146Zm1.5-15.018a1.327,1.327,0,0,0-1.5-1.5v-4.5q7.509,0,7.509,6.007v3h-6Z'}
                transform={'translate(-2223.1 -6199.614)'}
                fill={'#fff'}
              />
              <path
                id={'Path_73'}
                data-name={'Path 73'}
                d={'M2733.4,6204.12h6v21.025h-6Zm16.52,13.516h-6.008l-3-4.5h9.011v-9.013h6v21.025h-6Z'}
                transform={'translate(-2656.809 -6199.614)'}
                fill={'#fff'}
              />
              <path
                id={'Path_74'}
                data-name={'Path 74'}
                d={'M3192.63,6123.069l22.528,22.527v7.509l-22.528-22.527Zm6.008,15.622v9.912h-6.008v-15.92Zm10.512-1.2v-9.915h6.008v15.918Z'}
                transform={'translate(-3090.508 -6123.069)'}
                fill={'#fff'}
              />
              <path
                id={'Path_75'}
                data-name={'Path 75'}
                d={'M3657.858,6219.138a1.327,1.327,0,0,0,1.5,1.5v4.5q-7.509,0-7.509-6.008v-9.007q0-6.005,7.509-6.007h6.009v4.5h-6.008a1.327,1.327,0,0,0-1.5,1.5Zm10.512-9.01a1.326,1.326,0,0,0-1.5-1.5v-4.5q7.509,0,7.509,6.007v9.011q0,6.007-7.509,6.008h-6v-4.5h6a1.327,1.327,0,0,0,1.5-1.5Z'}
                transform={'translate(-3524.197 -6199.614)'}
                fill={'#fff'}
              />
              <path
                id={'Path_76'}
                data-name={'Path 76'}
                d={'M4117.107,6219.138h-6V6204.12h6Zm-6,1.5h21.025v4.5H4111.1Z'}
                transform={'translate(-3957.916 -6199.614)'}
                fill={'#fff'}
              />
              <path
                id={'Path_77'}
                data-name={'Path 77'}
                d={'M4524.188,6219.138a1.326,1.326,0,0,0,1.5,1.5v4.5q-7.51,0-7.509-6.008v-9.007q0-6.005,7.509-6.007h6.007v4.5h-6.006a1.327,1.327,0,0,0-1.5,1.5Zm10.512-9.01a1.326,1.326,0,0,0-1.5-1.5v-4.5q7.508,0,7.509,6.007v9.011q0,6.007-7.509,6.008h-6.008v-4.5h6.008a1.327,1.327,0,0,0,1.5-1.5Z'}
                transform={'translate(-4342.364 -6199.614)'}
                fill={'#fff'}
              />
              <path
                id={'Path_78'}
                data-name={'Path 78'}
                d={'M4984.93,6204.12h15.019v4.5H4984.93a1.327,1.327,0,0,0-1.5,1.5v9.011a1.327,1.327,0,0,0,1.5,1.5h7.509v4.5h-7.509q-7.51,0-7.509-6.007v-9Q4977.42,6204.121,4984.93,6204.12Zm15.019,21.025h-6.008v-7.509h-4.5l-3-4.5h13.516Z'}
                transform={'translate(-4776.073 -6199.614)'}
                fill={'#fff'}
              />
              <path
                id={'Path_79'}
                data-name={'Path 79'}
                d={'M5413.671,6215.774l-9.161-11.654h7.811l8.26,10.512-.9,1.142v9.372h-6.009Zm3.98-7.359,3.379-4.295h7.809l-7.283,9.266Z'}
                transform={'translate(-5179.418 -6199.614)'}
                fill={'#fff'}
              />
            </svg>

          </div>
        </Container>

        <Button
          label={'ILE TO KOSZTUJE?'}
          variant={'active'}
        />
      </Container>

    </section>
  )
}

PageHome.propTypes = {
  className: PropTypes.string
}

export default PageHome
