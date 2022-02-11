import React from 'react'

import AppBar from './components/AppBar'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.root}
    >
      <AppBar/>
    </div>
  )
}
export default App
