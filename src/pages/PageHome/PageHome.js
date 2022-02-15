import React from 'react'
import PropTypes from 'prop-types'

import Container from '../../components/Container'

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

        <Container
          className={classes.wrapper}
        >
          <div
            className={classes.layersWrapper}
          >
            <svg
              className={classes.layers}
              xmlns={'http://www.w3.org/2000/svg'}
              width={'181.944'}
              height={'145'}
              viewBox={'0 0 181.944 145'}
            >
              <g
                id={'Group_93'}
                data-name={'Group 93'}
                transform={'translate(-455 -377)'}
              >
                <path
                  id={'Path_54'}
                  data-name={'Path 54'}
                  d={'M180.15,39.385,109.378,7.126c-7.674-3.505-20.227-3.505-27.9,0L10.753,39.385c-8.337,3.79-8.337,10,0,13.785L80.861,85.145c8.006,3.648,21.175,3.648,29.18,0L180.15,53.17C188.487,49.38,188.487,43.175,180.15,39.385Z'}
                  transform={'translate(450.5 372.504)'}
                  fill={'#fff'}
                />
                <path
                  id={'Path_55'}
                  data-name={'Path 55'}
                  d={'M80.861,45.31,33.586,23.757a7.688,7.688,0,0,0-6.3,0L10.753,31.289c-8.337,3.79-8.337,10,0,13.785L80.861,77.049c8.006,3.648,21.175,3.648,29.18,0L180.15,45.074c8.337-3.79,8.337-10,0-13.785l-16.532-7.532a7.688,7.688,0,0,0-6.3,0L110.042,45.31C102.036,48.958,88.867,48.958,80.861,45.31Z'}
                  transform={'translate(450.5 442.216)'}
                  fill={'#00ba1a'}
                />
                <path
                  id={'Path_56'}
                  data-name={'Path 56'}
                  d={'M180.19,23.371,165.174,16.55a7.578,7.578,0,0,0-6.253,0l-51.16,23.164a41.821,41.821,0,0,1-24.585,0L32.015,16.55a7.578,7.578,0,0,0-6.253,0L10.746,23.371c-8.337,3.79-8.337,10,0,13.785L80.854,69.131c8.006,3.648,21.175,3.648,29.18,0l70.108-31.975C188.528,33.366,188.528,27.161,180.19,23.371Z'}
                  transform={'translate(450.507 418.85)'}
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

      </Container>

    </section>
  )
}

PageHome.propTypes = {
  className: PropTypes.string
}

export default PageHome
