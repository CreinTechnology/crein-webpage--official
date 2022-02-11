import React from 'react'

import FullPageLayout from './components/FullPageLayout'

import classes from './styles.module.css'

export const App = () => {
  return (
    <div
      className={classes.app}
    >
      <FullPageLayout />
    </div>
  )
}
export default App
