import React from 'react'

import PageHome from './pages/PageHome'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <PageHome />
    </div>
  )
}
export default App
