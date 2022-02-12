import React from 'react'

import PageHome from './pages/PageHome'
import Navbar from './components//Navbar'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <Navbar />
      <PageHome />
    </div>
  )
}
export default App
