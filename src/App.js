import React from 'react'

import FullPageLayout from './components/FullPageLayout'
import Navbar from './components//Navbar'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <Navbar />
      <FullPageLayout />
    </div>
  )
}
export default App
